"use client";

import React from "react";
import { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("senderEmail", senderEmail);
    formData.append("message", message);

    const { data, error } = await sendEmail(formData);

    if (error) {
      toast.error(error);
      return;
    }

    toast.success("Email sent successfully!");

    setSenderEmail("");
    setMessage("");
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:chenxi.yan@gmail.com">
          chenxi.yan@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        onSubmit={ handleFormSubmit }
      >
        <input
        className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
        name="senderEmail"
        type="email"
        required
        maxLength={500}
        placeholder="Your email"
        value={senderEmail}
        onChange={(e) => setSenderEmail(e.target.value)}
        />
        <textarea
        className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
        name="message"
        placeholder="Your message"
        required
        maxLength={5000}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}