"use client";

import { Button } from "@/components/ui/button";
import { NavMenu } from "./Nav-menu";
import { NavigationSheet } from "./NavigationSheet";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 sm:top-6 inset-x-2 sm:inset-x-4 h-14 sm:h-16 bg-background border dark:border-slate-700/70 max-w-(--breakpoint-xl) mx-auto rounded-full z-50"
    >
      <div className="h-full flex items-center justify-between mx-auto px-2 sm:px-4">
        <Image
          src={"/logo.webp"}
          alt="Logo de relevant"
          width={160}
          height={160}
          className="h-8 w-auto sm:h-10 md:h-12"
        />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-2 sm:gap-3">
          <Button className="rounded-full text-xs sm:text-sm" size="sm" asChild>
            <Link href="#contacto">Comenzar</Link>
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
