/* eslint-disable prettier/prettier */
import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import ArrowLeftIcon from "@/assets/icons/arrow-left.svg";
import ArrowRightIcon from "@/assets/icons/arrow-right.svg";
import { H3, P } from "../headings/Headings";
import type HorizontalScrollProps from "./HorizontalScroll.props";
import ScrollPagination from "./ScrollPagination";

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({
  subTitle,
  title,
  label,
  children,
  showPagination,
  showNavigation
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [currentPosition, setCurrentPosition] = useState(1);
  const [clientWidth, setClientWidth] = useState(0);

  const scrollWidth = useMemo(() => ref.current?.scrollWidth || 0, [
    ref.current?.scrollWidth
  ]);

  const maxScroll = useMemo(() => scrollWidth - clientWidth, [
    clientWidth,
    scrollWidth
  ]);

  const indicators = useMemo(() => {
    const b = [];
    let i = 1;
    if (clientWidth <= 0 || scrollWidth <= 0) return [];
    const maxItems = Math.round(scrollWidth / window.innerWidth) + 2;
    while (((i - 1) / maxItems) * scrollWidth <= maxScroll) {
      b.push(i);
      i += 1;
    }
    return b;
  }, [clientWidth, scrollWidth]);

  const scroll = (position: number) => {
    if (position <= 0 || position > indicators.length) return;
    setCurrentPosition(position);
    ref.current?.scrollTo({
      left: ((position - 1) / indicators.length) * scrollWidth,
      behavior: "smooth"
    });
  };

  const scrollTo = (position: number) => {
    setCurrentPosition(position);
    ref.current?.scrollTo({
      left: ((position - 1) / indicators.length) * scrollWidth,
      behavior: "smooth"
    });
  };

  const onScroll = () => {
    if (!ref.current) return;
    const { scrollLeft } = ref.current;
    const position =
      Math.round((scrollLeft / scrollWidth) * indicators.length) + 1;
    setCurrentPosition(position);
  };

  useLayoutEffect(() => {
    setClientWidth(ref.current?.clientWidth || 0);
    return () => {};
  }, [ref.current?.clientWidth]);

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <div>
          <P>{label}</P>
          <H3>{title}</H3>
          <P>{subTitle}</P>
        </div>
        <div className="flex gap-3">
          {showNavigation && (
            <button onClick={() => scroll(currentPosition - 1)}>
              <ArrowLeftIcon />
            </button>
          )}
          {showPagination && (
            <>
              {indicators.map((item) => (
                <ScrollPagination
                  key={`scroll-indicator-${item}`}
                  position={item}
                  isActive={currentPosition === item}
                  scrollTo={scrollTo}
                />
              ))}
            </>
          )}

          {showNavigation && (
            <button onClick={() => scroll(currentPosition + 1)}>
              <ArrowRightIcon />
            </button>
          )}
        </div>
      </div>
      <div className="mt-10 flex overflow-x-auto" ref={ref} onScroll={onScroll}>
        {children}
      </div>
    </div>
  );
};

export default HorizontalScroll;
