import React from "react";

import "./Home.css";
import { motion, AnimatePresence } from "framer-motion";
import CVModal from "./CVModal";
import Title from "./Title";
import JobPopover from "./Popover";
import { Button } from "@nextui-org/react";
import Contact from "./Contact";

export default function Home() {
  return (
    <section className="flex justify-center items-center lg:-mt-20 md:-mt-10 max-sm:-mt-10 h-screen" id="home">
      <div className="grid sm:grid-cols-2 grid-cols-1 lg:gap-24 md:gap-20 gap-12">
        <motion.div
          className="home__img"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          exit={{ opacity: 0 }}
        ></motion.div>

        <div className="flex flex-col items-center justify-center">
          <div className="pb-8 max-sm:pb-4">
            <Title />
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-2 justify-items-center items-center">
            <Contact />
            <CVModal />
            <JobPopover />
          </div>
        </div>
      </div>
    </section>
  );
}
