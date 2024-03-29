import { StaticImageData } from "next/image";

export interface skillListProps {
  title: string;
  img: StaticImageData;
  level: number;
  tags: string[];
}
import powerbi from "@/public/Icons/powerbi.svg";
import restApi from "@/public/Icons/rest-api.svg";

export const skillList: skillListProps[] = [
  {
    title: "Python",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    level: 4,
    tags: ["frontend", "backend", "machine learning"],
  },
  {
    title: "SQL",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
    level: 3,
    tags: ["backend", "database", "cloud"],
  },
  {
    title: "Next.js",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    level: 3,
    tags: ["frontend"],
  },
  {
    title: "TypeScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    level: 3,
    tags: ["frontend", "backend"],
  },
  {
    title: "C",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
    level: 2,
    tags: ["backend"],
  },
  {
    title: "JavaScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    level: 3,
    tags: ["frontend", "backend"],
  },
  {
    title: "MongoDB",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    level: 3,
    tags: ["backend", "database"],
  },
  {
    title: "Pandas",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
    level: 4,
    tags: ["machine learning", "backend"],
  },
  {
    title: "Firebase",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
    level: 3,
    tags: ["backend", "database"],
  },
  {
    title: "Azure",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
    level: 3,
    tags: ["cloud"],
  },
  {
    title: "PowerBI",
    img: powerbi,
    level: 5,
    tags: ["frontend"],
  },
  {
    title: "React.js",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    level: 3,
    tags: ["frontend"],
  },
  {
    title: "Node.js",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    level: 3,
    tags: ["backend"],
  },
  {
    title: "TensorFlow",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
    level: 2,
    tags: ["machine learning"],
  },
  {
    title: "Java",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    level: 2,
    tags: ["backend"],
  },
  {
    title: "HTML5",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    level: 5,
    tags: ["frontend"],
  },
  {
    title: "CSS3",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    level: 4,
    tags: ["frontend"],
  },
  {
    title: "Git",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    level: 4,
    tags: ["tool"],
  },
  {
    title: "Flask",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
    level: 3,
    tags: ["backend"],
  },
  {
    title: "REST",
    img: restApi,
    level: 3,
    tags: ["backend", "tool"],
  },
  {
    title: "Postman",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    level: 3,
    tags: ["backend", "tool"],
  },
  {
    title: "PyTorch",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
    level: 2,
    tags: ["machine learning"],
  },
];
