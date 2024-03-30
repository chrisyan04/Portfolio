import React from "react";
import { motion } from 'framer-motion'

export default function DisplayProjects() {
  return (
    <section
      id="display-projects"
      className="flex flex-col jusitfy-center items-center pt-4 lg:h-auto sm:h-auto md:h-auto max-sm:h-auto lg:my-10 max-sm:w-[390px]"
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
        {"{ projects }"}
      </motion.span>
      <div className="text-white"></div>
      hello
    </section>
  );
}
