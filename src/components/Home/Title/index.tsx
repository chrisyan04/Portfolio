"use client";

import React, { useEffect } from "react";
import "./Title.css";
import { motion } from "framer-motion";

export default function Title() {
  useEffect(() => {
    const spans = document.querySelectorAll(".word span");

    spans.forEach((span, idx) => {
      span.addEventListener("click", (e) => {
        (e.target as HTMLElement).classList.add("active");
      });
      span.addEventListener("animationend", (e) => {
        (e.target as HTMLElement).classList.remove("active");
      });

      setTimeout(() => {
        span.classList.add("active");
      }, 750 * (idx + 1));
    });

    return () => {
      spans.forEach((span) => {
        span.removeEventListener("click", () => {});
        span.removeEventListener("animationend", () => {});
      });
    };
  }, []);
  return (
    <div className="flex flex-col text-white text-center">
      <div className="word">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.75,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          C
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.5,
            delay: 1.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          H
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.5,
            delay: 2.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          R
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.5,
            delay: 3.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          I
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 4,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          S
        </motion.span>
      </div>
      <div>
        <motion.h1
          data-shadow="Yan"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          Yan
        </motion.h1>
      </div>
    </div>
  );
}
