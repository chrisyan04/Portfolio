'use client'

import React, { useEffect, useState, useRef } from "react";
import "./ProgressLine.css";
import { useInView } from "react-intersection-observer";

interface VisualPart {
  percentage: string;
  color: string;
}

interface ProgressLineProps {
  label?: string;
  backgroundColor?: string;
  visualParts?: VisualPart[];
  restartAnimation?: boolean;
}

export default function ProgressLine({
  label = "Label",
  backgroundColor = "#e5e5e5",
  visualParts = [
    {
      percentage: "0%",
      color: "white",
    },
  ],
  restartAnimation = false,
}: ProgressLineProps) {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const [widths, setWidths] = useState(
    visualParts.map(() => {
      return 0;
    })
  );

  useEffect(() => {
     if (inView || restartAnimation) {
       requestAnimationFrame(() => {
         setWidths(
           visualParts.map((item) => {
             return parseFloat(item.percentage);
           })
         );
       });
     }
   }, [visualParts, restartAnimation, inView]);

  return (
    <div ref={ref}>
      <div className="progressLabel">{label}</div>
      <div
        className="progressVisualFull"
        style={{
          backgroundColor,
        }}
      >
        {visualParts.map((item, index) => (
          <div
            key={index}
            style={{
              width: `${widths[index]}%`,
              backgroundColor: item.color,
            }}
            className="progressVisualPart"
          />
        ))}
      </div>
    </div>
  );
}
