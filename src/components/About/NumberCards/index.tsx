"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import verifiedIcon from "@/public/Icons/verified.svg";
import terminalIcon from "@/public/Icons/terminal.svg";
import languageIcon from "@/public/Icons/language.svg";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Image from "next/image";

export default function NumberCards() {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <motion.div
      className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 max-sm:grid-cols-1 justify-items-center items-center gap-4 max-sm:-mt-8"
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
      <Card className="max-w-[400px] bg-[#d4d4d8] shadow-around border-[#d4d4d8] border-1">
        <CardHeader className="flex gap-3 bg-[#d4d4d8]">
          <Image src={verifiedIcon} alt="verified" height={40} width={40} />
          <div className="flex flex-col">
            <p className="text-lg text-transparent bg-gradient-to-tr from-pink-700 to-blue-500 bg-clip-text font-bold">
              {"_experience"}
            </p>
            <p className="text-small text-transparent bg-gradient-to-tr from-pink-700 to-blue-500 bg-clip-text">
              {"{ year-to-date }"}
            </p>
          </div>
        </CardHeader>
        <Divider className="bg-[#18181b]" />
        <CardBody className="bg-[#d4d4d8]">
          {React.createElement(
            ScrollTrigger as any,
            {
              onEnter: () => setCounterOn(true),
              onExit: () => setCounterOn(false),
            },
            <motion.div className="text-2xl font-bold text-center text-[#18181b]">
              <h3>
                {counterOn && (
                  <CountUp start={100} end={2} duration={3} delay={0} />
                )}
                +
              </h3>
            </motion.div>
          )}
        </CardBody>
      </Card>
      <Card className="max-w-[400px] bg-[#d4d4d8] shadow-around border-[#d4d4d8] border-1">
        <CardHeader className="flex gap-3 bg-[#d4d4d8]">
          <Image src={terminalIcon} alt="verified" height={40} width={40} />
          <div className="flex flex-col">
            <p className="text-lg text-transparent bg-gradient-to-tr from-pink-700 to-blue-500 bg-clip-text font-bold">
              {"_completed"}
            </p>
            <p className="text-small text-transparent bg-gradient-to-tr from-pink-700 to-blue-500 bg-clip-text">
              {"{ projects }"}
            </p>
          </div>
        </CardHeader>
        <Divider className="bg-[#18181b]" />
        <CardBody className="bg-[#d4d4d8]">
          {React.createElement(
            ScrollTrigger as any,
            {
              onEnter: () => setCounterOn(true),
              onExit: () => setCounterOn(false),
            },
            <motion.div className="text-2xl font-bold text-center text-[#18181b]">
              <h3>
                {counterOn && (
                  <CountUp start={0} end={20} duration={3} delay={0} />
                )}
                +
              </h3>
            </motion.div>
          )}
        </CardBody>
      </Card>
      <Card className="max-w-[400px] bg-[#d4d4d8] shadow-around border-[#d4d4d8] border-1">
        <CardHeader className="flex gap-3 bg-[#d4d4d8]">
          <Image src={languageIcon} alt="verified" height={40} width={40} />
          <div className="flex flex-col">
            <p className="text-lg text-transparent bg-gradient-to-tr from-pink-700 to-blue-500 bg-clip-text font-bold">
              {"_languages"}
            </p>
            <p className="text-small text-transparent bg-gradient-to-tr from-pink-700 to-blue-500 bg-clip-text">
              {"{ fluent }"}
            </p>
          </div>
        </CardHeader>
        <Divider className="bg-[#18181b]" />
        <CardBody className="bg-[#d4d4d8]">
          {React.createElement(
            ScrollTrigger as any,
            {
              onEnter: () => setCounterOn(true),
              onExit: () => setCounterOn(false),
            },
            <motion.div className="text-2xl font-bold text-center text-[#18181b]">
              <h3>
                {counterOn && (
                  <CountUp start={100} end={3} duration={3} delay={0} />
                )}
                +
              </h3>
            </motion.div>
          )}
        </CardBody>
      </Card>
    </motion.div>
  );
}
