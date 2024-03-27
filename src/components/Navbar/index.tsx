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
import React, { useState } from "react";
import signature from "@/public/Icons/chris-sig.svg";
import Image from "next/image";
import NavbarDropdown from "./Dropdown";
import { motion } from "framer-motion";

interface NavbarProps {
  isCursorTrailActive: boolean;
  setCursorTrailActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({ isCursorTrailActive, setCursorTrailActive }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["home", "experience", "projects", "blog", "contact"];

  return (
    <motion.div
      className="w-11/12 rounded-3xl border-2 shadow-around"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <NextUINavbar
        shouldHideOnScroll
        className="bg-[#18181b] rounded-3xl"
        onMenuOpenChange={setIsMenuOpen}
        isBordered
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden text-[#d4d4d8]"
          />
          <NavbarBrand>
            <Image
              priority
              src={signature}
              alt="signature"
              height={150}
              width={150}
            />
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Button>
              <Link href="/" className="text-xl text-black font-bold">
                home
              </Link>
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Dropdown className="shadow-around mt-6 bg-[#18181b] border border-[#d4d4d8]">
              <DropdownTrigger>
                <Button variant="shadow" className="text-xl text-black">
                  {"work"}
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Work section" disabledKeys={[]}>
                <DropdownItem key="experience" className="text-[#d4d4d8]">
                  {"experience"}
                </DropdownItem>
                <DropdownItem key="projects" className="text-[#d4d4d8]">
                  {"projects"}
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
          <NavbarItem>
            <Button>
              <Link href="/blog" className="text-xl text-black font-bold">
                blog
              </Link>
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button>
              <Link href="/contact" className="text-xl text-black font-bold">
                contact
              </Link>
            </Button>
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
        <NavbarMenu className="shadow-around bg-[#18181b] max-h-72 w-40 backdrop-blur-md border border-[#d4d4d8] ml-8 mt-9 pt-8 rounded-xl overflow-hidden">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full hover:text-black hover:bg-white px-1 rounded-lg text-[#d4d4d8]"
                href="/"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </NextUINavbar>
    </motion.div>
  );
}
