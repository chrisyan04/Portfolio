import React from "react";
import { motion } from "framer-motion";
import GeneralSkills from "./General";

export default function Skills() {
  return (
    <section
      className="flex flex-col jusitfy-center items-center pt-4 h-screen max-sm:h-auto"
      id="skills"
    >
      <motion.span
        className="text-center text-transparent bg-gradient-to-tr from-pink-700 to-blue-500 bg-clip-text text-[75px] max-sm:text-[50px]"
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: { duration: 1.5 },
        }}
        viewport={{ once: false }}
      >
        {"{ skills }"}
      </motion.span>
      <GeneralSkills />
    </section>
  );
}
