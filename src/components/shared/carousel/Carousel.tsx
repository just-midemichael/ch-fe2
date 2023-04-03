import React, { useEffect, useState } from "react";
import Img from "../images/Image";
import type CarouselProps from "./Carousel.props";

const Carousel: React.FC<CarouselProps> = ({
  medias,
  autoSlide,
  interval = 5000
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (autoSlide) {
      const nextIndex = activeIndex + 1 >= medias.length ? 0 : activeIndex + 1;
      const timer = setInterval(() => setActiveIndex(nextIndex), interval);
      return () => {
        clearInterval(timer);
      };
    }
    return () => undefined;
  }, [activeIndex]);

  return (
    <div className="w-full">
      <div className="h-[525px]">
        <Img
          path={medias[activeIndex] || ""}
          name={medias[activeIndex] || ""}
          className="h-[525px] w-full"
        />
      </div>
      <div className="mt-4 flex w-full justify-center gap-2 overflow-x-auto">
        {medias.map((item, index) => (
          <div
            onClick={() => setActiveIndex(index)}
            className={`h-[146px] w-[164px] cursor-pointer ${
              activeIndex === index ? "border border-primary400" : ""
            }`}
            key={item}
          >
            <Img path={item} name={item} className="h-full w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
