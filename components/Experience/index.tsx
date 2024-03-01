"use client";

import React, { useState } from "react";
import "./Experience.css";
import {
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineCalendar,
} from "react-icons/hi";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Experience() {
  const [toggleState, setToggleState] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  return (
    <section className="experience section" id="experience">
      <motion.h2
        className="section__title text-4xl text-green-500"
        initial={{
          opacity: 0,
          y: -50,
        }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1 },
          y: 0,
        }}
        viewport={{ once: false }}
      >
        {"// Experience"}
      </motion.h2>
      <motion.span
        className="section__subtitle"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          transition: { duration: 2.5 },
        }}
        viewport={{ once: false }}
      >
        <div ref={ref}>
          {inView && (
            <TypeAnimation
              sequence={[
                `"I never dreamed about success. I worked for it." \n (Estée Lauder) 🙏🏼"`,
              ]}
              wrapper="span"
              speed={30}
              style={{
                fontSize: "0.8rem",
                display: "inline-block",
                color: "#888888",
              }}
              repeat={1}
              cursor={false}
            />
          )}
        </div>
      </motion.span>

      <div className="experience__container container -mt-8">
        <div className="experience__tabs">
          <div
            className={
              toggleState === 1
                ? "experience__button button--flex experience__active"
                : "experience__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <HiOutlineAcademicCap className="experience__icon" />
            $Education
          </div>
          <div
            className={
              toggleState === 2
                ? "experience__button button--flex experience__active"
                : "experience__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <HiOutlineBriefcase className="experience__icon" />
            $Work
          </div>
        </div>

        <div className="experience__sections">
          <div
            className={
              toggleState === 1
                ? "experience__content experience__content-active"
                : "experience__content"
            }
          >
            <div className="experience__data">
              <motion.div
                className="bg-transaparent py-1 rounded-lg text-center flex justify-center items-center flex-col relative"
                initial={{
                  opacity: 0,
                  y: -50,
                }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 1.5 },
                  y: 0,
                }}
                viewport={{ once: false }}
              >
                <h3 className="experience__title border border-green-500 p-1 rounded-lg -mb-4 bg-[#191919] z-[50]">
                  HS Student
                </h3>
                <div className="flex flex-col items-center justify-center pb-1 px-3 bg-transparent border border-green-500 rounded-lg pt-6 w-48">
                  <span className="experience__subtitle text-xs">
                    Luther College High School
                  </span>
                  <span className="experience__subtitle text-xs italic my-1">
                    Regina, SK
                  </span>
                  <div className="experience__calendar flex">
                    <HiOutlineCalendar className="experience__calendar-icon text-lg mr-2" />
                    <p>2018 - 2020</p>
                  </div>
                </div>
              </motion.div>
              <div>
                <span className="experience__rounder"></span>
                <span className="experience__line"></span>
              </div>
            </div>
            <div className="experience__data">
              <div></div>
              <div>
                <span className="experience__rounder"></span>
                <span className="experience__line"></span>
              </div>
              <motion.div
                className="bg-transaparent py-1 rounded-lg text-center flex justify-center items-center flex-col relative"
                initial={{
                  opacity: 0,
                  y: -50,
                }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 1.5 },
                  y: 0,
                }}
                viewport={{ once: false }}
              >
                <h3 className="experience__title border border-green-500 p-1 rounded-lg -mb-4 bg-[#191919] z-[50]">
                  HS Student
                </h3>
                <div className="flex flex-col items-center justify-center pb-1 px-3 bg-transparent border border-green-500 rounded-lg pt-6 w-48">
                  <span className="experience__subtitle text-xs">
                    Iroquois Ridge High School
                  </span>
                  <span className="experience__subtitle text-xs italic my-1">
                    Oakville, ON
                  </span>
                  <div className="experience__calendar flex">
                    <HiOutlineCalendar className="experience__calendar-icon text-lg mr-2" />
                    2020 - 2022
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="experience__data">
              <motion.div
                className="bg-transaparent py-1 rounded-lg text-center flex justify-center items-center flex-col relative"
                initial={{
                  opacity: 0,
                  y: -50,
                }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 1.5 },
                  y: 0,
                }}
                viewport={{ once: false }}
              >
                <h3 className="experience__title border border-green-500 py-1 px-1 rounded-lg -mb-4 bg-[#191919] z-[50]">
                  Machine Learning
                </h3>
                <div className="flex flex-col items-center justify-center pb-1 px-3 bg-transparent border border-green-500 rounded-lg pt-6 w-48">
                  <span className="experience__subtitle text-xs">
                    University of Toronto
                  </span>
                  <span className="experience__subtitle text-xs italic my-1">
                    Toronto, ON
                  </span>
                  <div className="experience__calendar flex">
                    <HiOutlineCalendar className="experience__calendar-icon text-lg mr-2" />
                    2022 - Present
                  </div>
                </div>
              </motion.div>
              <div>
                <span className="experience__rounder"></span>
                <span className="experience__line"></span>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 2
                ? "experience__content experience__content-active"
                : "experience__content"
            }
          >
            <div className="experience__data">
              <motion.div
                className="bg-transaparent py-1 rounded-lg text-center flex justify-center items-center flex-col relative"
                initial={{
                  opacity: 0,
                  y: -50,
                }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 1.5 },
                  y: 0,
                }}
                viewport={{ once: false }}
              >
                <h3 className="experience__title border border-green-500 p-1 rounded-lg -mb-4 bg-[#191919] z-[50]">
                  Math Tutor
                </h3>
                <div className="flex flex-col items-center justify-center pb-1 px-3 bg-transparent border border-green-500 rounded-lg pt-6 w-48">
                  <span className="experience__subtitle text-xs">
                    Literacy Initiative
                  </span>
                  <span className="experience__subtitle text-xs italic my-1">
                    Online
                  </span>
                  <div className="experience__calendar flex">
                    <HiOutlineCalendar className="experience__calendar-icon text-lg mr-2" />
                    Nov 2020 - Jan 2021
                  </div>
                </div>
              </motion.div>
              <div>
                <span className="experience__rounder"></span>
                <span className="experience__line"></span>
              </div>
            </div>
            <div className="experience__data">
              <div></div>
              <div>
                <span className="experience__rounder"></span>
                <span className="experience__line"></span>
              </div>
              <motion.div
                className="bg-transaparent py-1 rounded-lg text-center flex justify-center items-center flex-col relative"
                initial={{
                  opacity: 0,
                  y: -50,
                }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 1.5 },
                  y: 0,
                }}
                viewport={{ once: false }}
              >
                <h3 className="experience__title border border-green-500 p-1 rounded-lg -mb-4 bg-[#191919] z-[50]">
                  Data Analyst
                </h3>
                <div className="flex flex-col items-center justify-center pb-1 px-3 bg-transparent border border-green-500 rounded-lg pt-6 w-48">
                  <span className="experience__subtitle text-xs">IAI Lab</span>
                  <span className="experience__subtitle text-xs italic my-1">
                    Toronto, ON
                  </span>
                  <div className="experience__calendar flex">
                    <HiOutlineCalendar className="experience__calendar-icon text-lg mr-2" />
                    Jun 2023 - Dec 2023
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="experience__data">
              <motion.div
                className="bg-transaparent py-1 rounded-lg text-center flex justify-center items-center flex-col relative"
                initial={{
                  opacity: 0,
                  y: -50,
                }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 1.5 },
                  y: 0,
                }}
                viewport={{ once: false }}
              >
                <h3 className="experience__title border border-green-500 p-1 rounded-lg -mb-4 bg-[#191919] z-[50]">
                  Web Developer
                </h3>
                <div className="flex flex-col items-center justify-center pb-1 px-3 bg-transparent border border-green-500 rounded-lg pt-6 w-48">
                  <span className="experience__subtitle text-xs">DS³</span>
                  <span className="experience__subtitle text-xs italic my-1">
                    Toronto, ON
                  </span>
                  <div className="experience__calendar flex">
                    <HiOutlineCalendar className="experience__calendar-icon text-lg mr-2" />
                    Nov 2023 - Present
                  </div>
                </div>
              </motion.div>
              <div>
                <span className="experience__rounder"></span>
                <span className="experience__line"></span>
              </div>
            </div>
            <div className="experience__data">
              <div></div>
              <div>
                <span className="experience__rounder"></span>
                <span className="experience__line"></span>
              </div>
              <motion.div
                className="bg-transaparent py-1 rounded-lg text-center flex justify-center items-center flex-col relative"
                initial={{
                  opacity: 0,
                  y: -50,
                }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 1.5 },
                  y: 0,
                }}
                viewport={{ once: false }}
              >
                <h3 className="experience__title border border-green-500 p-1 rounded-lg -mb-4 bg-[#191919] z-[50]">
                  Data Scientist
                </h3>
                <div className="flex flex-col items-center justify-center pb-1 px-3 bg-transparent border border-green-500 rounded-lg pt-6 w-48">
                  <span className="experience__subtitle text-xs">
                    Difenda Inc.
                  </span>
                  <span className="experience__subtitle text-xs italic my-1">
                    Oakville, ON
                  </span>
                  <div className="experience__calendar flex">
                    <HiOutlineCalendar className="experience__calendar-icon text-lg mr-2" />
                    Jan 2024 - Present
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className="text-center pt-12 text-sm"
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1.5 },
          y: 0,
        }}
        viewport={{ once: false }}
      >
        <p>{"// For more information, check out my notLinkedIn page "}</p>
        <center>
          <Link href="/working-on-it" target="_blank">
            <svg
              className="mt-2 cursor-pointer"
              fill="#22C55E"
              width="15px"
              height="15px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5,2 L7,2 C7.55228475,2 8,2.44771525 8,3 C8,3.51283584 7.61395981,3.93550716 7.11662113,3.99327227 L7,4 L5,4 C4.48716416,4 4.06449284,4.38604019 4.00672773,4.88337887 L4,5 L4,19 C4,19.5128358 4.38604019,19.9355072 4.88337887,19.9932723 L5,20 L19,20 C19.5128358,20 19.9355072,19.6139598 19.9932723,19.1166211 L20,19 L20,17 C20,16.4477153 20.4477153,16 21,16 C21.5128358,16 21.9355072,16.3860402 21.9932723,16.8833789 L22,17 L22,19 C22,20.5976809 20.75108,21.9036609 19.1762728,21.9949073 L19,22 L5,22 C3.40231912,22 2.09633912,20.75108 2.00509269,19.1762728 L2,19 L2,5 C2,3.40231912 3.24891996,2.09633912 4.82372721,2.00509269 L5,2 L7,2 L5,2 Z M21,2 L21.081,2.003 L21.2007258,2.02024007 L21.2007258,2.02024007 L21.3121425,2.04973809 L21.3121425,2.04973809 L21.4232215,2.09367336 L21.5207088,2.14599545 L21.5207088,2.14599545 L21.6167501,2.21278596 L21.7071068,2.29289322 L21.7071068,2.29289322 L21.8036654,2.40469339 L21.8036654,2.40469339 L21.8753288,2.5159379 L21.9063462,2.57690085 L21.9063462,2.57690085 L21.9401141,2.65834962 L21.9401141,2.65834962 L21.9641549,2.73400703 L21.9641549,2.73400703 L21.9930928,2.8819045 L21.9930928,2.8819045 L22,3 L22,3 L22,9 C22,9.55228475 21.5522847,10 21,10 C20.4477153,10 20,9.55228475 20,9 L20,5.414 L13.7071068,11.7071068 C13.3466228,12.0675907 12.7793918,12.0953203 12.3871006,11.7902954 L12.2928932,11.7071068 C11.9324093,11.3466228 11.9046797,10.7793918 12.2097046,10.3871006 L12.2928932,10.2928932 L18.584,4 L15,4 C14.4477153,4 14,3.55228475 14,3 C14,2.44771525 14.4477153,2 15,2 L21,2 Z"
              />
            </svg>
          </Link>
        </center>
      </motion.div>
    </section>
  );
}
