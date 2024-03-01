import "./Skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import CLoud from "./Cloud";
import ML from "./ML";
import { v4 as uuidv4 } from "uuid";
import SkillsCarousel from "./Carousel";
import ProgressLine from "./ProgressLine";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

  const [ref, inView] = useInView({
    triggerOnce: false,
  });


  return (
    <section className="skills section" id="skills">
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
        {"// Skills"}
      </motion.h2>
      <motion.span
        className="section__subtitle pb-10"
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
        Currently Lvl. <span className="text-green-500/80">36</span> 🔀 Journey
        to Lvl. <span className="text-green-500/80">100</span> 📈
      </motion.span>
      <center>
        <motion.div
          className="-mt-16 mb-24"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            transition: { duration: 1 },
          }}
          viewport={{ once: false }}
        >
          <ProgressLine
            label=""
            backgroundColor="#333333"
            visualParts={[
              {
                percentage: "36%",
                color: "#22C55E",
              },
            ]}
            restartAnimation={inView}
          />
        </motion.div>
      </center>
      <center>
        <motion.div
          className="skills__container py-28 sm:w-1/4"
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            transition: { duration: 1 },
            y: 0,
          }}
          viewport={{ once: false }}
        >
          <SkillsCarousel
            cards={cards}
            offset={2}
            showArrows={false}
            width={"100%"}
            height={"100%"}
            margin={"0 auto"}
          />
        </motion.div>
      </center>
      <motion.p
        className="pt-12 mt-12 text-center italic text-green-500/80"
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1 },
          y: 0,
        }}
        viewport={{ once: false }}
      >
        #trusttheprocess #believe #grindneverends
      </motion.p>
    </section>
  );
}
