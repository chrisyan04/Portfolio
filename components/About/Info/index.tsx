'use client'

import React from "react";
import {
  HiOutlineDesktopComputer,
  HiOutlineTerminal,
  HiOutlineTranslate,
} from "react-icons/hi";
import dynamic from "next/dynamic";
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

export default function Info() {

  return (
    <div className="about__info grid">
      <div className="about__box">
        <div className="flex items-center justify-center">
          <HiOutlineDesktopComputer className="about__icon" />
        </div>
        <h3 className="about__title text-green-600">#Experience</h3>
        <span className="about__subtitle">
          <div className="flex items-center justify-center pt-3 text-white/80">
            <AnimatedNumbers
              transitions={(index) => ({ type: "spring", duration: index + 3 })}
              animateToNumber={2}
            />
            <span>+ Years</span>
          </div>
        </span>
      </div>
      <div className="about__box">
        <div className="flex items-center justify-center">
          <HiOutlineTerminal className="about__icon" />
        </div>
        <h3 className="about__title text-green-600">#Completed</h3>
        <span className="about__subtitle">
          <div className="flex items-center justify-center pt-3 text-white/80">
            <AnimatedNumbers
              transitions={(index) => ({ type: "spring", duration: index + 3 })}
              animateToNumber={15}
            />
            <span>+ Projects</span>
          </div>
        </span>
      </div>
      <div className="about__box">
        <div className="flex items-center justify-center">
          <HiOutlineTranslate className="about__icon" />
        </div>
        <h3 className="about__title text-green-600">#Languages</h3>
        <span className="about__subtitle">
          <div className="flex items-center justify-center pt-3 text-white/80">
            <AnimatedNumbers
              transitions={(index) => ({ type: "spring", duration: index + 3 })}
              animateToNumber={3}
            />
            <span style={{ marginLeft: "4px" }}> Fluent</span>
          </div>
        </span>
      </div>
    </div>
  );
}
