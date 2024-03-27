import React from 'react'
import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import rightDark from "@/public/Icons/right-dark.svg";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

export default function JobPopover() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  const popoverPlacement = isSmallScreen ? "bottom" : "right";
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className='max-sm:py-2'
    >
      <Popover placement={popoverPlacement}>
        <PopoverTrigger>
          <Button className="text-lg shadow-around bg-gradient-to-tr from-red-500 to-purple-800 text-white">
            {"Current Job"}
            <Image src={rightDark} alt="right dark" height={25} width={25} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="shadow-around bg-[#18181b] ml-1 text-white border-white border-1">
          {(titleProps) => (
            <div className="px-1 py-2 text-center">
              <h3 className="text-lg font-bold">{"Data Scientist Intern"}</h3>
              <div className="text-sm">
                {"@ "}
                <Link
                  href="https://www.difenda.com/"
                  target="_blank"
                  className="underline text-[#ede19d]"
                >
                  {"Difenda"}
                </Link>
                {" | Oakville, ON"}
              </div>
              <div className="text-tiny">{"Jan 2024 - Present"}</div>
            </div>
          )}
        </PopoverContent>
      </Popover>
    </motion.div>
  );
}
