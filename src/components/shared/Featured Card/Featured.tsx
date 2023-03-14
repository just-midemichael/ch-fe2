import type { FC } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { IoCopyOutline } from "react-icons/io5";
import { AiOutlineHeart, AiOutlineThunderbolt } from "react-icons/ai";
import Img from "../Images/Image";
import type FeaturedProps from "./Featured.props";
import styles from "./Featured.module.scss";
import { H5, H6 } from "../font headers/Fonts";

const Featured: FC<FeaturedProps> = ({ className, featured }) => {
  return (
    <div className={`${className}`}>
      <div className=" relative">
        <Img
          path="/featured.png"
          name="featured"
          className={`${styles.base} ${styles.skeleton}`}
        />

        {featured ? (
          <div className="border-md absolute top-5 left-2 flex items-center gap-1 rounded bg-[#FE8501]  px-3 py-1 text-white">
            <AiOutlineThunderbolt />
            <H6 className="text-[10px] text-white">FEATURED</H6>
          </div>
        ) : (
          <div></div>
        )}

        <div className="border-md absolute bottom-5 left-2 flex rounded bg-white px-3 py-1">
          <H5>&#8358; 14,000</H5> <H6 className="text-gray-500">/ night</H6>
        </div>
      </div>

      <div className="`border-solid rounded-b-lg border border-t-0  border-[#C2C2C2] px-3">
        <div className="py-5">
          <H5 className="underline underline-offset-1">
            Luxury Villa in Rego Park
          </H5>
          <H6>California City, CA USA</H6>
        </div>

        <hr />

        <div className="flex items-center justify-between py-3">
          <H6 className="text-gray-500">Available</H6>

          <div className="flex items-center gap-3">
            <BsBoxArrowUpRight className="cursor-pointer hover:text-[#FE8501]" />
            <IoCopyOutline className="cursor-pointer hover:text-[#FE8501]" />
            <AiOutlineHeart className="cursor-pointer hover:text-[#FE8501]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
