"use client";

import React, { useState, MouseEvent } from "react";
import Terminal, {
  ColorMode,
  TerminalInput,
  TerminalOutput,
} from "react-terminal-ui";
import { motion } from "framer-motion";

export default function TerminalController() {
  const [colorMode, setColorMode] = useState(ColorMode.Dark);
  const [lineData, setLineData] = useState([
    <TerminalOutput key={1}>💬 Let's Chat!</TerminalOutput>,
    <TerminalOutput key={2}></TerminalOutput>,
    <TerminalOutput key={3}>🧠 type 'help' to get started</TerminalOutput>,
  ]);

  function onInput(input: string) {
    let ld = [...lineData];
    ld.push(<TerminalInput key={ld.length + 1}>{input}</TerminalInput>);
    if (input.toLocaleLowerCase().trim() === "co li") {
      window.open("https://www.linkedin.com/in/chris-cx-yan/", "_blank");
    } else if (input.toLocaleLowerCase().trim() === "co gh") {
      window.open("https://github.com/chrisyan04", "_blank");
    } else if (input.toLocaleLowerCase().trim() === "co ig") {
      window.open("https://www.instagram.com/chris.yan_/", "_blank");
    } else if (input.toLocaleLowerCase().trim() === "co notli") {
      window.open("https://www.chrisyan.ca/not-linkedin", "_blank");
    } else if (input.toLocaleLowerCase().trim() === "co email") {
      ld.push(
        <TerminalOutput key={ld.length + 1}>
          {"📧 mailto: cc.yan@mail.utoronto.ca"}
        </TerminalOutput>
      );
    } else if (input.toLocaleLowerCase().trim() === "help") {
      ld.push(
        <TerminalOutput key={ld.length + 1}>
          {"💡 Here are some commands you can try:"}
        </TerminalOutput>
      );
      ld.push(
        <TerminalOutput key={ld.length + 1}>
          {"  - co li      🌐checkout my linkedin"}
        </TerminalOutput>
      );
      ld.push(
        <TerminalOutput key={ld.length + 1}>
          {"  - co gh      📁checkout my github"}
        </TerminalOutput>
      );
      ld.push(
        <TerminalOutput key={ld.length + 1}>
          {"  - co ig      💜checkout my insta"}
        </TerminalOutput>
      );
      ld.push(
        <TerminalOutput key={ld.length + 1}>
          {"  - co notli   🧿checkout my notlinkedin"}
        </TerminalOutput>
      );
      ld.push(
        <TerminalOutput key={ld.length + 1}>
          {"  - co email   📨checkout my email addy"}
        </TerminalOutput>
      );
      ld.push(
        <TerminalOutput key={ld.length + 1}>
          {"  - help       🔮shows cmd list"}
        </TerminalOutput>
      );
      ld.push(
        <TerminalOutput key={ld.length + 1}>
          {"  - clear      🧹clears cmd line"}
        </TerminalOutput>
      );
    } else if (input.toLocaleLowerCase().trim() === "clear") {
      ld = [];
      ld.push(
        <TerminalOutput key={5}>🧠 type 'help' to get started</TerminalOutput>
      );
    } else if (input) {
      ld.push(
        <TerminalOutput key={ld.length + 1}>
          {"❌ cmd not found: " + input}
        </TerminalOutput>
      );
    }
    setLineData(ld);
  }

  return (
    <section className="pt-10" id="terminal">
      <motion.h2
        className="justify-center items-center flex text-4xl max-sm:text-2xl text-[#d4d4d8] font-bold"
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
        {"Connect with me ..."}
      </motion.h2>
      <motion.div
        className="shadow-around mt-8 border overflow-hidden border-[#d4d4d8] rounded-[25px] sm:w-[600px] md:w-[1000px] w-96 sm:h-[550px] h-[500px] bg-[#252a33]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Terminal name="guest ~ cmd" onInput={onInput} height="400px">
          {lineData}
        </Terminal>
      </motion.div>
    </section>
  );
}
