import React, { useMemo, useRef } from "react";
import { H3, P } from "../headings/Headings";

const HorizontalScroll: React.FC<{
  label?: string;
  title: string;
  subTitle?: string;
  children: React.ReactNode;
}> = ({ subTitle, title, label, children }) => {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (scrollOffset: number) => {
    if (ref && ref.current) ref.current.scrollLeft += scrollOffset;
  };

  const scrollTo = (position: number) => {
    ref.current?.scrollTo({
      left: position,
      behavior: "smooth"
    });
  };

  const scrollWidth = useMemo(() => ref.current?.scrollWidth || 0, [ref]);
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <div>
          <P>{label}</P>
          <H3>{title}</H3>
          <P>{subTitle}</P>
        </div>
        <div className="flex gap-3">
          <button onClick={() => scroll(-100)}>prev</button>
          <button onClick={() => scrollTo(0)}>dot1</button>
          <button onClick={() => scrollTo(scrollWidth - (4 / 5) * scrollWidth)}>
            dot2
          </button>
          <button onClick={() => scrollTo(scrollWidth - (3 / 5) * scrollWidth)}>
            dot3
          </button>
          <button onClick={() => scrollTo(scrollWidth - (2 / 5) * scrollWidth)}>
            dot4
          </button>
          <button onClick={() => scrollTo((5 / 5) * scrollWidth)}>dot5</button>
          <button onClick={() => scroll(100)}>next</button>
        </div>
      </div>
      <div className="mt-10 flex overflow-x-hidden" ref={ref}>
        {children}
      </div>
    </div>
  );
};

export default HorizontalScroll;
