"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import { BackgroundPattern } from "./backgroungPattern";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroPage() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center px-6 pt-10"
    >
      <BackgroundPattern />

      <div className="relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge
            variant="secondary"
            className="rounded-full py-1 border-border"
            asChild
          >
            <Link href="#experiencia">
              Especialistas en C-Level & TI{" "}
              <ArrowUpRight className="ml-1 size-4" />
            </Link>
          </Badge>
        </motion.div>

        {/* Texto principal - entra de abajo hacia arriba */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-3xl sm:text-3xl md:text-5xl lg:text-6xl md:leading-[1.2] font-semibold tracking-tighter"
        >
          La evolución del headhunting tradicional se llama
        </motion.h1>

        {/* Imagen - entra después del texto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center items-center mt-3 mb-6"
        >
          <Image
            src="/logo.webp"
            width={250}
            height={250}
            alt="Logo relevant"
            className="w-[160px] h-auto sm:w-[200px] md:w-[250px] object-contain"
          />
        </motion.div>

        {/* Texto descriptivo - entra de arriba hacia abajo */}
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="-mt-2 md:text-lg text-foreground/80"
        >
          Relevant es el socio definitivo para tus necesidades de talento
          especializado y C-Level. Somos el único headhunter boutique que se
          sumerge en el ADN de tu empresa antes de comenzar a entregarte
          candidatos de valor. (encontrandolos donde quiera que estén)
        </motion.p>

        {/* Botones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          <Button size="lg" className="rounded-full text-base" asChild>
            <Link href="#contacto">
              Comenzar Búsqueda <ArrowUpRight className="h-5! w-5!" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full text-base shadow-none"
            asChild
          >
            <Link href="#resultados">
              <CirclePlay className="h-5! w-5!" /> Ver Casos de Éxito
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
