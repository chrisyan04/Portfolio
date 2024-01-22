"use client";

import React from "react";

export default function Data() {
  return (
    <div className="home__data">
      <h1 className="home__title text-green-500">{"// Chris · Yan"}</h1>
      <h3 className="home__subtitle">
        <span className="text-white/90">
          Trekking in a <br />{" "}
        </span>
        <span className="italic text-green-500">{"// World of Wonder"}</span>
      </h3>
      <div className="home__description rounded-lg relative">
        <p>
          <span className="text-orange-700 font-bold">html</span>
          <span className="absolute top-2 right-5">
            <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-1"></span>
            <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full mr-1"></span>
            <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>
          </span>
        </p>
        <span className="text-pink-600 font-bold text-sm">{"</p>"}</span>
        <br />
        <span className="ml-4 text-white/80 italic text-sm">
          {"software 💻 and ml 🧠 by day ... \n"}
        </span>
        <span className="ml-4 text-white/80 italic text-sm">
          {"beer 🍺 and hockey 🏒 by night"}
        </span>
        <br />
        <span className="text-pink-600 font-bold text-sm">{"</p>"}</span>
      </div>
    </div>
  );
};
