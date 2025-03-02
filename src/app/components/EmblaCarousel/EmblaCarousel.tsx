"use client";

import React, { useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaOptionsType } from 'embla-carousel';
import AutoPlay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import styles from './EmblaCarousel.module.css';
import { NextButton, PrevButton, usePrevNextButtons } from './EmblaCarouselArrowButtons';
import { useAutoplay } from './EmblaCarouselAutoplay';
import { useAutoplayProgress } from './EmblaCarouselAutoplayProgress';

interface EmblaCarouselProps {
  slides: React.ReactNode[];
  options?: EmblaOptionsType;
}

const defaultOptions: EmblaOptionsType = {
  loop: true
}

const EmblaCarousel: React.FC<EmblaCarouselProps> = ({ slides, options = defaultOptions }) => {
  const progressNode = useRef<HTMLDivElement>(null)

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade(), AutoPlay()]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const { autoplayIsPlaying, toggleAutoplay, onAutoplayButtonClick } =
    useAutoplay(emblaApi)

  const { showAutoplayProgress } = useAutoplayProgress(emblaApi, progressNode)

  return (
    <div className={`${styles.embla}`}>
      <div className={`${styles.emblaViewport}`} ref={emblaRef}>
        <div className={`${styles.emblaContainer}`}>
          {slides.map((slide, index) => (
            <div className={`${styles.emblaSlide} flex-shrink-0 w-full`} key={index}>
              {slide}
            </div>
          ))}
        </div>
      </div>
      <div className={`${styles.emblaControls}`}>
        <div className={`${styles.emblaButtons}`}>
          <PrevButton
            onClick={() => onAutoplayButtonClick(onPrevButtonClick)}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={() => onAutoplayButtonClick(onNextButtonClick)}
            disabled={nextBtnDisabled}
          />
        </div>

        <div
            className={`${styles.emblaProgress} ${showAutoplayProgress ? '' : styles.emblaProgressHidden}`}
        >
          <div className={`${styles.emblaProgressBar}`} ref={progressNode} />
        </div>

        <button className={`${styles.emblaPlay}`} onClick={toggleAutoplay} type="button">
          {autoplayIsPlaying ? 'Stop' : 'Start'}
        </button>
      </div>
    </div>
  );
};

export default EmblaCarousel;