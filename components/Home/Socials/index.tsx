import React from "react";
import { FiInstagram, FiGithub, FiLinkedin } from "react-icons/fi";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Socials() {
  return (
    <div className="home__social">
      <motion.div
        initial={{
          opacity: 0,
          y: -50,
        }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1.5 },
          y: 0,
        }}
        viewport={{ once: false }}
      >
        <Link
          href="https://www.instagram.com/chris.yan_/"
          className="home__social-icon"
          target="_blank"
        >
          <FiInstagram />
        </Link>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          x: -50,
        }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1.5 },
          x: 0,
        }}
        viewport={{ once: false }}
      >
        <Link
          href="https://github.com/chrisyan04"
          className="home__social-icon"
          target="_blank"
        >
          <FiGithub />
        </Link>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1.5 },
          y: 0,
        }}
        viewport={{ once: false }}
      >
        <Link
          href="https://www.linkedin.com/in/chris-cx-yan/"
          className="home__social-icon"
          target="_blank"
        >
          <FiLinkedin />
        </Link>
      </motion.div>
    </div>
  );
}
