import React from "react";
import signatureDark from "@/public/Icons/chris-sig-dark.svg";
import Image from "next/image";
import { motion } from "framer-motion";

export default function UnderConstruction() {
  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <motion.span
        className="text-center text-transparent bg-gradient-to-tr from-pink-700 to-blue-500 bg-clip-text text-[100px] max-sm:text-[75px] -mt-24"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        exit={{ opacity: 0 }}
      >
        coming soon!
      </motion.span>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 2,
          delay: 2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        exit={{ opacity: 0 }}
      >
        <Image
          src={signatureDark}
          alt="signature dark"
          height={200}
          width={200}
        />
      </motion.div>
    </section>
  );
}
