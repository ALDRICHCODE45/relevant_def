import { BadgeDollarSign, Target, UserRoundCheck, Zap } from "lucide-react";

const estadisticas = [
  {
    icon: Target,
    numero: "93%",
    titulo: "Mayor Rate de Permanencia Definitiva",
    descripcion: "De nuestros reclutados consiguen contratos indefinidos",
  },
  {
    icon: Zap,
    numero: "80%",
    titulo: "Máximo Ahorro en Tiempo",
    descripcion:
      "De las ocasiones nuestros clientes seleccionan candidatos en la primera terna",
  },
  {
    icon: BadgeDollarSign,
    numero: "$0",
    titulo: "Cero Inversión",
    descripcion:
      "Nuestros socios no invierten un solo peso. Solo pagan por el éxito con tarifa única cuando el talento esté firmado y presente",
  },
  {
    icon: UserRoundCheck,
    numero: "80%",
    titulo: "Tasa de Satisfacción",
    descripcion: "De nuestros clientes nos contratan en más de una ocasión",
  },
];

const Estadisticas = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-(--breakpoint-lg)">
        <h2 className="text-4xl md:text-5xl leading-[1.15]! font-semibold tracking-tighter text-center">
          Resultados que Hablan por Sí Mismos
        </h2>
        <p className="mt-3 text-xl text-center text-muted-foreground">
          Cifras reales que demuestran nuestro compromiso con la excelencia en
          reclutamiento para ti.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {estadisticas.map(({ numero, titulo, descripcion, icon: Icon }) => (
            <div
              key={titulo}
              className="group relative border p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:border-primary/50"
            >
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-accent text-primary">
                <Icon className="w-6 h-6" />
              </div>
              <div className="mt-6 text-6xl md:text-7xl font-bold tracking-tighter bg-linear-to-br from-primary to-primary/60 bg-clip-text text-transparent">
                {numero}
              </div>
              <h3 className="mt-4 text-xl font-semibold tracking-tight">
                {titulo}
              </h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                {descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Estadisticas;
