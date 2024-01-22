import Difenda from '@/public/Work/difenda.png'
import { StaticImageData } from 'next/image';

export interface ProjectDataProps {
  id: number;
  image: StaticImageData;
  title: string;
  link: string;
  langs: string[];
}

export const projectData = [
  {
    id: 1,
    image: Difenda,
    title: "ShopEaze",
    link: "https://github.com/AndreyZIno/ShopEaze",
    langs: ["Java", "Android", "Firebase", "JIRA", "Figma", "Git"],
  },
  {
    id: 2,
    image: Difenda,
    title: "PriceMe",
    link: "https://github.com/chrisyan04/priceme",
    langs: ["TypeScript", "Next.js", "MongoDB", "Tailwind", "Git", "Vercel"],
  },
  {
    id: 3,
    image: Difenda,
    title: "UofT Notes",
    link: "https://github.com/chrisyan04/UTSC-Notes",
    langs: ["LaTeX", "Notion", "Pen 🖋️", "Paper 📝", "My ✍🏼", "Love 💚"],
  },
];