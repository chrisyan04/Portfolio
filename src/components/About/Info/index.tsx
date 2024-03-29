import React from "react";
import { Snippet } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function PersonalInfo() {
  const handleCopy = () => {
    navigator.clipboard.writeText("lol you thought ... be original, don't copy this :)");
  };

  return (
    <motion.div
      className="lg:py-8 max-sm:py-6"
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
      <Snippet
        className="text-[#d4d4d8] shadow-around py-4"
        onCopy={handleCopy}
      >
        <span>
          <span className="text-green-500">{"aspirations { 💭 }:"}</span>
          <br />
          {" ~ "}
          <span className="bg-gradient-to-tr from-pink-700 to-blue-600 py-0.5 px-1 rounded-lg text-tiny shadow-around">
            {"future"}
          </span>
          {" software/ml engineer"}
        </span>
        <br />
        <span>
          <span className="text-green-500">{"work { 💻 }:"}</span>
          <br />
          {" ~ data scientist intern @ "}{" "}
          <span className="bg-gradient-to-tr from-[#8c8360] to-[#345056] py-0.5 px-1 rounded-lg text-tiny shadow-around">
            {"Difenda"}
          </span>
        </span>
        <br />
        <span>
          <span className="text-green-500">{"education { 🏫 }:"}</span>
          <br />
          <span>{" ~ 2nd yr ml specialist @ "}</span>
          <span className="text-transparent bg-gradient-to-tr from-blue-500 to-[#d4d4d8] bg-clip-text">
            {"UofT"}
          </span>
          <br />
          <span>{" ~ 2nd yr math major @ "}</span>
          <span className="text-transparent bg-gradient-to-tr from-blue-500 to-[#d4d4d8] bg-clip-text">
            {"UofT"}
          </span>
          <br />
          <span>{" ~ 2nd yr economics minor @ "}</span>
          <span className="text-transparent bg-gradient-to-tr from-blue-500 to-[#d4d4d8] bg-clip-text">
            {"UofT"}
          </span>
        </span>
        <br />
        <span>
          <span className="text-green-500">{"eca's { 🏒 }:"}</span>
          <br />
          <span>{" ~ captain (A) @ "}</span>
          <span className="text-transparent bg-gradient-to-tr from-red-100 to-red-400 bg-clip-text">
            {"UTSC Men's Hockey"}
          </span>
          <br />
          {" ~ web developer @ "}{" "}
          <span className="bg-gradient-to-tr from-pink-700 to-green-600 py-0.5 px-1 rounded-lg text-tiny shadow-around">
            {"DS"}
            <sup>{"3"}</sup>
            {" UofT"}
          </span>
        </span>
      </Snippet>
    </motion.div>
  );
}
