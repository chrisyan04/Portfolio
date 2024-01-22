'use client'

import { useEffect } from "react";
import { HiOutlineArrowSmUp } from "react-icons/hi";
import "./ScrollUp.css";

export default function ScrollUp() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollUp = document.querySelector(".scrollup");
      if (scrollUp && window.scrollY >= 560) {
        scrollUp.classList.add("show-scroll");
      } else if (scrollUp) {
        scrollUp.classList.remove("show-scroll");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a href="#" className="scrollup">
      <HiOutlineArrowSmUp className="scrollup__icon" />
    </a>
  );
};

