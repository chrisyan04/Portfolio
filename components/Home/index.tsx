import './Home.css'
import Social from '@/components/Home/Socials'
import Scroll from "@/components/Home/Scroll";
import Data from "@/components/Home/Data";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <motion.div
            className="home__img"
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              transition: { duration: 1.5 },
              x: 0,
            }}
            viewport={{ once: false }}
          ></motion.div>
          <Data />
        </div>
        <Scroll />
      </div>
    </section>
  );
}