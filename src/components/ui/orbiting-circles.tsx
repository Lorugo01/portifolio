import { Children, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface OrbitingCirclesProps {
  children: ReactNode;
  className?: string;
  /** Raio da órbita, em pixels. */
  radius?: number;
  /** Segundos para dar uma volta. */
  duration?: number;
  reverse?: boolean;
  /** Tamanho de cada item, em pixels. */
  iconSize?: number;
  showPath?: boolean;
}

/**
 * Itens girando em volta de um centro (no estilo do Orbiting Circles do Magic UI).
 * Os itens ficam espaçados por igual na órbita; quem prefere menos movimento vê tudo parado.
 */
export function OrbitingCircles({
  children,
  className,
  radius = 160,
  duration = 20,
  reverse = false,
  iconSize = 44,
  showPath = true,
}: OrbitingCirclesProps) {
  const items = Children.toArray(children);
  return (
    <>
      {showPath && (
        <svg
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            className="stroke-white/10"
            strokeWidth={1}
            strokeDasharray="4 6"
          />
        </svg>
      )}
      {items.map((child, index) => (
        <div
          key={index}
          style={
            {
              "--duration": duration,
              "--radius": radius,
              "--angle": (360 / items.length) * index,
              width: iconSize,
              height: iconSize,
            } as React.CSSProperties
          }
          className={cn(
            "absolute flex transform-gpu items-center justify-center animate-orbit motion-reduce:[animation-play-state:paused]",
            reverse && "[animation-direction:reverse]",
            className
          )}
        >
          {child}
        </div>
      ))}
    </>
  );
}
