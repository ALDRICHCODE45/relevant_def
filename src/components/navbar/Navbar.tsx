import { Button } from "@/components/ui/button";
import { NavMenu } from "./Nav-menu";
import { NavigationSheet } from "./NavigationSheet";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed top-6 inset-x-4 h-16 bg-background border dark:border-slate-700/70 max-w-(--breakpoint-xl) mx-auto rounded-full z-50">
      <div className="h-full flex items-center justify-between mx-auto px-4">
        <Image
          src={"/logo.webp"}
          alt="Logo de relevant"
          width={160}
          height={160}
        />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="hidden sm:inline-flex rounded-full"
          >
            Iniciar Sesión
          </Button>
          <Button className="rounded-full">Comenzar</Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
