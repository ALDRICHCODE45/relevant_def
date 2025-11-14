"use client";

import * as React from "react";
import {
  ScrollSpy,
  ScrollSpyLink,
  ScrollSpyNav,
  ScrollSpySection,
  ScrollSpyViewport,
} from "@/components/ui/scroll-spy";
import { BadgeCheck, Building2, Code2, Sparkles } from "lucide-react";

const posicionesPorSector = {
  direccion: {
    titulo: "Dirección y Alta Gerencia",
    porcentaje: "25%",
    icon: Building2,
    posiciones: [
      "General",
      "Country Manager",
      "Ingeniería",
      "Finanzas",
      "Marketing",
      "Administración",
      "Comercial",
      "Operaciones",
      "Recursos Humanos",
    ],
  },
  especialidades: {
    titulo: "Especialidades",
    porcentaje: "30%",
    icon: BadgeCheck,
    posiciones: [
      "Comercial",
      "Producción",
      "Ingeniería",
      "Compras",
      "Impuestos",
      "Auditores",
      "Riesgo Ventas",
      "Digital Servicio",
      "Técnico",
      "Logística",
    ],
  },
  tech: {
    titulo: "Tech",
    porcentaje: "45%",
    icon: Code2,
    subsecciones: [
      {
        subtitulo: "Negocio",
        posiciones: [
          "Program Management",
          "HR",
          "Change Management",
          "Project Lead",
          "SAP/Oracle Consultants",
          "GLM / Asset Mgmnt",
          "Procurement",
          "ITSM/ITILM",
          "Product",
        ],
      },
      {
        subtitulo: "Técnico",
        posiciones: [
          "Data Scientist",
          "Software Engineer",
          "Data Governance",
          "Cloud IT",
          "DevOps",
          "Solution Engineer / Architect",
          "SW Development",
          "Cibersecurity",
          "Mobile Developers",
          "QA",
          "IA / Machine Learning",
        ],
      },
    ],
  },
};

export function PosicionesClave() {
  const [scrollContainer, setScrollContainer] =
    React.useState<HTMLDivElement | null>(null);

  return (
    <div className="py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-(--breakpoint-xl) mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tighter mb-2 md:mb-3">
            Posiciones Clave por Sector
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground px-2">
            Especializados en conectar el talento correcto con las posiciones
            más críticas
          </p>
        </div>

        <ScrollSpy
          offset={16}
          scrollContainer={scrollContainer}
          className="rounded-xl border shadow-sm overflow-hidden flex flex-col md:flex-row"
        >
          <ScrollSpyNav className="w-full md:w-56 border-r-0 md:border-r border-b md:border-b-0 bg-accent/30 p-3 md:p-6">
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-x-visible">
              <ScrollSpyLink
                value="direccion"
                className="flex items-center gap-2 px-3 py-2 rounded-lg transition-colors hover:bg-accent data-[active=true]:bg-primary data-[active=true]:text-primary-foreground font-medium whitespace-nowrap text-xs md:text-sm shrink-0"
              >
                <Building2 className="w-3.5 h-3.5 md:w-4 md:h-4" />
                <span>Dirección</span>
              </ScrollSpyLink>
              <ScrollSpyLink
                value="especialidades"
                className="flex items-center gap-2 px-3 py-2 rounded-lg transition-colors hover:bg-accent data-[active=true]:bg-primary data-[active=true]:text-primary-foreground font-medium whitespace-nowrap text-xs md:text-sm shrink-0"
              >
                <BadgeCheck className="w-3.5 h-3.5 md:w-4 md:h-4" />
                <span>Especialidades</span>
              </ScrollSpyLink>
              <ScrollSpyLink
                value="tech"
                className="flex items-center gap-2 px-3 py-2 rounded-lg transition-colors hover:bg-accent data-[active=true]:bg-primary data-[active=true]:text-primary-foreground font-medium whitespace-nowrap text-xs md:text-sm shrink-0"
              >
                <Code2 className="w-3.5 h-3.5 md:w-4 md:h-4" />
                <span>Tech</span>
              </ScrollSpyLink>
            </div>
          </ScrollSpyNav>

          <ScrollSpyViewport
            ref={setScrollContainer}
            className="overflow-y-auto p-4 md:p-8 h-[500px] md:h-[600px]"
          >
            {/* Dirección y Alta Gerencia */}
            <ScrollSpySection value="direccion" className="mb-8 md:mb-12">
              <div className="mb-4 md:mb-6">
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                  {posicionesPorSector.direccion.titulo}
                </h3>
                <span className="text-2xl md:text-3xl font-bold text-primary">
                  {posicionesPorSector.direccion.porcentaje}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
                {posicionesPorSector.direccion.posiciones.map((posicion) => (
                  <div
                    key={posicion}
                    className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-2.5 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                  >
                    <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary shrink-0" />
                    <span className="text-xs md:text-sm font-medium break-words">{posicion}</span>
                  </div>
                ))}
              </div>
            </ScrollSpySection>

            {/* Especialidades */}
            <ScrollSpySection value="especialidades" className="mb-8 md:mb-12">
              <div className="mb-4 md:mb-6">
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                  {posicionesPorSector.especialidades.titulo}
                </h3>
                <span className="text-2xl md:text-3xl font-bold text-primary">
                  {posicionesPorSector.especialidades.porcentaje}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
                {posicionesPorSector.especialidades.posiciones.map(
                  (posicion) => (
                    <div
                      key={posicion}
                      className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-2.5 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                    >
                      <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary shrink-0" />
                      <span className="text-xs md:text-sm font-medium break-words">{posicion}</span>
                    </div>
                  )
                )}
              </div>
            </ScrollSpySection>

            {/* Tech */}
            <ScrollSpySection value="tech" className="mb-8 md:mb-12">
              <div className="mb-4 md:mb-6">
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                  {posicionesPorSector.tech.titulo}
                </h3>
                <span className="text-2xl md:text-3xl font-bold text-primary">
                  {posicionesPorSector.tech.porcentaje}
                </span>
              </div>
              <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
                Este sector se divide en dos áreas de posiciones:
              </p>

              {posicionesPorSector.tech.subsecciones.map((subseccion, idx) => (
                <div
                  key={subseccion.subtitulo}
                  className={idx > 0 ? "mt-6 md:mt-8" : ""}
                >
                  <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 flex items-center gap-2">
                    <span className="h-7 w-7 md:h-8 md:w-8 flex items-center justify-center rounded-full bg-primary text-primary-foreground text-xs md:text-sm font-bold shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{subseccion.subtitulo}</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
                    {subseccion.posiciones.map((posicion) => (
                      <div
                        key={posicion}
                        className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-2.5 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                      >
                        <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary shrink-0" />
                        <span className="text-xs md:text-sm font-medium break-words">{posicion}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </ScrollSpySection>
          </ScrollSpyViewport>
        </ScrollSpy>
      </div>
    </div>
  );
}
