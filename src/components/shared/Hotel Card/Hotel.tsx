import type { FC } from "react";
import { AiOutlineHeart, AiOutlineThunderbolt } from "react-icons/ai";
import { BiBed, BiShower } from "react-icons/bi";
import { BsBoxArrowUpRight, BsHouse } from "react-icons/bs";
import { IoCopyOutline } from "react-icons/io5";
import type HotelProps from "./Hotel.props";
import styles from "./Hotel.module.scss";
import Img from "../Images/Image";
import { H6 } from "../font headers/Fonts";

const Hotel: FC<HotelProps> = ({ className, featured, info, favourite }) => {
  return (
    <div className={`relative ${className}`}>
      <Img
        id="pic"
        path="/hotel.png"
        name="hotel"
        className={`${styles.base} ${styles.skeleton}`}
      />

      {featured && (
        <div className="border-md absolute top-3 left-3 flex items-center gap-1 rounded bg-[#FE8501]  px-3 py-1 text-white">
          <AiOutlineThunderbolt className="" />
          <H6 className="text-[9px] text-white">FEATURED</H6>
        </div>
      )}

      {favourite && (
        <div className="absolute top-5 right-5 flex flex-col gap-1 text-white">
          <div className=" rounded-md bg-[#181A20] p-1 opacity-90">
            <AiOutlineHeart className="cursor-pointer text-[15px] hover:text-[#FE8501]" />
          </div>

          <div className=" rounded-md bg-[#181A20] p-1 opacity-90">
            <IoCopyOutline className="cursor-pointer text-[15px] hover:text-[#FE8501]" />
          </div>

          <div className=" rounded-md bg-[#181A20] p-1 opacity-90">
            <BsBoxArrowUpRight className="cursor-pointer text-[15px] hover:text-[#FE8501]" />
          </div>
        </div>
      )}

      <div className="absolute bottom-6 left-3">
        <H6 className={`text-white`}> Hotel Name </H6>
        <H6 className="text-white"> Hotel Location </H6>

        {info && (
          <div className="flex gap-2">
            <div className="flex items-center gap-1 text-white">
              <BiBed className="text-[10px] font-thin" />{" "}
              <H6 className="text-[10px] font-thin text-white"> 3 Bed</H6>
            </div>

            <div className="flex items-center gap-1 text-white">
              <BiShower className="text-[10px] font-thin" />{" "}
              <H6 className="text-[10px] font-thin text-white">4 bath</H6>
            </div>

            <div className="flex items-center gap-1 text-white">
              <BsHouse className="text-[10px] font-thin" />{" "}
              <H6 className="text-[10px] font-thin text-white">1200 sqft</H6>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hotel;
