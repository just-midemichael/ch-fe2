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
      <div className="h-[300px] lg:h-[400px] xl:h-[525px]">
        <Img
          path={medias[activeIndex] || ""}
          name={medias[activeIndex] || ""}
          className="h-[300px] w-full lg:h-[400px]  xl:h-[525px] xl:max-w-[684px]"
        />
      </div>
      <div className=" mt-4 hidden w-full gap-2 overflow-x-auto lg:flex">
        {medias.map((item, index) => (
          <div
            onClick={() => setActiveIndex(index)}
            className={`h-[100px] cursor-pointer lg:h-[90px] lg:w-[100px] xl:h-[146px] xl:w-[164px] ${
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
