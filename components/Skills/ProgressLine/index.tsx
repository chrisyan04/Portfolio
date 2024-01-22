'use client'

import React, { useEffect, useState } from "react";
import "./ProgressLine.css";

interface VisualPart {
  percentage: string;
  color: string;
}

interface ProgressLineProps {
  label?: string;
  backgroundColor?: string;
  visualParts?: VisualPart[];
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
}: ProgressLineProps) {
  const [widths, setWidths] = useState(
    visualParts.map(() => {
      return 0;
    })
  );

  useEffect(() => {
    requestAnimationFrame(() => {
      setWidths(
        visualParts.map((item) => {
          return parseFloat(item.percentage);
        })
      );
    });
  }, [visualParts]);

  return (
    <>
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
    </>
  );
}
