"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useRef, useId, useEffect } from "react";

interface SlideData {
  title?: string;
  src: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
    const slideRef = useRef<HTMLLIElement>(null);
  
    const xRef = useRef(0);
    const yRef = useRef(0);
    const frameRef = useRef<number>(0);
  
    useEffect(() => {
      const animate = () => {
        if (!slideRef.current) return;
  
        const x = xRef.current;
        const y = yRef.current;
  
        slideRef.current.style.setProperty("--x", `${x}px`);
        slideRef.current.style.setProperty("--y", `${y}px`);
  
        frameRef.current = requestAnimationFrame(animate);
      };
  
      frameRef.current = requestAnimationFrame(animate);
  
      return () => {
        if (frameRef.current) {
          cancelAnimationFrame(frameRef.current);
        }
      };
    }, []);
  
    const handleMouseMove = (event: React.MouseEvent) => {
      const el = slideRef.current;
      if (!el) return;
  
      const r = el.getBoundingClientRect();
      xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
      yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
    };
  
    const handleMouseLeave = () => {
      xRef.current = 0;
      yRef.current = 0;
    };
  
    const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
      event.currentTarget.style.opacity = "1";
    };
  
    const { src, title } = slide;
  
    return (
      <div className="[perspective:1200px] [transform-style:preserve-3d]">
        <li
          ref={slideRef}
          className="flex flex-1 flex-col items-center justify-end relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[120vmin] h-[60vmin] mx-[2vmin] z-10 mb-10"
          onClick={() => handleSlideClick(index)}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform:
              current !== index
                ? "scale(0.98) rotateX(8deg)"
                : "scale(1) rotateX(0deg)",
            transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
            transformOrigin: "bottom",
          }}
        >
          <div
            className="relative w-full h-full bg-white rounded-[1%] overflow-hidden transition-all duration-150 ease-out"
            style={{
              transform:
                current === index
                  ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
                  : "none",
            }}
          >
            <img
              className="w-full h-full object-contain opacity-100 transition-opacity duration-600 ease-in-out"
              alt={title}
              src={src}
              onLoad={imageLoaded}
              loading="eager"
              decoding="sync"
            />
          </div>
  
          
          <article className="bg-white text-black w-full py-2 text-lg md:text-xl lg:text-2xl font-semibold mt-2">
            {title}
          </article>
        </li>
      </div>
    );
};
  
  

interface CarouselControlProps {
  type: string;
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({
  type,
  title,
  handleClick,
}: CarouselControlProps) => {
  return (
    <button
      className={`w-12 h-12 flex items-center justify-center bg-neutral-200 dark:bg-neutral-800 border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${
        type === "previous" ? "rotate-180" : ""
      } mx-4`}
      title={title}
      onClick={handleClick}
    >
      <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
    </button>
  );
};

interface CarouselProps {
  slides: SlideData[];
}

export function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const id = useId();

  return (
    <div
      className="relative w-[120vmin] h-[60vmin] mx-auto mb-10"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <ul
        className="absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>

      <div className="absolute flex justify-center w-full top-[calc(100%+1rem)]">
        <CarouselControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />

        <CarouselControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
}
