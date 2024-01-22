import CursorTrailCanvas from "@/components/CursorTrailCanvas";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Home";
import About from "@/components/About";
import ScrollUp from "@/components/ScrollUp";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

export default function Home() {
  return (
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
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}