"use client";

import React from 'react';
import useEmblaCarousel, { UseEmblaCarouselType } from 'embla-carousel-react';
import type { EmblaOptionsType } from 'embla-carousel';
import Fade from 'embla-carousel-fade';
import styles from './EmblaCarousel.module.css';

interface EmblaCarouselProps {
  slides: React.ReactNode[];
  options: EmblaOptionsType;
}

const defaultOptions: EmblaOptionsType = {
  loop: true
}

const EmblaCarousel: React.FC<EmblaCarouselProps> = ({ slides, options = defaultOptions }) => {
  // 一旦 unknown としてから期待する型にキャストする
  const [emblaRef, embla] = useEmblaCarousel(options, [Fade()]) as unknown as [
    React.RefObject<HTMLDivElement>,
    UseEmblaCarouselType | null
  ];

  return (
    <div className={`${styles.embla} overflow-hidden`} ref={emblaRef}>
      <div className="flex">
        {slides.map((slide, index) => (
          <div className={`${styles.embla__slide} flex-shrink-0 w-full`} key={index}>
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmblaCarousel;