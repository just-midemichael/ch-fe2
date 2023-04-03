import type { FC } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { IoCopyOutline } from "react-icons/io5";
import { AiOutlineHeart, AiOutlineThunderbolt } from "react-icons/ai";
import type { IMedia } from "@/services/hotel/payload";
import Img from "../images/Image";
import type HotelItem from "./HotelItem.props";
import styles from "./HotelItem.module.scss";
import { H5, H6 } from "../headings/Headings";

const HotelGridItem: FC<HotelItem> = ({
  className,
  featured,
  hotel: { Name, Address, Medias, AveragePrice }
}) => {
  return (
    <div className={`${className} max-w-[360px]  rounded-t-lg`}>
      <div className="relative h-[235px]">
        <Img
          path={`${Medias.find((item: IMedia) => item.Type === 2)?.Path}`}
          name="featured"
          className={`${styles.gridBase}  ${styles.skeleton}`}
        />

        {featured && (
          <div className="border-md absolute left-2 top-5 flex items-center gap-1 rounded bg-[#FE8501]  px-3 py-1 text-white">
            <AiOutlineThunderbolt />
            <H6 className="text-[10px] text-white">FEATURED</H6>
          </div>
        )}

        <div className="border-md absolute bottom-5 left-2 flex rounded bg-white px-3 py-1">
          <H5>&#8358; {`${AveragePrice}`}</H5>{" "}
          <H6 className="text-gray-500">/ night</H6>
        </div>
      </div>

      <div className="`border-solid rounded-b-lg border border-t-0  border-[#C2C2C2] px-3">
        <div className="py-5">
          <H5 className="underline underline-offset-1">{`${Name}`}</H5>
          <H6>{`${Address.City}, ${Address.Country}`}</H6>
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

export default HotelGridItem;
