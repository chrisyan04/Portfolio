"use client";

import { NextUIProvider } from "@nextui-org/react";
import CursorTrailCanvas from "@/components/CursorTrailCanvas";
import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import { useState } from "react";

export default function Landing() {
  const [isCursorTrailActive, setCursorTrailActive] = useState<boolean>(false);

  return (
    <NextUIProvider>
      {isCursorTrailActive && (
        <CursorTrailCanvas
          color="hsla(183, 64%, 27%, 0.4)"
          className="pointer-events-none fixed inset-0 z-[999] h-full w-full"
        />
      )}
      <main className="flex min-h-screen flex-col items-center justify-between pt-4">
        <Navbar
          isCursorTrailActive={isCursorTrailActive}
          setCursorTrailActive={setCursorTrailActive}
        />
        <Home />
      </main>
    </NextUIProvider>
  );
}
