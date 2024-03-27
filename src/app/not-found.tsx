import React from "react";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";
import rightDark from "@/public/Icons/right-dark.svg";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="h-screen flex flex-col justify-center items-center -mt-10">
      <h1 className="text-[250px] -mb-10">
        <span className="text-transparent bg-gradient-to-tr from-pink-800 to-yellow-500 bg-clip-text">
          {"404"}
        </span>
      </h1>
      <h2 className="pb-10">
        <span className="text-transparent bg-gradient-to-tr from-pink-700 to-blue-500 bg-clip-text text-6xl">
          {"page access denied"}
        </span>
      </h2>{" "}
      <Link href="/">
        <Button
          className="bg-gradient-to-tr from-pink-800 to-yellow-500 shadow-around flex items-center justify-center text-white text-lg font-bold"
          size="lg"
        >
          {"go back home "}
          <Image
            src={rightDark}
            alt="right dark"
            height={25}
            width={25}
            className="ml-2"
          />
        </Button>
      </Link>
    </section>
  );
}
