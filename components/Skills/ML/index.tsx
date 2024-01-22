import React from "react";
import { HiCheckBadge } from "react-icons/hi2";
import { SkillIconProps, SkillIcon } from "@/types/skillIcons";
import Soon from "@/public/soon-arrow.svg";
import "../Skills.css";

const skills: SkillIconProps[] = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    alt: "Python",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    alt: "TensorFlow",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    alt: "Pandas",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    alt: "PyTorch",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
    alt: "R",
  },
  {
    src: Soon,
    alt: "coming soon",
  },
];

export default function ML() {
  return (
    <div className="card__design rounded-[25px] flex flex-col items-center justify-center py-6 sm:px-16 px-10">
      <div className="flex items-center justify-center text-center mb-4 border-solid border-green-500/70 border-2 p-2 rounded-[15px] -mt-12 bg-inherit">
        <span className="pr-2 text-xl text-green-500">ML/DS</span>{" "}
        <HiCheckBadge style={{ color: "rgb(8, 216, 74)", fontSize: "24px" }} />
      </div>
      <div className="grid grid-cols-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`relative tooltip-container ${
              index % 2 === 0 ? "mr-4 max-sm:mr-1" : "ml-4 max-sm:ml-1"
            }`}
          >
            <SkillIcon {...skill} />
            <div className="tooltip text-sm">{skill.alt}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
