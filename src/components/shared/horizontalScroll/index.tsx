import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from "react";
import ArrowLeftIcon from "@/assets/icons/arrow-left.svg";
import ArrowRightIcon from "@/assets/icons/arrow-right.svg";
import { H3, P } from "../headings/Headings";

const HorizontalScroll: React.FC<{
  label?: string;
  title: string;
  subTitle?: string;
  children: React.ReactNode;
}> = ({ subTitle, title, label, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(0);

  // useEffect(() => {
  //   const updatePosition = () => {
  //     setScrollPosition(wi);
  //   };
  //   document.getElementById().addEventListener("scroll", updatePosition);
  //   updatePosition();
  //   return () => document.getElementById().removeEventListener("scroll", updatePosition);
  // }, []);

  const scroll = (scrollOffset: number) => {
    if (ref && ref.current) {
      ref.current.scrollLeft += scrollOffset;
      setCurrentPosition(ref.current.scrollLeft);
    }
  };

  const scrollTo = (position: number) => {
    setCurrentPosition(position);
    ref.current?.scrollTo({
      left: position,
      behavior: "smooth"
    });
  };

  useLayoutEffect(() => {
    setScrollWidth(ref.current?.scrollWidth || 0);

    return () => undefined;
  }, [ref.current?.scrollWidth]);

  useEffect(() => {
    setCurrentPosition(ref.current?.scrollLeft || 0);
    setCurrentPosition(ref.current?.scrollLeft || 0);

    return () => undefined;
  }, [ref.current?.scrollLeft]);

  const ScrollToIcon: React.FC<{
    position: number;
    currentPosition: number;
  }> = ({ position }) => {
    const scrollToPosition = useMemo(
      () => ((position - 1) / 5) * scrollWidth,
      [scrollWidth]
    );

    const isActive = useMemo(() => {
      const prevPosition = ((position - 2) / 5) * scrollWidth;
      const nextPosition = (position / 5) * scrollWidth;

      // console.log({
      //   isActive:
      //     currentPosition > prevPosition && currentPosition < nextPosition,
      //   currentPosition,
      //   prevPosition,
      //   nextPosition
      // });

      return currentPosition > prevPosition && currentPosition < nextPosition;
    }, [scrollWidth, currentPosition, scrollToPosition]);

    return (
      <button onClick={() => scrollTo(scrollToPosition)}>
        <span
          className={`} block h-[6px] w-[6px] rounded-full
          ${isActive ? "bg-black" : "bg-black10"}`}
        />
      </button>
    );
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <div>
          <P>{label}</P>
          <H3>{title}</H3>
          <P>{subTitle}</P>
        </div>
        <div className="flex gap-3">
          <button onClick={() => scroll(-100)}>
            <ArrowLeftIcon />
          </button>
          <ScrollToIcon position={1} currentPosition={currentPosition} />
          <ScrollToIcon position={2} currentPosition={currentPosition} />
          <ScrollToIcon position={3} currentPosition={currentPosition} />
          <ScrollToIcon position={4} currentPosition={currentPosition} />
          <ScrollToIcon position={5} currentPosition={currentPosition} />

          <button onClick={() => scroll(100)}>
            <ArrowRightIcon />
          </button>
        </div>
      </div>
      <div className="mt-10 flex overflow-x-hidden" ref={ref}>
        {children}
      </div>
    </div>
  );
};

export default HorizontalScroll;
