"use client";

import React, { useState, MouseEvent } from "react";
import { FiArrowRight } from "react-icons/fi";
import Terminal, {
  ColorMode,
  TerminalInput,
  TerminalOutput,
} from "react-terminal-ui";

export default function Contact() {
  const [colorMode, setColorMode] = useState(ColorMode.Dark);
  const [lineData, setLineData] = useState([
    <TerminalOutput key={1}>&#128075; Hey there! </TerminalOutput>,
    <TerminalOutput key={2}>💡 Wanna know even more about me?</TerminalOutput>,
    <TerminalOutput key={3}>💬 Let's Chat!</TerminalOutput>,
    <TerminalOutput key={4}></TerminalOutput>,
    <TerminalOutput key={5}>🧠 type 'help' to get started</TerminalOutput>,
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
    <section className="contact section" id="contact">
      <h2 className="section__title text-4xl text-green-500">
        {"// Contact · Me"}
      </h2>
      <div className="container mt-8 border border-green-500 rounded-[25px] overflow-hidden">
        <Terminal name="..." onInput={onInput} height="400px">
          {lineData}
        </Terminal>
      </div>
    </section>
  );
}
