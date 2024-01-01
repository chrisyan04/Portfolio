"use client";

import React, { useState } from "react";
import Image from "next/image";
import itsme from "@/public/its-me.webp";
import resumeWebp from "@/public/RESUME.webp";
import { TypeAnimation } from "react-type-animation";
import "./Hero.css";

export default function Hero() {
  const [resumeToggle, setResumeToggle] = useState(false);

  const handleResumeToggle = () => {
    setResumeToggle(!resumeToggle);
  };

  const onDownloadClick = () => {
    const pdfUrl = "/RESUME.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Chris_Yan_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="grid grid-cols-2 items-center h-screen mx-36 pt-16">
      <div className="flex flex-col justify-center items-center">
        <div className="text-center pt-16">
          <h1 className="text-7xl">Chris Yan</h1>
        </div>
        <div className="text-lg w-1/2 text-center p-2 pb-10">
          <p>
            Just a guy treking his way around the world of datafication and AI.
          </p>
        </div>
        <div className="pt-24">
          <TypeAnimation
            sequence={[
              "What I Do: Machine Learning",
              1000,
              "What I Do: Software Development",
              1000,
              "What I Do: Data Science",
              1000,
              "What I Do: Web Development",
              1000,
            ]}
            speed={50}
            style={{ fontSize: "1.5rem" }}
            repeat={Infinity}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 place-items-center">
        <Image
          src={itsme}
          alt="Chris"
          width={500}
          height={500}
          className="rounded-full mb-8"
          style={{ height: "325px", width: "auto" }}
        />
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleResumeToggle}
          >
            Resume
          </button>
        </div>
      </div>

      {resumeToggle && (
        <div className="modal-container">
          <div className="modal-background" onClick={handleResumeToggle}></div>
          <div className="modal-content">
            <button className="close" onClick={handleResumeToggle}>
              &times;
            </button>
            <Image
              src={resumeWebp}
              alt="Resume"
              width={400}
              height={400}
              style={{ objectFit: "contain" }}
            />
            <button className="text-center" onClick={onDownloadClick}>
              Download
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
