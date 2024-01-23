"use client";

import { useState } from "react";
import Link from "next/link";
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineBadgeCheck,
  HiOutlineClipboardList,
  HiOutlineCode,
  HiOutlineMail,
  HiX,
  HiOutlineMenu,
} from "react-icons/hi";
import "./Navbar.css";
import Sig from "@/public/chris-sig.svg";
import Image from "next/image";

const NAV_LINKS = {
  HOME: "#home",
  ABOUT: "#about",
  SKILLS: "#skills",
  EXPERIENCE: "#experience",
  PROJECTS: "#projects",
  CONTACT: "#contact",
};

const getIcon = (key: string) => {
  switch (key) {
    case "HOME":
      return <HiOutlineHome className="nav__icon" />;
    case "ABOUT":
      return <HiOutlineUser className="nav__icon" />;
    case "SKILLS":
      return <HiOutlineBadgeCheck className="nav__icon" />;
    case "EXPERIENCE":
      return <HiOutlineClipboardList className="nav__icon" />;
    case "PROJECTS":
      return <HiOutlineCode className="nav__icon" />;
    case "CONTACT":
      return <HiOutlineMail className="nav__icon" />;
    default:
      return null;
  }
};

const NavLink: React.FC<{
  href: string;
  text: string;
  setActiveNav: React.Dispatch<React.SetStateAction<string>>;
  activeNav: string;
}> = ({ href, text, setActiveNav, activeNav }) => (
  <Link
    href={href}
    onClick={() => setActiveNav(href)}
    className={activeNav === href ? "nav__link active-link" : "nav__link"}
  >
    {getIcon(text)}
    {text}
  </Link>
);

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState<string>(NAV_LINKS.HOME);

  return (
    <header className="header">
      <nav className="nav container">
        <Link href={NAV_LINKS.HOME} className="nav__logo">
          <Image src={Sig} alt="logo" height={200} style={{ height: "100px", width: "auto" }} />
        </Link>
        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            {Object.entries(NAV_LINKS).map(([key, value]) => (
              <li className="nav__item" key={key}>
                <NavLink
                  href={value}
                  text={key}
                  setActiveNav={setActiveNav}
                  activeNav={activeNav}
                />
              </li>
            ))}
          </ul>
          <HiX className="nav__close" onClick={() => setToggle(!toggle)} />
        </div>
        <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
          <HiOutlineMenu />
        </div>
      </nav>
    </header>
  );
}
