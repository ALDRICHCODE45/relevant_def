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
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 sm:pt-10 pb-12"
    >
      <BackgroundPattern />

      <div className="relative z-10 text-center max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge
            variant="secondary"
            className="rounded-full py-1 px-3 text-xs sm:text-sm border-border"
            asChild
          >
            <Link href="#experiencia">
              Especialistas en C-Level & TI{" "}
              <ArrowUpRight className="ml-1 size-3 sm:size-4" />
            </Link>
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight sm:leading-[1.2] font-semibold tracking-tighter px-2"
        >
          La evolución del headhunting tradicional se llama
        </motion.h1>

        {/* Imagen - entra después del texto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center items-center mt-4 sm:mt-3 mb-4 sm:mb-6"
        >
          <Image
            src="/logo.webp"
            width={250}
            height={250}
            alt="Logo relevant"
            className="w-[140px] h-auto sm:w-[180px] md:w-[200px] lg:w-[250px] object-contain"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-2 sm:-mt-2 text-sm sm:text-base md:text-lg text-foreground/80 px-4 sm:px-0 leading-relaxed"
        >
          Relevant es el socio definitivo para tus necesidades de talento
          especializado y C-Level. Somos el único headhunter boutique que se
          sumerge en el ADN de tu empresa antes de comenzar a entregarte
          candidatos de valor. (encontrandolos donde quiera que estén)
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0"
        >
          <Button size="lg" className="rounded-full text-sm sm:text-base w-full sm:w-auto" asChild>
            <Link href="#contacto">
              Comenzar Búsqueda <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 ml-1" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full text-sm sm:text-base shadow-none w-full sm:w-auto"
            asChild
          >
            <Link href="#resultados">
              <CirclePlay className="h-4 w-4 sm:h-5 sm:w-5 mr-1" /> Ver Casos de Éxito
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
