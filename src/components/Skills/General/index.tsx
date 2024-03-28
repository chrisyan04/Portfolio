'use client'

import React, { useState, useEffect } from "react";
import {
  CircularProgress,
  Card,
  CardBody,
  CardFooter,
  Chip,
  Button,
  CardHeader,
} from "@nextui-org/react";
import heart from "@/public/Icons/heart.svg";
import minus from "@/public/Icons/minus.svg";
import Image from "next/image";
import ScrollTrigger from "react-scroll-trigger";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function GeneralSkills() {
  const [disableAnimation, setDisableAnimation] = useState<boolean>(true);
  const [frontendCount, setFrontendCount] = useState<number>(66);
  const [backendCount, setBackendCount] = useState<number>(41);
  const [machineLearningCount, setMachineLearningCount] = useState<number>(30);

  const notifyMax = () => toast("🚨 { maximum value reached }");
  const notifyMin = () => toast("🚨 { minimum value reached }");
  
  const incrementValue = (setValue: { (value: React.SetStateAction<number>): void; (value: React.SetStateAction<number>): void; (value: React.SetStateAction<number>): void; (arg0: (prevValue: any) => any): void; }, notify: (() => void) | undefined) => {
    setValue((prevValue) => {
      const newValue = prevValue + 1;
      if (newValue > 100) {
        notifyMax();
        return prevValue;
      }
      return newValue;
    });
  };

  const decrementValue = (setValue: { (value: React.SetStateAction<number>): void; (value: React.SetStateAction<number>): void; (value: React.SetStateAction<number>): void; (arg0: (prevValue: any) => any): void; }, notify: (() => void) | undefined) => {
    setValue((prevValue) => {
      const newValue = prevValue - 1;
      if (newValue < 0) {
        notifyMin();
        return prevValue;
      }
      return newValue;
    });
  };

  useEffect(() => {
    const handleEnter = () => setDisableAnimation(true);
    const handleExit = () => setDisableAnimation(false);

    return () => {
      setDisableAnimation(true);
    };
  }, []);


  return (
    <div className="grid max-sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-3 justify-items-center items-center text-[#d4d4d8] mt-10 max-sm:gap-12 gap-8">
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
        <Card className="w-[240px] h-[240px] bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-around2 border-white/30 border-2">
          <CardHeader className="justify-center items-center pb-0">
            <Chip
              classNames={{
                base: "border-3 px-4 py-2 border-white/30",
                content: "text-white/90 text-lg font-bold",
              }}
              variant="bordered"
            >
              {"{ frontend }"}
            </Chip>
          </CardHeader>
          <CardBody className="justify-center items-center py-0">
            {React.createElement(
              ScrollTrigger as any,
              {
                onEnter: () => setDisableAnimation(true),
                onExit: () => setDisableAnimation(false),
              },
              <div>
                {disableAnimation && (
                  <CircularProgress
                    classNames={{
                      svg: "w-36 h-36 drop-shadow-md",
                      indicator: "stroke-white",
                      track: "stroke-white/10",
                      value: "text-3xl font-semibold text-[#d4d4d8]",
                    }}
                    value={frontendCount}
                    strokeWidth={4}
                    showValueLabel={true}
                    disableAnimation={false}
                  />
                )}
              </div>
            )}
          </CardBody>
          <CardFooter className="justify-center items-center pt-0 -mb-1 gap-3">
            <Button
              isIconOnly
              color="success"
              aria-label="like"
              onClick={() => incrementValue(setFrontendCount, notifyMax)}
            >
              <Image src={heart} alt="heart icon" height={25} width={25} />
            </Button>
            <Button
              isIconOnly
              color="danger"
              aria-label="minus"
              onClick={() => decrementValue(setFrontendCount, notifyMin)}
            >
              <Image src={minus} alt="minus icon" height={25} width={25} />
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
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
        <Card className="w-[240px] h-[240px] bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-around2 border-white/30 border-2">
          <CardHeader className="justify-center items-center pb-0">
            <Chip
              classNames={{
                base: "border-3 px-4 py-2 border-white/30",
                content: "text-white/90 text-lg font-bold",
              }}
              variant="bordered"
            >
              {"{ backend }"}
            </Chip>
          </CardHeader>
          <CardBody className="justify-center items-center py-0">
            {React.createElement(
              ScrollTrigger as any,
              {
                onEnter: () => setDisableAnimation(true),
                onExit: () => setDisableAnimation(false),
              },
              <div>
                {disableAnimation && (
                  <CircularProgress
                    classNames={{
                      svg: "w-36 h-36 drop-shadow-md",
                      indicator: "stroke-white",
                      track: "stroke-white/10",
                      value: "text-3xl font-semibold text-[#d4d4d8]",
                    }}
                    value={backendCount}
                    strokeWidth={4}
                    showValueLabel={true}
                    disableAnimation={false}
                  />
                )}
              </div>
            )}
          </CardBody>
          <CardFooter className="justify-center items-center pt-0 -mb-1 gap-3">
            <Button
              isIconOnly
              color="success"
              aria-label="like"
              onClick={() => incrementValue(setBackendCount, notifyMax)}
            >
              <Image src={heart} alt="heart icon" height={25} width={25} />
            </Button>
            <Button
              isIconOnly
              color="danger"
              aria-label="minus"
              onClick={() => decrementValue(setBackendCount, notifyMin)}
            >
              <Image src={minus} alt="minus icon" height={25} width={25} />
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
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
        <Card className="w-[240px] h-[240px] bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-around2 border-white/30 border-2">
          <CardHeader className="justify-center items-center pb-0">
            <Chip
              classNames={{
                base: "border-3 px-2 py-2 border-white/30",
                content: "text-white/90 text-lg font-bold",
              }}
              variant="bordered"
            >
              {"{ machine learning }"}
            </Chip>
          </CardHeader>
          <CardBody className="justify-center items-center py-0">
            {React.createElement(
              ScrollTrigger as any,
              {
                onEnter: () => setDisableAnimation(true),
                onExit: () => setDisableAnimation(false),
              },
              <div>
                {disableAnimation && (
                  <CircularProgress
                    classNames={{
                      svg: "w-36 h-36 drop-shadow-md",
                      indicator: "stroke-white",
                      track: "stroke-white/10",
                      value: "text-3xl font-semibold text-[#d4d4d8]",
                    }}
                    value={machineLearningCount}
                    strokeWidth={4}
                    showValueLabel={true}
                    disableAnimation={false}
                  />
                )}
              </div>
            )}
          </CardBody>
          <CardFooter className="justify-center items-center pt-0 -mb-1 gap-3">
            <Button
              isIconOnly
              color="success"
              aria-label="like"
              onClick={() => incrementValue(setMachineLearningCount, notifyMax)}
            >
              <Image src={heart} alt="heart icon" height={25} width={25} />
            </Button>
            <Button
              isIconOnly
              color="danger"
              aria-label="minus"
              onClick={() => decrementValue(setMachineLearningCount, notifyMin)}
            >
              <Image src={minus} alt="minus icon" height={25} width={25} />
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}
