"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  const [hoveredSkill, setHoveredSkill] = React.useState<string | null>(null);

  const handleSkillHover = (skillName: string) => {
    setHoveredSkill(skillName);
  };

  const handleSkillLeave = () => {
    setHoveredSkill(null);
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Tech I Work With</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-amber-50 borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={index}
          >
            <div
              onMouseEnter={() => handleSkillHover(skill.name)}
              onMouseLeave={handleSkillLeave}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}
            >
              <Image src={skill.logoUrl} alt={skill.name} width={60} height={60} />
              <motion.div
                className="dark:text-amber-50 text-teal-900"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredSkill === skill.name ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {skill.name}
              </motion.div>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}