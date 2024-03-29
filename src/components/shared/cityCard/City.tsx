import type { FC } from "react";
import { GoLocation } from "react-icons/go";
import type ImageProps from "./City.props";
import Img from "../images/Image";
import { H5, H6 } from "../headings/Headings";
import styles from "./City.module.scss";

const City: FC<ImageProps> = ({ className, path }) => {
  return (
    <div className={`${className}`}>
      <div className={`relative ${styles.base}`}>
        <Img
          path={`${path}`}
          name="city"
          className={`h-full w-full ${styles.skeleton}`}
        />
        <div className="absolute top-0 flex h-full w-full items-center justify-center">
          <div className="rounded-full bg-[#FE8501] p-[5px]">
            <GoLocation className=" h-full w-[22px] cursor-pointer text-white" />
          </div>
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
