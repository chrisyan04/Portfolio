import Navbar, { type Link } from "@/components/Navbar";
import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
import Skills from "@/components/Home/Skills";

const links: Link[] = [
  { href: "/", title: "Home" },
  { href: "/work", title: "Work" },
  { href: "/projects", title: "Projects" },
  { href: "/news", title: "Blog" },
  { href: "/contact", title: "Contact" },
];

export default function Home() {
  return (
    <main className="">
      <Navbar links={links} />
      <Hero />
      <About />
      <Skills />
    </main>
  );
}