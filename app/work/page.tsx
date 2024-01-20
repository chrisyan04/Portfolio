import Navbar, { type Link } from "@/components/Navbar";
import Timeline from "@/components/Work/Timeline";

const links: Link[] = [
  { href: "/", title: "Home" },
  { href: "/work", title: "Work" },
  { href: "/projects", title: "Projects" },
  { href: "/news", title: "Blog" },
  { href: "/contact", title: "Contact" },
];

export default function Work() {
  return (
    <main className="">
      <Navbar links={links} />
        <Timeline />
    </main>
  );
}