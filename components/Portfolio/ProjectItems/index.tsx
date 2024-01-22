"use client";

import React, { useState } from "react";
import { FiGithub } from "react-icons/fi";
import Image from "next/image";
import { ProjectDataProps } from "../config";
import Link from "next/link";

interface ProjectItemsProps {
  item: ProjectDataProps;
}

export default function ProjectItems({ item }: ProjectItemsProps) {
  const [isFront, setIsFront] = useState(true);
  const isOdd = item.id % 2 !== 0;

  const handleClick = () => {
    setIsFront(!isFront);
  };

  return (
    <div
      className={`flex flex-col relative ${
        isFront ? "z-10" : "z-1"
      }`}
    >
      <Image
        priority
        src={item.image}
        alt={item.title}
        className={`project__img cursor-pointer ${isFront ? "z-1" : "z-10"}`}
        height={150}
        width={150}
        onClick={handleClick}
      />
      <div
        className={`project__card flex flex-col items-center justify-center -mt-40 max-sm:-mt-26 max-sm:ml-12 max-sm:mr-0 ${
          isOdd ? "-ml-12 mr-12" : "-mr-36 ml-36"
        } ${isFront ? "z-10" : "z-1"}`}
        key={item.id}
        onClick={handleClick}
      >
        <div className="flex">
          <h3 className="project__title text-green-500">{item.title}</h3>
          <Link
            href={item.link}
            className="project__button -mt-2 rounded-full px-2"
          >
            <FiGithub />
          </Link>
        </div>
        <div className="text-center my-5 grid grid-cols-2 justify-center">
          {item.langs.map((lang, index) => (
            <span
              key={index}
              className="border border-gray-300 p-1 -m-2 text-xs rounded-full"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
