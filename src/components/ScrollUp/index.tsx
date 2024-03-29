"use client";

import { useEffect } from "react";
import upIcon from "@/public/Icons/up-icon.svg";
import "./ScrollUp.css";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ScrollUp() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollUp = document.querySelector(".scrollup");
      if (scrollUp && window.scrollY >= 560) {
        scrollUp.classList.add("show-scroll");
      } else if (scrollUp) {
        scrollUp.classList.remove("show-scroll");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.a href="#" className="scrollup" whileHover={{ scale: 0.9 }}>
      <Image
        src={upIcon}
        alt="up icon"
        height={50}
        width={50}
        className="shadow-around rounded-2xl border-2 border-white/70 bg-white/80"
      />
    </motion.a>
  );
}
