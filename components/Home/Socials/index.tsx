import React from "react";
import { FiInstagram, FiGithub, FiLinkedin } from "react-icons/fi";
import Link from "next/link";

export default function Socials() {
  return (
    <div className="home__social">
      <Link
        href="https://www.instagram.com/chris.yan_/"
        className="home__social-icon"
        target="_blank"
      >
        <FiInstagram />
      </Link>
      <Link
        href="https://github.com/chrisyan04"
        className="home__social-icon"
        target="_blank"
      >
        <FiGithub />
      </Link>
      <Link
        href="https://www.linkedin.com/in/chris-cx-yan/"
        className="home__social-icon"
        target="_blank"
      >
        <FiLinkedin />
      </Link>
    </div>
  );
};
