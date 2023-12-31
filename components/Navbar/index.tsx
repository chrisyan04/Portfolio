"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "@/public/logo.webp";
import Link from "next/link";
import "./Navbar.css";

export interface Link {
  title: string;
  href: string;
}

export default function Navbar({ links }: { links: Link[] }) {
  const [toggle, setToggle] = useState(false);
  return (
    <header
      className={`items-center fixed w-full flex justify-between z-10 px-4 backdrop-blur-sm pt-2 pb-2 bg-transparent shadow-2xl ${
        toggle &&
        "h-full pb-[calc(100vh-5em)] transition duration-1000 ease-in-out md:h-auto md:pb-0 md:transition-none portrait:h-auto"
      }`}
    >
      <a href="/" tabIndex={0}>
        <Image
          priority
          src={logo}
          alt="Chris Logo"
          height={200}
          width={200}
          style={{ height: "70px", width: "70px" }}
          className="rounded-full"
        />
      </a>
      <nav
        className={`fixed w-full left-0 -top-[100vh] duration-1000 md:static md:w-auto md:duration-0 md:visible ${
          toggle
            ? "h-full visible translate-y-[calc(100vh_+_5em)] transition ease-in-out duration-1000 md:h-auto md:transform-none md:transition-none"
            : "invisible"
        }`}
      >
        <ul
          className={`mb-0 md:pl-0 flex flex-wrap justify-between items-center ${
            toggle && "active"
          }`}
        >
          {links.map(({ href, title }: Link, id) => {
            return (
              <li
                className="item block order-3 w-full text-center p-[10px] md:relative md:w-auto"
                key={id}
              >
                <Link
                  className="block text-2xl md:text-lg text-gray-900 dark:text-amber-100 px-[5px] py-[15px] font-bold transition duration-500 ease-in-out transform hover:scale-105 hover:text-[#6c757d] hover:bg-opacity-50 rounded-md"
                  href={encodeURI(href)}
                  onClick={() => setToggle(false)}
                >

                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div
        className={`toggle md:hidden md:pointer-events-none w-[65px] h-[65px] relative mt-[10px] caret-transparent cursor-pointer rotate-0 transition ease-in-out duration-500 motion-reduce:transition-none ${
          toggle && 'open'
        } `}
        onClick={() => setToggle(!toggle)}>
        {[...Array(6)].map((_, id) => {
          return (
            <span
              key={id}
              className="block absolute h-[9px] w-1/2 bg-white  opacity-100 rotate-0"></span>
          );
        })}
      </div>
    </header>
  );
}
