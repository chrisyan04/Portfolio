"use client";

import CursorTrailCanvas from "@/components/CursorTrailCanvas";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Home";
import About from "@/components/About";
import ScrollUp from "@/components/ScrollUp";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Contact from "@/components/Contact";

export default function Home() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) return;
  }, [isLoading]);

  return (
    <>
      {isLoading && isHome ? (
        <SplashScreen finishLoading={() => setIsLoading(false)} />
      ) : (
        <>
          {/* <CursorTrailCanvas
        color="hsla(183, 64%, 27%, 0.4)"
        className="pointer-events-none fixed inset-0 z-[999] h-full w-full"
      /> */}
          <Navbar />
          <main className="main">
            <Hero />
            <About />
            <Skills />
            <Experience />
              <Portfolio />
              <Contact />
          </main>
          <Footer />
          <ScrollUp />
        </>
      )}
    </>
  );
}
