"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  MailIcon,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import Link from "next/link";
import { useState, FormEvent, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

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
          className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight"
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
                href="mailto:contacto@relevantmx.com"
              >
                relevant@relevantmx.com
              </Link>
            </div>
            <div>
              <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full">
                <MessageCircle />
              </div>
              <h3 className="mt-6 font-semibold text-xl">WhatsApp</h3>
              <p className="my-2.5 text-muted-foreground">
                Nuestro equipo especializado está listo para ayudarte.
              </p>
              <Link
                className="font-medium text-primary"
                href="https://wa.me/12345678"
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
