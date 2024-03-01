import React from "react";
import "./UnderConstruction.css";

export default function UnderConstruction() {
  return (
    <section>
      <center>
        <div className="mt-52 -mb-60 sm:flex sm:items-center sm:justify-center">
          <p className="text-[#17F6FBCC] font-bold text-4xl max-sm:text-2xl">
            {'🚧 UNDER'}&nbsp;
          </p>
          <p className="text-[#17F6FBCC] font-bold text-4xl max-sm:text-2xl">
            {'CONSTRUCTION 🔨'}
          </p>
        </div>

        <ul className="construction-container h-screen">
          <li className="construction-item item-1"></li>
          <li className="construction-item item-2"></li>
          <li className="construction-item item-3"></li>
          <li className="construction-item item-4"></li>
          <div className="construction-content">
            <div className="flex justify-center">
              <div
                className="loading-dot"
                style={{ animationDelay: "0s" }}
              ></div>
              <div
                className="loading-dot"
                style={{ animationDelay: "0.33s" }}
              ></div>
              <div
                className="loading-dot"
                style={{ animationDelay: "0.66s" }}
              ></div>
            </div>
          </div>
        </ul>
      </center>
    </section>
  );
}
