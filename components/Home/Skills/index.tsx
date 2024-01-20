'use client'

import React, { Fragment } from 'react';
import {
  LinePlot,
  ResponsiveChartContainer,
  useDrawingArea,
} from '@mui/x-charts';
import { styled } from '@mui/material/styles';

const StyledPath = styled('path')(({ theme }) => ({
  fill: 'none',
  stroke: 'none',
  shapeRendering: 'crispEdges',
  strokeWidth: 1,
  pointerEvents: 'none',
}));

const StyledText = styled('text')(({ theme }) => ({
  stroke: 'none',
  fill: 'none',
  shapeRendering: 'crispEdges',
}));

const AreaPlot = () => {
  const { left, top, width, height } = useDrawingArea();

  return (
    <StyledPath
      d={`M ${left} ${top + height} L ${left} ${top} L ${left + width} ${top}`}
      fill="rgba(0, 0, 255, 1)"
    />
  );
};

const DrawingAreaBox = () => {
  const { left, top, width, height } = useDrawingArea();
  return (
    <Fragment>
      <StyledPath
        d={`M ${left} ${top} l ${width} 0 l 0 ${height} l -${width} 0 Z`}
      />
      <StyledText
        x={left}
        y={top}
        textAnchor="start"
        dominantBaseline="text-after-edge"
      >
        ({left},{top})
      </StyledText>
      <StyledText
        x={left + width}
        y={top + height}
        textAnchor="end"
        dominantBaseline="text-before-edge"
      >
        ({left + width},{top + height})
      </StyledText>
    </Fragment>
  );
};

const skillsData = [
  {
    title: 'Python',
    description: '2+ Years',
    data: [13, 200, 600, 700, 800, 987],
    xAxis: [1, 2, 3, 4, 5, 6],
  },
  // Add more skills as needed
];

const SkillCard = styled('div')(({ theme }) => ({
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '16px',
  margin: '8px',
  textAlign: 'center',
}));

export default function Skills() {
  return (
    <section className="h-screen">
      <h1 className="text-4xl text-center">🚀 Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {skillsData.map((skill, index) => (
          <SkillCard key={index}>
            <h2 className="text-xl font-bold mb-2">{skill.title}</h2>
            <p className="text-gray-600 mb-4">{skill.description}</p>
            <ResponsiveChartContainer
              margin={{ top: 20, left: 10, right: 10, bottom: 30 }}
              height={300}
              series={[
                { type: 'line', data: skill.data },
              ]}
              xAxis={[{ data: skill.xAxis }]}
            >
              <LinePlot />
              <AreaPlot />
              <DrawingAreaBox />
            </ResponsiveChartContainer>
          </SkillCard>
        ))}
      </div>
    </section>
  );
}