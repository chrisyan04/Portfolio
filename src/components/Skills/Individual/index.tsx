"use client";

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
  Select,
  SelectItem,
  Checkbox,
  CheckboxGroup,
  Input,
} from "@nextui-org/react";
import { ChevronIcon } from "./ChevronIcon";
import Image from "next/image";
import { SearchIcon } from "./SearchIcon";

const skillTags = [
  "frontend",
  "backend",
  "database",
  "cloud",
  "tool",
  "machine learning",
  "statistics",
];

export default function IndividualSkills() {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredSkills = skillList.filter((skill) => {
    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.some((tag) => skill.tags.includes(tag));
    const matchesLevels =
      selectedLevels.length === 0 ||
      selectedLevels.includes(skill.level.toString());
    const matchesSearch = skill.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesTags && matchesLevels && matchesSearch;
  });

  const currentSkills = filteredSkills.slice(startIndex, endIndex);

  const totalPages = Math.ceil(skillList.length / itemsPerPage);

  const handlePageChange = (page: React.SetStateAction<number>) => {
    setCurrentPage(page);
  };

  const handleTagSelect = (selected: string) => {
    if (selectedTags.includes(selected)) {
      setSelectedTags([]);
    } else {
      setSelectedTags([selected]);
    }
    setCurrentPage(1);
  };

  const handleLevelSelect = (selected: string[]) => {
    setSelectedLevels(selected);
    setCurrentPage(1);
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
  }: //@ts-ignore
  PaginationItemRenderProps<HTMLButtonElement>) => {
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
    <div className="my-6 text-white max-sm:w-[380px] pb-10">
      <div className="mb-6 px-4 max-sm:mx-2 max-sm:pb-0">
        {/* <motion.div
          className="text-center pb-3"
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
          <span className="text-transparent bg-gradient-to-tr from-pink-800 to-yellow-400 bg-clip-text text-[40px] max-sm:text-[30px]">
            {"_skills_db"}
          </span>
        </motion.div> */}
        <div className="pt-4 grid grid-cols-3 max-sm:grid-cols-1 max-sm:gap-6 place-items-center">
          <motion.div
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
            <Input
              className="dark shadow-around2 rounded-xl w-[250px]"
              label="search skill"
              isClearable
              radius="lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onClear={() => setSearchTerm("")}
              classNames={{
                label: "text-black/50 dark:text-white/90",
                input: [
                  "bg-transparent",
                  "text-black/90 dark:text-white/90",
                  "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                ],
                innerWrapper: "bg-transparent",
                inputWrapper: [
                  "shadow-xl",
                  "bg-default-200/50",
                  "dark:bg-default/60",
                  "backdrop-blur-xl",
                  "hover:bg-default-200/70",
                  "dark:hover:bg-default/70",
                  "group-data-[focused=true]:bg-default-200/50",
                  "dark:group-data-[focused=true]:bg-default/60",
                  "!cursor-text",
                ],
              }}
              placeholder="type to search ..."
              startContent={
                <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
              }
            />
          </motion.div>
          <motion.div
            className="border-1 py-2 px-3 max-sm:px-1.5 border-white/50 shadow-around2 rounded-xl text-center place-items-center grid"
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
            <CheckboxGroup
              label="select proficiency level"
              orientation="horizontal"
              color="default"
              defaultValue={[]}
              className="dark"
              onValueChange={(values) => {
                handleLevelSelect(values);
              }}
            >
              <Checkbox value="1" className="dark">
                <span className="text-sm max-sm:text-tiny">{"Lvl. 1"}</span>
              </Checkbox>
              <Checkbox value="2" className="dark">
                <span className="text-sm max-sm:text-tiny">{"Lvl. 2"}</span>
              </Checkbox>
              <Checkbox value="3" className="dark">
                <span className="text-sm max-sm:text-tiny">{"Lvl. 3"}</span>
              </Checkbox>
              <Checkbox value="4" className="dark">
                <span className="text-sm max-sm:text-tiny">{"Lvl. 4"}</span>
              </Checkbox>
              <Checkbox value="5" className="dark">
                <span className="text-sm max-sm:text-tiny">{"Lvl. 5"}</span>
              </Checkbox>
            </CheckboxGroup>
          </motion.div>
          <motion.div
            className="w-[250px]"
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
            <Select
              className="max-w-xs dark shadow-around2 rounded-xl"
              label="skill tags"
              placeholder="select filter tags"
              selectionMode="single"
              onSelectionChange={(value) => {
                //@ts-ignore
                const index = parseInt(value.anchorKey);
                if (!isNaN(index)) {
                  const selectedTag = skillTags[index];
                  console.log("selectedTag:", selectedTag);
                  handleTagSelect(selectedTag);
                }
              }}
            >
              {skillTags.map((tag, index) => (
                <SelectItem className="dark" key={index} value={tag}>
                  {tag}
                </SelectItem>
              ))}
            </Select>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="border-2 border-white/50 pt-8 px-6 max-sm:px-2 max-sm:mx-3 max-sm:pt-6 rounded-3xl min-h-[582px] max-sm:min-w-[356px] sm:min-w-[578px] md:min-w-[744px] lg:min-w-[858px] shadow-around2"
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
        <div className="flex items-center justify-items-center gap-6 max-sm:gap-0 grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 max-sm:grid-cols-2 mb-2 min-h-[476px] max-sm:min-w-[336px] sm:min-w-[526px] md:min-w-[692px] lg:min-w-[806px]">
          {currentSkills.map((skill, index) => (
            <Card
              shadow="sm"
              key={index}
              isPressable
              className="bg-[#636366] border-1 border-white/50 rounded-3xl h-[218px] w-[142px] "
            >
              <CardBody className="overflow-visible p-0 bg-blur">
                <div className="flex justify-center items-center h-[140px] bg-gradient-to-br from-purple-800 to-fuchsia-500 border border-white/50 rounded-3xl">
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
        <div className="py-4 max-sm:max-w-[430px]">
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
