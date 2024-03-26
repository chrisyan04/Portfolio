"use client";

import { NextUIProvider } from "@nextui-org/react";

import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="flex min-h-screen flex-col items-center justify-between pt-4">
        <Navbar />
      </main>
    </NextUIProvider>
  );
}
