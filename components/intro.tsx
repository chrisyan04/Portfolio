"use client"

import React from 'react'
import Image from 'next/image'
import mepic from '../public/outside.png'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import Typed from 'typed.js'

export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    const typingRef = React.useRef(null);

    React.useEffect(() => {
        const options = {
          strings: [
            '<span class="font-bold">Hi, my name\'s Chris!</span>',
            '<span class="font-bold">Bonjour, je m\'appelle Chris!</span>',
            '<span class="font-bold">你好, 我叫 Chris!</span>',
            '<span> I\'m a UofT Student</span>',
            '<span> I\'m a Software Developer</span>',
            '<span> I\'m a budding Data Scientist</span>',
            '<span> I\'m a Machine Learning enthusiast</span>',
            '<span> I\'m a Hockey Player</span>',
            '<span> I\'m an Outdoors aficionado</span>'
          ],
          typeSpeed: 50,
          backSpeed: 30,
          startDelay: 1000,
          backDelay: 1000,
          loop: true,
          smartBackspace: true,
        };
      
        const typed = new Typed(typingRef.current, options);
      
        return () => {
          typed.destroy();
        };
      }, []);
      

  return (
    <section ref={ ref } id='home' className='mb-28 max-w-[50rem] text-center sm:mb-24 sm:h-[40vh] scroll-mt-[100rem]'>
        <div className="flex items-center justify-center">
            <div className='relative'>
                <motion.div 
                initial={{ rotate: 0, opacity: 0, scale: 0 }}
                animate={{ rotate: 360, opacity: 1, scale: 1 }}
                transition={{
                    type: "tween",
                    duration: 0.3,
                }}
                >
                    <Image src={ mepic } alt="My Pic" width="200" height="200" quality="95" priority={ true } className='h-50 w-50 rounded-full object-cover border-[0.35rem] dark:border-white border-black/25 shadow-xl'/>
                </motion.div>
                <motion.span className='absolute bottom-0 right-0 text-4xl'
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 125,
                    delay: 0.1,
                    duration: 0.3,
                }}
                >
                    <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" className='w-[3rem]'/>
                </motion.span>
            </div>
        </div>

        <motion.h1 className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-xl lg:text-2xl'
        initial={{ opacity:0, y: 100 }}
        animate={{ opacity:1, y:0 }}>
            <span ref={typingRef}></span>
        </motion.h1>

        <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
            <Link
            href="#contact"
            className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
            onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
            }}
            >
            Contact Me{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
            </Link>

            <a
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
            href="/CV.pdf"
            download
            >
            Download Resume{" "}
            <HiDownload className="opacity-60 transition" />
            </a>

            <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://www.linkedin.com/in/chris-yan-97820a228/"
            target="_blank"
            >
            <BsLinkedin />
            </a>

            <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://github.com/chrisyan04"
            target="_blank"
            >
            <FaGithubSquare />
            </a>

            <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://www.instagram.com/chris.yan_/"
            target="_blank"
            >
            <AiFillInstagram />
            </a>
      </motion.div>
    </section>
  );
}
