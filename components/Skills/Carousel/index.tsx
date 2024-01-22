'use client';

import React, { useEffect, useState } from 'react'
import Carousel from 'react-spring-3d-carousel';
import { config } from "react-spring";

interface Skill {
  name: string;
}

interface SkillsCarouselProps {
  cards: Skill[];
  offset: number;
  showArrows: boolean;
  width: string;
  height: string;
  margin: string;
}

export default function SkillsCarousel(props: SkillsCarouselProps) {
  const table = props.cards.map((element: Skill, index: number) => {
    return { ...element, onClick: () => setGoToSlide(index) }
  });

  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(0);
  const [cards] = useState(table);

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows])
  return (
    <div style={{ width: props.width, height: props.height, margin: props.margin }}>
      <Carousel slides={cards} goToSlide={goToSlide} offsetRadius={offsetRadius} showNavigation={showArrows} animationConfig={config.gentle} />
    </div>
  )
}
