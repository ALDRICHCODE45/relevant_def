"use client";

import DotPattern from "@/components/ui/dot-pattern";
import Particles from "@/components/ui/particles";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

export const BackgroundPattern = () => {
  const dotRef = useRef<HTMLDivElement>(null);

  // Animación para mover el patrón de puntos
  useEffect(() => {
    let frameId: number;
    let angle = 0;

    const animate = () => {
      if (dotRef.current) {
        // Movimiento más notorio, círculo grande
        const radius = 32; // px, aumentar para movimiento mayor
        const speed = 0.01; // más alto para más velocidad
        const offsetX = Math.cos(angle) * radius;
        const offsetY = Math.sin(angle) * radius;
        dotRef.current.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        angle += speed;
      }
      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="absolute inset-0 pointer-events-none transition-transform duration-500"
        style={{ zIndex: 0 }}
      >
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "mask-[radial-gradient(ellipse,rgba(0,0,0,0.3)_30%,black_50%)]",
            "dark:fill-slate-700",
          )}
        />
      </div>
      <Particles
        className="absolute inset-0"
        quantity={400}
        ease={23}
        color={"#fff"}
        refresh
      />
    </>
  );
};
