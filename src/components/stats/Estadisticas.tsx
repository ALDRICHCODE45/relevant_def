"use client";

import { BadgeDollarSign, Target, UserRoundCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const estadisticas = [
  {
    icon: Target,
    numero: "93%",
    titulo: "Mayor rate de permanencia definitiva",
    descripcion: "De nuestros reclutados consiguen contratos indefinidos",
  },
  {
    icon: BadgeDollarSign,
    numero: "$0",
    titulo: "Cero inversión",
    descripcion:
      "Nuestros socios no invierten un solo peso. Solo pagan por el éxito con tarifa única cuando el talento esté firmado y presente",
  },
  {
    icon: Zap,
    numero: "80%",
    titulo: "Máximo ahorro en tiempo",
    descripcion:
      "De las ocasiones nuestros clientes seleccionan candidatos en la primera terna",
  },
  {
    icon: UserRoundCheck,
    numero: "80%",
    titulo: "Tasa de recurrencia",
    descripcion: "De nuestros clientes nos contratan en más de una ocasión",
  },
];

const Estadisticas = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="resultados"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 "
    >
      <div ref={ref} className="max-w-(--breakpoint-lg) w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl text-[#0C2055]  md:text-5xl leading-tight sm:leading-[1.15]! font-semibold tracking-tighter text-center px-2"
        >
          Resultados que hablan por sí mismos
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-3 text-base sm:text-lg md:text-xl text-center text-muted-foreground px-4"
        >
          Cifras reales que demuestran nuestro compromiso con la excelencia en
          reclutamiento para ti.
        </motion.p>

        <div className="mt-8 sm:mt-12 grid md:grid-cols-2 gap-4 sm:gap-6">
          {estadisticas.map(
            ({ numero, titulo, descripcion, icon: Icon }, index) => (
              <motion.div
                key={titulo}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group relative border p-6 sm:p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:border-primary/50"
              >
                <div className="w-full flex  rounded-full bg-accent text-primary p-2">
                  <div className="flex items-center">
                    <Icon />
                  </div>
                  <h3 className="text-lg ml-3 sm:text-xl font-semibold tracking-tight">
                    {titulo}
                  </h3>
                </div>
                <div className="mt-4 sm:mt-6 text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter bg-linear-to-br from-primary to-primary/60 bg-clip-text text-transparent">
                  {numero}
                </div>
                <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {descripcion}
                </p>
              </motion.div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Estadisticas;
