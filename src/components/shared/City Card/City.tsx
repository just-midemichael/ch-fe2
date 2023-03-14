import type { FC } from "react";
import { GoLocation } from "react-icons/go";
import type ImageProps from "./City.props";
import Img from "../Images/Image";
import { H5, H6 } from "../font headers/Fonts";

const City: FC<ImageProps> = ({ className }) => {
  return (
    <div className={`${className}`}>
      <div className="relative">
        <figure className={`h-[230px] w-[230px] ${className}`}>
          <Img path="/city.png" name="city" className="rounded-lg" />
        </figure>

        <div className="absolute top-[50%] left-[44%] rounded-full bg-[#FE8501] p-[5px]">
          <GoLocation className=" h-full w-[22px] cursor-pointer text-white" />
        </div>
      </div>

      <div className="pt-4">
        <H5> Lagos </H5>
        <H6 className="text-slate-900"> 12 Properties </H6>
      </div>
    </div>
  );
};

export default City;
