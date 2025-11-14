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
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experiencia" className="py-16 px-6">
      <div ref={ref} className="max-w-(--breakpoint-xl) mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold tracking-tighter text-center mb-3"
        >
          Nuestra Experiencia
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-center text-muted-foreground mb-12"
        >
          Sectores especializados donde conectamos el mejor talento TI
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
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
        </motion.div>
      </div>
    </section>
  );
}
