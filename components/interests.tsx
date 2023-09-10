"use client";

import React from 'react'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
import SectionHeading from './section-heading'
import { interestsData } from '@/lib/data'

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


export default function Interests() {
    const { ref } = useSectionInView("Interests");

  return (
    <section
        id="interests"
        ref={ref}
        className="mb-28 max-w-[60rem] scroll-mt-28 sm:mb-45">
        <SectionHeading>Interests</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {interestsData.map((interest) => (
            <motion.div
            key={interest.id}
            className="bg-gray-300 dark:bg-gray-700 p-4 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            >
            <h3 className='text-4xl text-center'>{interest.icon}</h3>
            <h3 className="text-xl font-bold mb-2 text-teal-900 dark:text-teal-500 text-center">
                {interest.title}
                <div className="w-10rem rounded-lg h-1 dark:bg-gray-500 mx-auto mt-1 bg-gray-200"></div>
                </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-amber-50">
              {interest.bulletPoints.map((point, index) => (
                <li key={index} className='mb-3'>{point}</li>
              ))}
            </ul>
            </motion.div>
        ))}
        </div>
    </section>
    
  );
}
