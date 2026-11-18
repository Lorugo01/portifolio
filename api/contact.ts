import type { IncomingMessage, ServerResponse } from 'node:http';
import nodemailer from 'nodemailer';

/**
 * Formulário de contato do portfólio, no mesmo desenho do MaxRPG:
 * a mensagem é validada aqui no servidor e entregue por SMTP (Nodemailer).
 *
 * Configuração (variáveis de ambiente, nunca com prefixo VITE_):
 *   SMTP_HOST, SMTP_PORT, SMTP_SECURE ("true" para a porta 465),
 *   SMTP_USER, SMTP_PASS, MAIL_FROM e CONTACT_EMAIL (destino; vazio = SMTP_USER).
 *
 * Sem SMTP_HOST nada é enviado. Fora de produção o conteúdo vai para o log,
 * para dar para testar o fluxo sem servidor de e-mail.
 */

type Request = IncomingMessage & { body?: unknown };

interface ContactInput {
  name: string;
  email: string;
  message: string;
  website?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function sendJson(res: ServerResponse, status: number, body: unknown) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(body));
}

/** Mesmas regras do ContactDto do MaxRPG. Devolve o erro ou os dados limpos. */
function validate(body: unknown): { error: string } | { data: ContactInput } {
  const input = (body ?? {}) as Record<string, unknown>;
  const text = (value: unknown) => (typeof value === 'string' ? value : '');

  // Uma linha só: nome e e-mail entram em cabeçalhos do e-mail.
  const name = text(input.name).replace(/\s+/g, ' ').trim();
  const email = text(input.email).trim().toLowerCase();
  const message = text(input.message).trim();
  const website = text(input.website).slice(0, 200);

  if (name.length < 2 || name.length > 80) {
    return { error: 'invalid_name' };
  }
  if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    return { error: 'invalid_email' };
  }
  if (message.length < 10 || message.length > 3000) {
    return { error: 'invalid_message' };
  }
  return { data: { name, email, message, website } };
}

function createTransporter() {
  const host = process.env.SMTP_HOST;
  if (!host) return undefined;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  return nodemailer.createTransport({
    host,
    port,
    secure: (process.env.SMTP_SECURE || (port === 465 ? 'true' : 'false')) === 'true',
    auth: user ? { user, pass: process.env.SMTP_PASS || '' } : undefined,
  });
}

export default async function handler(req: Request, res: ServerResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return sendJson(res, 405, { success: false, error: 'method_not_allowed' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      return sendJson(res, 400, { success: false, error: 'invalid_body' });
    }
  }

  const result = validate(body);
  if ('error' in result) {
    return sendJson(res, 400, { success: false, error: result.error });
  }
  const { name, email, message, website } = result.data;

  // Robô que preencheu o campo-isca: finge sucesso e não envia nada.
  if (website?.trim()) return sendJson(res, 200, { success: true });

  const preview = message.replace(/\s+/g, ' ').slice(0, 60);
  const details = [
    `De: ${name} <${email}>`,
    'Origem: formulário de contato do portfólio',
    `Enviado em: ${new Date().toISOString()}`,
  ];
  const mail = {
    from: process.env.MAIL_FROM || process.env.SMTP_USER || 'Portfólio <nao-responda@localhost>',
    to: process.env.CONTACT_EMAIL || process.env.SMTP_USER || '',
    // Responder ao e-mail responde direto para quem escreveu.
    replyTo: email,
    subject: `[Portfólio] Contato: ${preview}`,
    text: `Contato\n\n${message}\n\n--\n${details.join('\n')}`,
    html:
      `<div style="font-family:Arial,sans-serif;max-width:560px;color:#1d1b20">` +
      `<h2 style="color:#4d6bff;margin-bottom:4px">Contato</h2>` +
      `<p style="white-space:pre-wrap;font-size:15px;line-height:1.5">${escapeHtml(message)}</p>` +
      `<hr style="border:none;border-top:1px solid #ddd">` +
      `<p style="color:#666;font-size:13px;line-height:1.6">${details.map(escapeHtml).join('<br>')}</p>` +
      `</div>`,
  };

  const transporter = createTransporter();
  if (!transporter || !mail.to) {
    if (process.env.NODE_ENV !== 'production') {
      console.log(`[e-mail não enviado] ${mail.subject}\n${mail.text}`);
    } else {
      console.warn('SMTP_HOST ou destino não definidos: o contato não tem para onde ir.');
    }
    return sendJson(res, 503, { success: false, error: 'mail_unavailable' });
  }

  try {
    await transporter.sendMail(mail);
    return sendJson(res, 200, { success: true });
  } catch (error) {
    console.error(`Falha ao enviar o contato: ${error}`);
    return sendJson(res, 503, { success: false, error: 'mail_unavailable' });
  }
}
