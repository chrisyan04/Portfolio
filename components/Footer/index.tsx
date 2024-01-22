import React from "react";
import "./Footer.css";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import NextJs from "@/public/nextjs-13.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <center>
        <div className="footer__container container">
          <h1 className="footer__title text-3xl text-green-500">
            // Chris (yanner)
          </h1>
          <div className="max-sm:grid max-sm:grid-cols-2 flex justify-center items-center">
            <div className="max-sm:my-2 mx-4">
              <Link href="#about" className="footer__link">
                #About
              </Link>
            </div>
            <div className="max-sm:my-2 mx-4">
              <Link href="#skills" className="footer__link">
                #Skills
              </Link>
            </div>
            <div className="max-sm:my-2 mx-4">
              <Link href="#experience" className="footer__link">
                #Experience
              </Link>
            </div>
            <div className="max-sm:my-2 mx-4">
              <Link href="#projects" className="footer__link">
                #Projects
              </Link>
            </div>
            <div className="max-sm:my-2 mx-4">
              <Link href="#contact" className="footer__link">
                #Contact
              </Link>
            </div>
          </div>
        </div>
        <div className="footer__social">
          <Link
            href="https://www.instagram.com/chris.yan_/"
            target="_blank"
            className="home__social-icon"
            rel="noreferrer"
          >
            <FiInstagram />
          </Link>
          <Link
            href="https://github.com/chrisyan04"
            target="_blank"
            className="home__social-icon"
            rel="noreferrer"
          >
            <FiGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/chris-cx-yan/"
            target="_blank"
            className="home__social-icon"
            rel="noreferrer"
          >
            <FiLinkedin />
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center mt-4">
          <span className="text-green-500 text-xs">
            Copyright &copy; Chris Yan 2023.
          </span>
          <span className="text-green-500 text-sm flex mt-6">
            Built with{"  "}
            <Image
              src={NextJs}
              alt="Next.js"
              height={100}
              width={100}
              className="bg-white/80 p-3 rounded-[15px] ml-3 -mt-2 max-sm:mb-14 mb-6"
            />
          </span>
        </div>
      </center>
    </footer>
  );
}
