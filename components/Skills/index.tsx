import React from "react";
import "./Skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import CLoud from "./Cloud";
import ML from "./ML";
import { v4 as uuidv4 } from "uuid";
import SkillsCarousel from "./Carousel";
import ProgressLine from "./ProgressLine";

interface Skill {
  name: string;
  key: string;
  content: React.ReactNode;
}

export default function Skills() {
  let cards: Skill[] = [
    {
      key: uuidv4(),
      name: "Frontend",
      content: <Frontend />,
    },
    {
      key: uuidv4(),
      name: "Backend",
      content: <Backend />,
    },
    {
      key: uuidv4(),
      name: "Cloud",
      content: <CLoud />,
    },
    {
      key: uuidv4(),
      name: "ML",
      content: <ML />,
    },
  ];
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title text-4xl text-green-500">// Skills</h2>
      <span className="section__subtitle pb-10">
        Currently Lvl. <span className="text-green-500/80">36</span> 🔀 Journey
        to Lvl. <span className="text-green-500/80">100</span> 📈
      </span>
      <center>
        <div className="-mt-16 mb-24">
          <ProgressLine
            label=""
            backgroundColor="#333333"
            visualParts={[
              {
                percentage: "36%",
                color: "#22C55E",
              },
            ]}
          />
        </div>
      </center>
      <center>
        <div className="skills__container py-28 sm:w-1/4">
          <SkillsCarousel
            cards={cards}
            offset={2}
            showArrows={false}
            width={"100%"}
            height={"100%"}
            margin={"0 auto"}
          />
        </div>
      </center>
      <p className="pt-20 text-center italic text-green-500/80">#trusttheprocess</p>
    </section>
  );
}
