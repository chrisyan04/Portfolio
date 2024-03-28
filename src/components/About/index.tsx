import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import hockeyMe from "@/public/hockey-me.jpg";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";
import Link from "next/link";
import NumberCards from "./NumberCards";
import PersonalInfo from "./Info";

export default function About() {
  return (
    <section
      className="h-screen max-sm:h-auto sm:h-auto md:h-auto flex flex-col jusitfy-center items-center lg:my-10"
      id="about"
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
        {"{ about }"}
      </motion.span>
      <div className="grid max-sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-items-center items-center text-[#d4d4d8] mt-10 max-sm:gap-12">
        <motion.div
          className="max-sm:-mt-6"
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
          <Popover placement="bottom">
            <PopoverTrigger>
              <Button className="rounded-2xl border-2 border-[#d4d4d8] shadow-around h-[500px] w-auto max-sm:h-[300px] p-0">
                <Image
                  priority
                  src={hockeyMe}
                  alt="hockey me"
                  height={400}
                  width={200}
                  className="rounded-2xl h-[500px] w-auto max-sm:h-[300px]"
                />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="bg-[#d4d4d8] shadow-around mt-1">
              <div className="px-1 py-2 text-center">
                <div className="text-md font-bold">{"📷 by Neil Patel"}</div>
                <div className="text-tiny">
                  {"Instagram: "}
                  <Link
                    href="https://www.instagram.com/_neilfilms/"
                    target="_blank"
                  >
                    <span className="text-transparent bg-gradient-to-tr from-pink-700 to-blue-500 bg-clip-text">
                      {"@_neilfilms"}
                    </span>
                  </Link>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </motion.div>
        <div className="flex flex-col justify-center items-center">
          <NumberCards />
          <PersonalInfo />
        </div>
      </div>
    </section>
  );
}
