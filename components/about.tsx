"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 200,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function About() {
  const { ref } = useSectionInView("About");
  const [showParagraphs, setShowParagraphs] = useState([true, false, false]);

  const toggleParagraph = (index: number) => {
    const newVisibility = showParagraphs.map((value, i) => i === index);
    setShowParagraphs(newVisibility);
  };

  return (
    <motion.section
      ref={ref}
      className="mb-28 sm:max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div className="h-[22rem] sm:h-[16rem] sm:w-[35rem] overflow-y-auto mb-3 dark:text-amber-50 rounded-lg dark:bg-gray-700 bg-gray-200 p-4">
        <p className={`mb-3 ${showParagraphs[0] ? "block" : "hidden"} transition-all duration-300`} >
        📚 I am a budding software and machine learning engineer. Currently, I am a second-year undergraduate student at the <span className="dark:text-blue-400 text-blue-900 font-semibold">University of Toronto</span> specializing in machine learning and data science, as well as majoring in math and minoring in economics. <span className="font-semibold text-green-700 dark:text-green-300">I am actively seeking an internship in the winter semester of 2024</span>, and I am open to any opportunities that come my way.
        </p>

        <p className={`mb-3 ${showParagraphs[1] ? "block" : "hidden"}  transition-all duration-300`}>
        💻 Recently, I have worked as a <span className="dark:text-blue-100 text-blue-800 font-semibold">Data Science Research Assistant</span> at <span className="text-blue-600 dark:text-blue-300 font-semibold">IAI Labs</span> in Toronto, CA. Here, I partook in assisting with data visualization, modeling regression models, and statistical analysis for a study on the "Behavioral Consequences of Reminder Emails on Students' Academic Performace: a Real-world Development" which was recently recognized as the Best Paper at ACM SIGITE.
        </p>

        <p className={`mb-3 ${showParagraphs[2] ? "block" : "hidden"}  transition-all duration-300`}>
        When I happen to be <span className="dark:text-white font-semibold">free</span>, which is much more than it may seem, I enjoy cooking 🍲, playing hockey 🏒, and watching cinema 🎥. You may also find me paddle boarding 🏄🏻‍♂️ by the lake, hiking 🥾 in the national parks, or on the <span className="dark:text-teal-400 text-teal-900 font-semibold">GO</span> train 🚉 (I have a long commute to school). If you ever see me, feel free to come up and say hi 👋🏼! I am always open to meeting new people and making new friends.
        </p>
      </div>

      <div className="flex justify-center mt-2 sm:mt-10 sm:mb-[4rem]">
        <button
          onClick={() => toggleParagraph(0)}
          className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full mx-1 border border-white ${
            showParagraphs[0]
              ? "bg-purple-500 hover:bg-purple-600 bg-opacity-50"
              : "bg-gray-400 hover:bg-gray-500 bg-opacity-50"
          } dark:${
            showParagraphs[0]
              ? "bg-purple-500 hover:bg-purple-600 bg-opacity-50"
              : "bg-gray-300 hover:bg-gray-500 bg-opacity-50"
          } dark:text-white`}
        ></button>
        <button
          onClick={() => toggleParagraph(1)}
          className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full mx-1 border border-white ${
            showParagraphs[1]
              ? "bg-purple-500 hover:bg-purple-600 bg-opacity-50"
              : "bg-gray-400 hover:bg-gray-500 bg-opacity-50"
          } dark:${
            showParagraphs[1]
              ? "bg-purple-500 hover:bg-purple-600 bg-opacity-50"
              : "bg-gray-300 hover:bg-gray-500 bg-opacity-50"
          } dark:text-white`}
        ></button>
        <button
          onClick={() => toggleParagraph(2)}
          className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full mx-1 border border-white ${
            showParagraphs[2]
              ? "bg-purple-500 hover:bg-purple-600 bg-opacity-50"
              : "bg-gray-400 hover:bg-gray-500 bg-opacity-50"
          } dark:${
            showParagraphs[2]
              ? "bg-purple-500 hover:bg-purple-600 bg-opacity-50"
              : "bg-gray-300 hover:bg-gray-500 bg-opacity-50"
          } dark:text-white`}
        ></button>
      </div>
    </motion.section>
  );
}