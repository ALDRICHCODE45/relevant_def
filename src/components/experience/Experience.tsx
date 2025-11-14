"use client";

import {
  Marquee,
  MarqueeContent,
  MarqueeEdge,
  MarqueeItem,
} from "@/components/ui/marquee";
import {
  Briefcase,
  Code,
  Droplet,
  Factory,
  Flame,
  LockKeyhole,
  Microscope,
  Pill,
  Rocket,
  ShoppingBag,
  Sparkles,
  Users,
} from "lucide-react";

const sectores = [
  { nombre: "Tecnología de la Información", icon: Code },
  { nombre: "Digitalización", icon: Sparkles },
  { nombre: "Ciberseguridad", icon: LockKeyhole },
  { nombre: "Manufactura Especializada", icon: Factory },
  { nombre: "Fintech", icon: Briefcase },
  { nombre: "Química", icon: Droplet },
  { nombre: "Farma", icon: Pill },
  { nombre: "Energía", icon: Flame },
  { nombre: "Oil and Gas", icon: Microscope },
  { nombre: "Comercio", icon: ShoppingBag },
  { nombre: "Startups", icon: Rocket },
  { nombre: "C Level", icon: Users },
];

export function Experience() {
  return (
    <div className="py-16 px-6">
      <div className="max-w-(--breakpoint-xl) mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-center mb-3">
          Nuestra Experiencia
        </h2>
        <p className="text-lg text-center text-muted-foreground mb-12">
          Sectores especializados donde conectamos el mejor talento TI
        </p>

        <Marquee
          aria-label="Sectores de experiencia"
          pauseOnHover
          pauseOnKeyboard
        >
          <MarqueeContent>
            {sectores.map((sector) => (
              <MarqueeItem key={sector.nombre} asChild>
                <div className="flex items-center gap-3 w-[200px] rounded-xl border bg-card px-5 py-3 text-card-foreground shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-9 w-9 flex items-center justify-center rounded-full bg-accent text-primary shrink-0">
                    <sector.icon className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-sm leading-tight">
                    {sector.nombre}
                  </span>
                </div>
              </MarqueeItem>
            ))}
          </MarqueeContent>
          <MarqueeEdge side="left" />
          <MarqueeEdge side="right" />
        </Marquee>
      </div>
    </div>
  );
}
