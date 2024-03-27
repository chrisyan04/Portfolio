import React from 'react'
import signatureDark from "@/public/Icons/chris-sig-dark.svg";
import Image from 'next/image';

export default function UnderConstruction() {
  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <span className="text-transparent bg-gradient-to-tr from-pink-700 to-blue-500 bg-clip-text text-[100px] -mt-24">
        coming soon!
      </span>
      <Image
        src={signatureDark}
        alt="signature dark"
        height={200}
        width={200}
      />
    </section>
  );
}
