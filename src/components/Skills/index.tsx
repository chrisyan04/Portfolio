import React from "react";
import { motion } from "framer-motion";
import GeneralSkills from "./General";
import IndividualSkills from "./Individual";
import { Divider } from "@nextui-org/react";

export default function Skills() {
  return (
    <section
      className="flex flex-col jusitfy-center items-center pt-4 lg:h-screen sm:h-auto md:h-auto max-sm:h-auto lg:my-10 max-sm:w-[390px]"
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
      <Divider className="bg-gradient-to-tr from-pink-700 to-blue-500 py-0.5 rounded-full max-sm:w-3/4" />
      <IndividualSkills />
    </section>
  );
}
