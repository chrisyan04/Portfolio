'use client'

import React from 'react'
import Link from 'next/link'
import { TypeAnimation } from 'react-type-animation'
import { FiKey } from 'react-icons/fi'

export default function NotFound() {
  const swingOnHover = {
    display: "inline-block",
    transition: "transform 0.7s ease-in-out",
  };

  const swingAnimation = {
    animation: "swing 1s ease-in-out",
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-8xl text-green-600 italic mb-2">#404</h1>
      <div className="p-8 w-1/4 max-sm:w-full text-center h-[150px]">
        <TypeAnimation
          sequence={[
            `Ahh, I see you're a curious one. I like that. But I'm afraid you've reached a dead end. Click on the key below to return home.`,
          ]}
          wrapper="span"
          speed={50}
          style={{
            fontSize: "1rem",
            color: "#888888",
          }}
          repeat={1}
          cursor={true}
        />
      </div>
      <Link
        href="/"
        className="cursor-pointer text-4xl mt-8 -mb-8 text-green-500/80"
        style={{ ...swingOnHover }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "rotate(135deg)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "rotate(0deg)")}
      >
        <FiKey style={{ ...swingAnimation }} />
      </Link>
    </div>
  );
}
