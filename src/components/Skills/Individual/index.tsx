'use client'

import React, { useState, useEffect } from "react";
import { skillList } from "@/data/skills";
import { motion } from "framer-motion";
import {
  Card,
  CardBody,
  CardFooter,
  Chip,
  Pagination,
  PaginationItemType,
  PaginationItemRenderProps,
} from "@nextui-org/react";
import { ChevronIcon } from "./ChevronIcon";
import Image from "next/image";

export default function IndividualSkills() {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    function updateItemsPerPage() {
      if (window.innerWidth >= 1022) {
        setItemsPerPage(10);
      } else if (window.innerWidth >= 767) {
        setItemsPerPage(8);
      } else if (window.innerWidth >= 640) {
        setItemsPerPage(6);
      } else {
        setItemsPerPage(4);
      }
    }

    updateItemsPerPage();

    window.addEventListener("resize", updateItemsPerPage);

    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentSkills = skillList.slice(startIndex, endIndex);

  const totalPages = Math.ceil(skillList.length / itemsPerPage);

  const handlePageChange = (page: React.SetStateAction<number>) => {
    setCurrentPage(page);
  };

 
  const renderItem = ({
    ref,
    key,
    value,
    isActive,
    onNext,
    onPrevious,
    setPage,
    className,
    //@ts-ignore
  }: PaginationItemRenderProps<HTMLButtonElement>) => {
    if (value === PaginationItemType.NEXT) {
      return (
        <button
          key={key}
          className={`${className} bg-default-200/50 min-w-8 w-8 h-8 border-1 border-white/50 rounded-3xl`}
          onClick={onNext}
        >
          <ChevronIcon className="rotate-180" />
        </button>
      );
    }

    if (value === PaginationItemType.PREV) {
      return (
        <button
          key={key}
          className={`${className} bg-default-200/50 min-w-8 w-8 h-8 border-1 border-white/50 rounded-3xl`}
          onClick={onPrevious}
        >
          <ChevronIcon />
        </button>
      );
    }

    if (value === PaginationItemType.DOTS) {
      return (
        <button key={key} className={className}>
          ...
        </button>
      );
    }

    return (
      <motion.button
        ref={ref}
        key={key}
        className={`${className} ${
          isActive
            ? "text-white bg-default-200/50 border-1 border-white/50 rounded-3xl"
            : "text-white bg-default-200/50 border-1 border-white/50 rounded-3xl"
        }`}
        onClick={() => setPage(value)}
        whileHover={{ scale: 1.05 }}
      >
        {value}
      </motion.button>
    );
  };

  return (
    <div className="my-10 text-white">
      <motion.div
        className="border-3 pt-8 px-6 max-sm:px-2 max-sm:pt-6 rounded-3xl min-h-[582px] shadow-around2"
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: { duration: 0.8 },
        }}
        viewport={{ once: false }}
      >
        <div className="gap-6 grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 max-sm:grid-cols-2 pb-4 min-h-[476px]">
          {currentSkills.map((skill, index) => (
            <Card
              shadow="sm"
              key={index}
              isPressable
              onPress={() => console.log("item pressed")}
              className="bg-[#636366] border-1 border-white/50 rounded-3xl h-[218px] w-[142px] "
            >
              <CardBody className="overflow-visible p-0 ">
                <div className="flex justify-center items-center h-[140px] bg-gradient-to-br from-pink-800 to-yellow-400 border border-white/50 rounded-3xl">
                  <Image
                    height={100}
                    width={100}
                    alt={skill.title}
                    className="w-auto h-[90px]"
                    src={skill.img}
                  />
                </div>
              </CardBody>
              <CardFooter className="text-small justify-center flex flex-col items-center gap-1">
                <b className="text-[#d4d4d8]">{skill.title}</b>
                <Chip
                  radius="full"
                  variant="shadow"
                  className="bg-[#636366] border-1 border-white/70 text-[#d4d4d8] text-tiny px-0.5"
                >
                  {"Lvl. "}
                  {skill.level}
                </Chip>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="py-4">
          <center>
            <Pagination
              loop
              showControls
              total={totalPages}
              initialPage={1}
              onChange={handlePageChange}
              renderItem={renderItem}
              variant="light"
              dotsJump={5}
              classNames={{
                cursor:
                  "bg-gradient-to-br shadow-lg from-indigo-500 to-pink-800 border-1 border-white/50 text-white font-bold",
              }}
            />
          </center>
        </div>
      </motion.div>
    </div>
  );
}
