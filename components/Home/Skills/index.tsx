'use client'

import React, { Fragment } from 'react'
import { LinePlot, ResponsiveChartContainer, useDrawingArea } from '@mui/x-charts';
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

function DrawingAreaBox() {
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
}

export default function Skills() {
  return (
    <section className='h-screen'>
        <h1 className='text-4xl text-center'>🚀 Skills</h1>
        <div className='grid'>
            <div>
            <ResponsiveChartContainer
      margin={{ top: 20, left: 10, right: 10, bottom: 30 }}
      height={300}
      series={[
        {
          type: 'line',
          data: [13, 200, 600, 700, 800, 987],
        },
      ]}
      xAxis={[{ data: [1, 2, 3, 4, 5, 6] }]}
    >
      <LinePlot />
      <DrawingAreaBox />
    </ResponsiveChartContainer>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </section>
  )
}
