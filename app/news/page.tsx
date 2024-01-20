import Navbar, { type Link } from "@/components/Navbar";
import Blog from "@/components/News/Blog";
import Stats from "@/components/News/Stats";
import Courses from "@/components/News/Courses";

const links: Link[] = [
  { href: "/", title: "Home" },
  { href: "/work", title: "Work" },
  { href: "/projects", title: "Projects" },
  { href: "/news", title: "Blog" },
  { href: "/contact", title: "Contact" },
];

export default function News() {
  return (
    <main className="">
      <Navbar links={links} />
      <Blog />
      <Stats />
      <Courses />
    </main>
  );
}