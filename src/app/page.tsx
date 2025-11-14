import type { Metadata } from "next";
import CallToAction from "@/components/callToAction/CallToAction";
import ContactPage from "@/components/contactPage/ContactPage";
import { Experience } from "@/components/experience/Experience";
import Footer from "@/components/footer/Footer";
import HeroPage from "@/components/hero/HeroPage";
import { PosicionesClave } from "@/components/posiciones-clave/PosicionesClave";
import Estadisticas from "@/components/stats/Estadisticas";

export const metadata: Metadata = {
  title: "Relevant - La Evolución del Headhunting Tradicional",
  description:
    "Relevant es el headhunter con el mayor rate de permanencia definitiva (93%). Especializados en reclutamiento de talento para tecnología, manufactura, fintech y más. Ahorro de tiempo del 80% con selección en primera terna.",
  keywords: [
    "headhunting",
    "reclutamiento",
    "headhunter",
    "reclutamiento especializado",
    "talent acquisition",
    "reclutamiento tech",
    "reclutamiento fintech",
    "reclutamiento manufactura",
    "headhunter México",
    "reclutamiento ejecutivo",
    "posiciones clave",
    "reclutamiento C-level",
  ],
  authors: [{ name: "Relevant" }],
  creator: "Relevant",
  publisher: "Relevant",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.relevantmx.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://www.relevantmx.com",
    siteName: "Relevant",
    title: "Relevant - La Evolución del Headhunting Tradicional",
    description:
      "El headhunter con el mayor rate de permanencia definitiva (93%). Especializados en reclutamiento de talento para tecnología, manufactura, fintech y más.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Relevant - La Evolución del Headhunting Tradicional",
    description:
      "El headhunter con el mayor rate de permanencia definitiva (93%). Especializados en reclutamiento de talento.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Agregar verificación de Google Search Console si es necesario
    // google: "verification-code",
  },
};

export default function Home() {
  return (
    <>
      <HeroPage />
      <Estadisticas />
      <Experience />
      <PosicionesClave />
      <ContactPage />
      <CallToAction />
      <Footer />
    </>
  );
}
