"use client";

import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import React from "react";
import signatureDark from "@/public/Icons/chris-sig-dark.svg";
import Image from "next/image";
import NavbarDropdown from "./Dropdown";
import { motion } from "framer-motion";
import downDark from "@/public/Icons/down-dark.svg";
import { usePathname } from "next/navigation";

interface NavbarProps {
  isCursorTrailActive: boolean;
  setCursorTrailActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({
  isCursorTrailActive,
  setCursorTrailActive,
}: NavbarProps) {
  const pathname = usePathname();
  const delay = pathname === "/" ? 5 : 0;

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { label: "home", url: "/" },
    { label: "experience", url: "/experience" },
    { label: "projects", url: "/projects" },
    { label: "blog", url: "/blog" },
    { label: "contact", url: "/contact" },
  ];

  return (
    <motion.div
      className="w-11/12 rounded-3xl border-2 shadow-around"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <NextUINavbar
        shouldHideOnScroll={false}
        className="bg-[#18181b] rounded-3xl"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        // isBordered
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden text-[#d4d4d8]"
          />
          <NavbarBrand>
            <Link href="/">
              <Image
                priority
                src={signatureDark}
                alt="signature"
                height={150}
                width={150}
              />
            </Link>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem isActive={pathname === "/"}>
            <Link href="/">
              <Button
                className={`text-xl text-black font-bold ${
                  pathname === "/"
                    ? "bg-gradient-to-tr from-pink-800 to-yellow-500 shadow-around text-[#d4d4d8]"
                    : ""
                }`}
              >
                home
              </Button>
            </Link>
          </NavbarItem>
          <NavbarItem
            isActive={pathname === "/experience" || pathname === "/projects"}
          >
            <Dropdown className="shadow-around mt-6 bg-[#18181b] border border-[#d4d4d8]">
              <DropdownTrigger>
                <Button
                  variant="solid"
                  className={`text-xl text-black ${
                    pathname === "/experience" || pathname === "/projects"
                      ? "bg-gradient-to-tr from-pink-800 to-yellow-500 shadow-around text-white"
                      : ""
                  }`}
                >
                  {"work"}
                  <Image
                    src={downDark}
                    alt="down dark"
                    height={20}
                    width={20}
                    className={`mt-0.5 -mx-1.5 ${
                      pathname === "/experience" || pathname === "/projects"
                        ? "filter invert"
                        : ""
                    }`}
                  />
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Work section"
                disabledKeys={[]}
                className="p-2"
              >
                <DropdownItem
                  key="experience"
                  href="/experience"
                  className={`text-[#d4d4d8] mb-1 ${
                    pathname === "/experience"
                      ? "bg-[#d4d4d8] text-[#18181b] shadow-around"
                      : ""
                  }`}
                >
                  {"experience"}
                </DropdownItem>
                <DropdownItem
                  key="projects"
                  href="/projects"
                  className={`text-[#d4d4d8] mt-1 ${
                    pathname === "/projects"
                      ? "bg-[#d4d4d8] text-[#18181b] shadow-around"
                      : ""
                  }`}
                >
                  {"projects"}
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
          <NavbarItem isActive={pathname === "/blog"}>
            <Link href="/blog">
              <Button
                className={`text-xl text-black font-bold ${
                  pathname === "/blog"
                    ? "bg-gradient-to-tr from-pink-800 to-yellow-500 shadow-around text-white"
                    : ""
                }`}
              >
                blog
              </Button>
            </Link>
          </NavbarItem>
          <NavbarItem isActive={pathname === "/contact"}>
            <Link href="/contact">
              <Button
                className={`text-xl text-black font-bold ${
                  pathname === "/contact"
                    ? "bg-gradient-to-tr from-pink-800 to-yellow-500 shadow-around text-white"
                    : ""
                }`}
              >
                contact
              </Button>
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <NavbarDropdown
              isCursorTrailActive={isCursorTrailActive}
              setCursorTrailActive={setCursorTrailActive}
            />
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu className="shadow-around bg-[#18181b] max-h-72 w-40 backdrop-blur-md border border-[#d4d4d8] ml-3 mt-9 pt-8 rounded-xl overflow-hidden">
          {menuItems.map((item, index) => (
            <NavbarMenuItem
              key={`${item.label}-${index}`}
              isActive={pathname === item.url}
            >
              <Link
                className={`w-full hover:text-black hover:bg-white px-1 rounded-lg text-[#d4d4d8] ${
                  pathname === item.url
                    ? "bg-[#d4d4d8] text-[#18181b] shadow-around"
                    : ""
                }`}
                href={item.url}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </NextUINavbar>
    </motion.div>
  );
}
