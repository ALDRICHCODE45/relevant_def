"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import { BackgroundPattern } from "./backgroungPattern";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroPage() {
  return (
    <section
      id="inicio"
      className="h-screen flex items-center justify-center px-4 sm:px-6"
    >
      <BackgroundPattern />

      <div className="relative z-10 text-center max-w-4xl w-full">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 sm:mt-6 text-2xl text-[#0C2055] sm:text-3xl md:text-5xl lg:text-6xl leading-tight sm:leading-[1.2] font-semibold tracking-tighter px-2"
        >
          La evolución del headhunting
        </motion.h1>

        {/* Logo Relevant - entra después del texto */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-2xl text-[#0C2055] sm:text-3xl md:text-5xl lg:text-6xl leading-tight sm:leading-[1.2] font-semibold tracking-tighter px-2"
        >
          se llama relevant{" "}
          <span className="text-base md:text-lg lg:text-xl align-super relative -top-1">
            ®
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="m-4 text-sm sm:text-base md:text-lg text-black px-4 sm:px-0 leading-relaxed"
        >
          Relevant es el socio definitivo para tus necesidades de talento
          especializado y C-Level.
          <span className="block mt-1">
            Somos el único headhunter boutique que se sumerge en el ADN de tu
            empresa antes de comenzar a entregarte candidatos de valor,{" "}
            <strong>encontrándolos donde quiera que estén.</strong>
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0"
        >
          <Button
            size="lg"
            className="rounded-full text-sm sm:text-base w-full sm:w-auto bg-[#00bf63] hover:bg-[#02C565]/90 text-white hover:shadow-xl hover:shadow-[#02C565]/40 hover:scale-105 transition-all duration-300"
            asChild
          >
            <Link href="#contacto">
              Comenzar búsqueda{" "}
              <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 ml-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
