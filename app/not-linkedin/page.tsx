"use client";

import React, { useEffect, useState } from "react";
import { GoShieldCheck } from "react-icons/go";
import Image from "next/image";
import pic from "@/public/its-me.webp";
import banner from "@/public/banner.png";
import Link from "next/link";
import { getLinkedinData } from "@/utils/linkedinData";
import Header from "@/components/NotLinkedin/Header";

export default function Home() {
  const [linkedinData, setLinkedinData] = useState(null);

  useEffect(() => {
    const fetchLinkedinData = async () => {
      console.log("Fetching LinkedIn data...");
      try {
        const data = await getLinkedinData();
        setLinkedinData(data);
      } catch (error) {
        console.error("Error fetching LinkedIn data:", error);
      }
    };

    fetchLinkedinData();
  }, []);
  return (
    <section className="mx-28 h-screen max-sm:mx-0">
      <Header />
      <main
        className="grid grid-cols-2 max-sm:grid-cols-1 gap-4 border border-red-400 mt-20 max-sm:mt-16 justify-center"
        style={{ gridTemplateColumns: "70% 26%" }}
      >
        <div className="__first_col__">
          <div className="__person_card__">
            <Image
              src={banner}
              alt="banner"
              priority
              height={400}
              style={{ width: "100%" }}
              className="rounded-lg"
            />
            <div
              className="grid grid-cols-2 mt-20 px-8"
              style={{ gridTemplateColumns: "70% 26%" }}
            >
              <div className="flex flex-col">
                <p className="flex text-2xl items-center">
                  <span className="text-white">Chris Yan</span>{" "}
                  <GoShieldCheck className="mx-2" />{" "}
                  <span className="text-sm">(I'm/Him)</span>
                </p>
                <p className="text-white py-1">
                  Data Scientist @Difenda | ML @UofT | Web Developer @DS³
                </p>
                <p className="text-sm">
                  Oakville, Ontario, Canada ·{" "}
                  <span className="text-blue-400">Contact info</span>
                </p>
                <p>293</p>
              </div>
              <div></div>
            </div>
            <Image
              src={pic}
              priority
              alt="me"
              height={200}
              width={200}
              style={{
                width: "150px",
                height: "150px",
                // overflow: "hidden",
                borderRadius: "50%",
              }}
            />
          </div>
        </div>
        <div className="__second_col__ border border-red-400">
          <div className="__lang_url__">
            <div></div>
            <div></div>
          </div>
        </div>
        {linkedinData && (
          <div className="mt-4">
            <h2 className="text-2xl font-bold">LinkedIn Data:</h2>
            <pre>{JSON.stringify(linkedinData, null, 2)}</pre>
          </div>
        )}
      </main>
    </section>
  );
}
