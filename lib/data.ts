import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Data Science Research Analyst",
    location: "Toronto, Canada",
    description:
      "Volunteered as a data science project research assistant for a team at Intelligence Adaptive Interventions Lab during the 2023 summer term. Languages: Python • R",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Math Tutor",
    location: "Online",
    description:
      "Held meetings at least twice a week over a 3 month period, communicating and checking in on students' progress and their personal foresight on their academic career. Subjects: algebra • geometry • probability • logic & reasoning • problem solving",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },
] as const;

export const projectsData = [
  {
    title: "ShopEaze",
    description:
      "Designed, developed, and tested an Android native mobile e-commerce application built with Java as a scrum master in a agile environment.",
    tags: ["Java", "Firebase", "Android Studio", "Figma", "Jira", "Git"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Housing Price Predictor",
    description:
      "Developed and implemented data visualization and machine learning to predict housing prices.",
    tags: ["Python", "NumPy", "Python", "Matplotlib", "Jupyter Notebook"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Handwritten Digit Predictor",
    description:
      "Developed, trained, and tested a model using nerual networks in Python to predict the number in which was inscribed on a 28x28 pixel PNG file.",
    tags: ["Python", "TensorFlow", "NumPy", "Matplotlib", "Keras"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Enhanced Portfolio (This)",
    description: "Fully designed and developed a cutting-edge personal portfolio website using Next.js 13.",
    tags: ["TypeScript", "Next.js", "React.js", "Tailwind CSS", "Framer Motion", "Git"],
    imageUrl: wordanalyticsImg
  },
  {
    title: "Bike Theft Report",
    description: "Analyzed and produced an informative public report on bike safety concerns in Toronto and its surrounding areas with reagrds to the precedence of stolen bikes in certain areas.",
    tags: ["R", "R Studio", "Git"],
    imageUrl: wordanalyticsImg
  },
  {
    title: "TaskTango",
    description: "Fully engineered a mobile iOS native app that revolutionizes task management with its sleek design and intuitive user interface, making it effortless to organize your to-do list.",
    tags: ["Swift", "Xcode"],
    imageUrl: wordanalyticsImg
  },
  {
    title: "UTSC Hockey Team",
    description: "Fully engineered a website for universities ice hockey team.",
    tags: ["React.js", "Tailwind CSS","Git"],
    imageUrl: wordanalyticsImg
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "C",
  "Git",
  "Tailwind",
  "R",
  "Python",
  "SQL",
  "Firebase",
  "R Studio",
  "Android Studio",
  "Jira",
  "Flask",
  "Eclipse",
  "Framer Motion",
  "Jupyter Notebook",
  "NumPy",
    "Matplotlib",
    "Keras",
    "TensorFlow",
    "LATEX",
    "Swift",
    "Xcode",
] as const;