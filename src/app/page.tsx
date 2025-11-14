import CallToAction from "@/components/callToAction/CallToAction";
import ContactPage from "@/components/contactPage/ContactPage";
import { Experience } from "@/components/experience/Experience";
import Footer from "@/components/footer/Footer";
import HeroPage from "@/components/hero/HeroPage";
import { PosicionesClave } from "@/components/posiciones-clave/PosicionesClave";
import Estadisticas from "@/components/stats/Estadisticas";

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
