import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import codingmanImg from "@/public/coding-man.gif";
import bikereportImg from "@/public/bike-report.png";
import housingImg from "@/public/housing.gif";
import shopeazeImg from "@/public/shopeaze.gif";
import notesImg from "@/public/notes-bgcard-bg.gif";
import utschockeyImg from "@/public/utsc.gif";

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
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Interests",
    hash: "#interests",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Data Science Research Assistant",
    company: "IAI Lab",
    location: "Toronto, Canada",
    description:
      "Volunteered as a data science project research assistant for a team at Intelligence Adaptive Interventions Lab during the 2023 summer term.",
    skills: "Python • R • EDA • Data Visualization • Statistics",
    icon: React.createElement(LuGraduationCap),
    date: "Jun 2023 - Sep 2023",
  },
  {
    title: "Math Tutor",
    company: "Literacy Initiative",
    location: "Online",
    description:
      "Held meetings at least twice a week over a 3 month period, communicating and checking in on students' progress and their personal foresight on their academic career.",
    skills: " algebra • geometry • probability",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2020 - Jan 2021",
  },
] as const;

export const projectsData = [
  {
    title: "ShopEaze",
    githubUrl:"https://github.com/AndreyZIno/ShopEaze",
    description:
      "Designed, developed, and tested an Android native mobile e-commerce application built with Java as a scrum master in a agile environment.",
    tags: ["Java", "Firebase", "Git", "Android Studio", "Figma", "Jira"],
    imageUrl: shopeazeImg,
  },
  {
    title: "Housing Price Predictor",
    githubUrl:"https://github.com/chrisyan04/House-Pricing-Predictor",
    description:
      "Developed and implemented data visualization and machine learning to predict housing prices.",
    tags: ["Python", "NumPy", "Pandas", "Matplotlib", "JupyterNotebook"],
    imageUrl: housingImg,
  },
  {
    title: "Handwritten Digit Predictor",
    githubUrl:"https://github.com/chrisyan04/Handwritten-Digit-Predictor",
    description:
      "Developed, trained, and tested a model using nerual networks in Python to predict the number in which is inscribed on a PNG file.",
    tags: ["Python", "TensorFlow", "NumPy", "Matplotlib", "Keras"],
    imageUrl: codingmanImg,
  },
  {
    title: "Bike Theft Report",
    githubUrl:"https://github.com/chrisyan04/Toronto-Bike-Theft-Report",
    description: "Analyzed and produced an informative public report on bike safety concerns in Toronto and its surrounding areas with reagrds to the precedence of stolen bikes in certain areas.",
    tags: ["R", "R Studio", "Git"],
    imageUrl: bikereportImg
  },
  {
    title: "UTSC Notes",
    githubUrl:"https://github.com/chrisyan04/UTSC-Notes",
    description: "A compilation of notes I took when taking UofT CMS+ courses. Includes courses: CSCB07, MATB24, ...",
    tags: ["Notion", "HTML"],
    imageUrl: notesImg
  },
  {
    title: "UTSC Hockey Team",
    githubUrl:"https://github.com/chrisyan04/UTSC-Hockey",
    description: "Fully engineered a website for university's mens' ice hockey team. This project is currently under construction.",
    tags: ["React.js", "Tailwind CSS","Git"],
    imageUrl: utschockeyImg
  },
] as const;

export const skillsData = [
  {
    name: "Python",
    logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Java",
    logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "JavaScript",
    logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "React.js",
    logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "C",
    logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  {
    name: "R",
    logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
  },
  {
    name: "HTML",
    logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Next.js",
    logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Tailwind CSS",
    logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  {
    name: "Git",
    logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "SQL",
    logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  },
  {
    name: "Firebase",
    logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    name: "Android Studio",
    logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
  },
  {
    name: "Jira",
    logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
  },
  {
    name: "NumPy",
    logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  },
  {
    name: "Pandas",
    logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  },
  {
    name: "LaTeX",
    logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg",
  },
  {
    name: "Figma",
    logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
] as const;

export const interestsData = [
  { id: 1, 
    icon:"🧠 ", 
    title: 'Artificial Intelligence', 
    bulletPoints: [
    'As an aspiring AI and machine learning enthusiast and student at the UofT, I am passionate about leveraging technology to solve complex problems and drive innovation to heights never seen before.',
    'Deeply motivated by the limitless potential of AI to transform industries, improve efficiency, and better the daily lives of us human beings.',
    'Wish to chat more about AI, its ethics, and its future? Feel free to reach out to me in the Contact section!'
    ], 
  },
  { id: 2, 
    icon:"🧑🏻‍💻 ", 
    title: 'Software Development', 
    bulletPoints: [
      'I am a software developing aficionado with the passion of developing user-friendly web and mobile applications.',
      'Whether it be with TypeScript, React.js, Python, Java, etc. it excites me in finding the art of programming and the endless possibilities it has to offer to solve complex problems and create innovative applications for many people to use.',
      'Personally, software development is not just a career for me, rather a lifelong pursuit of excellence.'
    ], 
  },
  { id: 3, 
    icon:"🏒 ", 
    title: 'Hockey', 
    bulletPoints: [
      'Hockey has been my favorite sport since childhood. Having played it personally at a competitive level for over 15 years, it has become one of my most passionate interests in life.',
      'Along with my pursuit in a career of software and data science, I\'m excited about the potential to leverage technology to improve player performance, fan engagement, and the overall hockey experience in the new age of technology.',
      '#PuckIsLife'
    ],
  },
] as const;