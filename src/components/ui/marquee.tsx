import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  /** Quantas cópias do conteúdo; o bastante para cobrir a largura da tela. */
  repeat?: number;
}

/**
 * Faixa com rolagem horizontal infinita (no estilo do Marquee do Magic UI).
 * Usa só CSS; quem prefere menos movimento vê a faixa parada.
 */
export function Marquee({
  children,
  className,
  reverse = false,
  pauseOnHover = true,
  repeat = 4,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden [--duration:40s] [--gap:0.75rem] [gap:var(--gap)]",
        "[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          aria-hidden={i > 0}
          className={cn(
            "flex shrink-0 justify-around [gap:var(--gap)] animate-marquee motion-reduce:animate-none",
            reverse && "[animation-direction:reverse]",
            pauseOnHover && "group-hover:[animation-play-state:paused]"
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
