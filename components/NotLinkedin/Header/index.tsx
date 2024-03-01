"use client";

import React, { useEffect, useState } from "react";
import pic from "@/public/its-me.webp";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";
import {
  FaBell,
  FaCaretDown,
  FaHome,
  FaSearch,
  FaSuitcase,
  FaUsers,
} from "react-icons/fa";
import Image from "next/image";

export default function Header() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 915);
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  return (
    <header className="fixed top-3 left-28 right-28 z-[990] py-1 px-4 flex justify-between items-center max-sm:left-0 max-sm:right-0 max-sm:px-6 max-sm:py-3 bg-green-600 rounded-lg">
      <div className="flex items-center">
        <FiLinkedin className="text-4xl py-0.5 bg-white/90 text-green-600 rounded-md" />
        {isSmallScreen ? (
          <FaSearch className="text-lg text-gray-400 ml-6" />
        ) : (
          <div className="flex justify-center items-center border-gray-400 p-1.5 rounded-md bg-gray-700 ml-2">
            <FaSearch className="text-lg text-gray-400 mr-2 ml-3" />
            <input
              type="text"
              placeholder="Search"
              className="text-sm border bg-transparent border-transparent focus:outline-none"
              readOnly
            />
          </div>
        )}
      </div>
      <div className="flex text-black/80">
        <div className="text-2xl flex items-center justify-center">
          {isSmallScreen ? (
            <FaHome className="mx-2" />
          ) : (
            <div className="text-center flex flex-col items-center justify-center px-4 pt-1">
              <FaHome />
              <p className="text-xs">Home</p>
            </div>
          )}
          {isSmallScreen ? (
            <FaUsers className="mx-2" />
          ) : (
            <div className="text-center flex flex-col items-center justify-center px-4 pt-1">
              <FaUsers />
              <p className="text-xs">Home</p>
            </div>
          )}
          {isSmallScreen ? (
            <FaSuitcase className="mx-2" />
          ) : (
            <div className="text-center flex flex-col items-center justify-center px-3 pt-1">
              <FaSuitcase />
              <p className="text-xs">Jobs</p>
            </div>
          )}
          {isSmallScreen ? (
            <BiSolidMessageRoundedDots className="mx-2" />
          ) : (
            <div className="text-center flex flex-col items-center justify-center px-3 pt-1">
              <BiSolidMessageRoundedDots />
              <p className="text-xs">Messaging</p>
            </div>
          )}
          {isSmallScreen ? (
            <FaBell className="mx-2" />
          ) : (
            <div className="text-center flex flex-col items-center justify-center pl-2 pr-4 pt-1">
              <FaBell />
              <p className="text-xs">Notifications</p>
            </div>
          )}
        </div>
        <div>
          {isSmallScreen ? (
            <BsThreeDots className="mx-2.5 text-2xl" />
          ) : (
            <>
              <Image
                src={pic}
                priority
                alt="me"
                height={70}
                width={70}
                style={{
                  width: "27px",
                  height: "27px",
                  overflow: "hidden",
                  borderRadius: "50%",
                }}
              />
              <div className="flex items-center justify-center pt-0.5">
                <p className="text-xs -ml-1">Me</p>
                <FaCaretDown />
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
