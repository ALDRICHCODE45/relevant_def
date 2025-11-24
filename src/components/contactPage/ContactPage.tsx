"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MailIcon, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import Link from "next/link";
import { useState, FormEvent, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import type { SVGProps } from "react";

const WhatsApp = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 360 362">
    <path
      fill="#25D366"
      fillRule="evenodd"
      d="M307.546 52.566C273.709 18.684 228.706.017 180.756 0 81.951 0 1.538 80.404 1.504 179.235c-.017 31.594 8.242 62.432 23.928 89.609L0 361.736l95.024-24.925c26.179 14.285 55.659 21.805 85.655 21.814h.077c98.788 0 179.21-80.413 179.244-179.244.017-47.898-18.608-92.926-52.454-126.807v-.008Zm-126.79 275.788h-.06c-26.73-.008-52.952-7.194-75.831-20.765l-5.44-3.231-56.391 14.791 15.05-54.981-3.542-5.638c-14.912-23.721-22.793-51.139-22.776-79.286.035-82.14 66.867-148.973 149.051-148.973 39.793.017 77.198 15.53 105.328 43.695 28.131 28.157 43.61 65.596 43.593 105.398-.035 82.149-66.867 148.982-148.982 148.982v.008Zm81.719-111.577c-4.478-2.243-26.497-13.073-30.606-14.568-4.108-1.496-7.09-2.243-10.073 2.243-2.982 4.487-11.568 14.577-14.181 17.559-2.613 2.991-5.226 3.361-9.704 1.117-4.477-2.243-18.908-6.97-36.02-22.226-13.313-11.878-22.304-26.54-24.916-31.027-2.613-4.486-.275-6.91 1.959-9.136 2.011-2.011 4.478-5.234 6.721-7.847 2.244-2.613 2.983-4.486 4.478-7.469 1.496-2.991.748-5.603-.369-7.847-1.118-2.243-10.073-24.289-13.812-33.253-3.636-8.732-7.331-7.546-10.073-7.692-2.613-.13-5.595-.155-8.586-.155-2.991 0-7.839 1.118-11.947 5.604-4.108 4.486-15.677 15.324-15.677 37.361s16.047 43.344 18.29 46.335c2.243 2.991 31.585 48.225 76.51 67.632 10.684 4.615 19.029 7.374 25.535 9.437 10.727 3.412 20.49 2.931 28.208 1.779 8.604-1.289 26.498-10.838 30.228-21.298 3.73-10.46 3.73-19.433 2.613-21.298-1.117-1.865-4.108-2.991-8.586-5.234l.008-.017Z"
      clipRule="evenodd"
    />
  </svg>
);

interface FormData {
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  mensaje: string;
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message?: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [status, setStatus] = useState<FormStatus>({ type: "idle" });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validación de campos vacíos
    if (
      !formData.nombre ||
      !formData.empresa ||
      !formData.email ||
      !formData.telefono ||
      !formData.mensaje
    ) {
      setStatus({
        type: "error",
        message: "Todos los campos son obligatorios",
      });
      return;
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: "error",
        message: "Por favor ingresa un email válido",
      });
      return;
    }

    setStatus({ type: "loading" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error al enviar el mensaje");
      }

      setStatus({
        type: "success",
        message:
          "¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.",
      });

      // Limpiar formulario
      setFormData({
        nombre: "",
        empresa: "",
        email: "",
        telefono: "",
        mensaje: "",
      });

      // Limpiar mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setStatus({ type: "idle" });
      }, 5000);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Error al enviar el mensaje. Por favor intenta de nuevo.",
      });

      // Limpiar mensaje de error después de 5 segundos
      setTimeout(() => {
        setStatus({ type: "idle" });
      }, 5000);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <section
      id="contacto"
      className="min-h-screen flex items-center justify-center py-16"
    >
      <div
        ref={ref}
        className="w-full max-w-(--breakpoint-xl) mx-auto px-6 xl:px-0"
      >
        <motion.b
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-muted-foreground uppercase font-semibold text-sm"
        >
          Contáctanos
        </motion.b>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-[#0C2055]"
        >
          Resuelve definitivamente tus necesidades de talento
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 grid lg:grid-cols-2 gap-16 md:gap-10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            <div>
              <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full">
                <MailIcon />
              </div>
              <h3 className="mt-6 font-semibold text-xl">Email</h3>
              <p className="my-2.5 text-muted-foreground">
                Nuestro equipo especializado está listo para ayudarte.
              </p>
              <Link
                className="font-medium text-primary"
                href="mailto:relevant@relevantmx.com"
              >
                relevant@relevantmx.com
              </Link>
            </div>
            <div>
              <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full">
                <WhatsApp className="w-7 h-7" />
              </div>
              <h3 className="mt-6 font-semibold text-xl">WhatsApp</h3>
              <p className="my-2.5 text-muted-foreground">
                Nuestro equipo especializado está listo para ayudarte.
              </p>
              <Link
                className="font-medium text-primary"
                href="https://wa.me/5623191438"
                target="_blank"
                rel="noopener noreferrer"
              >
                Iniciar chat
              </Link>
            </div>
          </div>

          {/* Form */}
          <Card className="bg-background/60 backdrop-blur-md border shadow-none py-0">
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                  <div className="col-span-2 sm:col-span-1">
                    <Label htmlFor="nombre">Nombre</Label>
                    <Input
                      placeholder="Nombre"
                      id="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      disabled={status.type === "loading"}
                      className="mt-2 bg-white h-10 shadow-none"
                      required
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <Label htmlFor="empresa">Empresa</Label>
                    <Input
                      placeholder="Empresa"
                      id="empresa"
                      value={formData.empresa}
                      onChange={handleInputChange}
                      disabled={status.type === "loading"}
                      className="mt-2 bg-white h-10 shadow-none"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      type="email"
                      placeholder="Email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled={status.type === "loading"}
                      className="mt-2 bg-white h-10 shadow-none"
                      required
                    />
                  </div>

                  <div className="col-span-2">
                    <Label htmlFor="telefono">Teléfono Celular</Label>
                    <Input
                      type="text"
                      placeholder="55 5676... "
                      id="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      disabled={status.type === "loading"}
                      className="mt-2 bg-white h-10 shadow-none"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <Label htmlFor="mensaje">
                      ¿Qué posiciones se te están complicando cubrir?
                    </Label>
                    <Textarea
                      id="mensaje"
                      placeholder="Cuéntanos sobre tu necesidad de reclutamiento..."
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      disabled={status.type === "loading"}
                      className="mt-2 bg-white shadow-none"
                      rows={6}
                      required
                    />
                  </div>

                  {/* Mensaje de estado */}
                  {status.type !== "idle" && (
                    <div className="col-span-2">
                      {status.type === "success" && (
                        <div className="flex items-center gap-2 p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg text-green-800 dark:text-green-200">
                          <CheckCircle2 className="w-5 h-5 shrink-0" />
                          <p className="text-sm">{status.message}</p>
                        </div>
                      )}
                      {status.type === "error" && (
                        <div className="flex items-center gap-2 p-4 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg text-red-800 dark:text-red-200">
                          <AlertCircle className="w-5 h-5 shrink-0" />
                          <p className="text-sm">{status.message}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <Button
                  type="submit"
                  className="mt-6 w-full bg-[#0C2055] cursor-pointer"
                  size="lg"
                  disabled={status.type === "loading"}
                >
                  {status.type === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    "Enviar Mensaje"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;
