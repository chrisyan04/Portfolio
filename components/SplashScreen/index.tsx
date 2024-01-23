"use client";

import React, { useState, useEffect } from "react";
import anime from "animejs";
import Image from "next/image";
import logo from "@/public/chris-sig.svg";

export default function SplashScreen({
  finishLoading,
}: {
  finishLoading: () => void;
}) {
  const [isMounted, setIsMounted] = useState(true);
  const [logoOpacity, setLogoOpacity] = useState(0);

  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    const translateYValue = window.innerWidth <= 600 ? "200%" : "-200%";

    loader
      .add({
        targets: "#logo",
        opacity: {
          value: 1,
          duration: 1500,
          easing: "easeInOutQuad",
        },
        delay: 1000,
      })
      .add({
        targets: "#logo",
        opacity: {
          value: 0.25,
          duration: 2000,
          easing: "easeInOutQuad",
        },
        translateY: {
          value: translateYValue,
          duration: 2500,
          easing: "easeInOutQuad",
        },
        scale: {
          value: 0.2,
          duration: 2000,
          easing: "easeInOutQuad",
        },
        delay: 1000,
      });
  };

  useEffect(() => {
    if (isMounted) {
      animate();
      setLogoOpacity(1);
    }

    return () => setIsMounted(false);
  }, [isMounted]);

  return (
    <div className="flex h-screen items-center justify-center">
      <Image
        priority
        id="logo"
        src={logo}
        alt="logo"
        width={60}
        height={60}
        style={{ width: "400px", height: "auto", opacity: logoOpacity }}
      />
    </div>
  );
}
