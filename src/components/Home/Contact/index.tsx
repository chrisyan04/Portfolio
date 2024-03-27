import React from "react";
import sentDark from "@/public/Icons/sent-dark.svg";
import Image from "next/image";
import {
  Button,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CVModal() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="max-sm:py-2"
    >
      <Link href='/contact'>
        <Button className="max-w-fit text-lg shadow-around bg-gradient-to-tr from-red-500 to-purple-800 text-white">
          <Image src={sentDark} alt="resume icon dark" height={20} width={20} />
          {"Contact"}
        </Button>
      </Link>
    </motion.div>
  );
}
