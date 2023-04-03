import type { FC } from "react";
import { BsBoxArrowUpRight, BsHouse } from "react-icons/bs";
import { IoCopyOutline } from "react-icons/io5";
import { AiOutlineHeart, AiOutlineThunderbolt } from "react-icons/ai";
import { BiBed, BiShower } from "react-icons/bi";
import Img from "../images/Image";
import type HotelItem from "./HotelItem.props";
import styles from "./HotelItem.module.scss";
import { H4, H5, H6, P } from "../headings/Headings";

const HotelListItem: FC<HotelItem> = ({
  className,
  featured,
  hotel: { Name, Address, Medias, AveragePrice }
}) => {
  return (
    <div className={`${className} flex`}>
      <div className="relative h-[250px] w-[290px]">
        <Img
          path={`${Medias.find((item) => item.Type === 2)?.Path}`}
          name="featured"
          className={` ${styles.listBase} ${styles.skeleton}`}
        />

        {featured && (
          <div className="border-md absolute left-5 top-5 flex items-center gap-1 rounded bg-[#FE8501]  px-3 py-1 text-white">
            <AiOutlineThunderbolt />
            <H6 className="text-[10px] text-white">FEATURED</H6>
          </div>
        )}

        <div className="border-md absolute bottom-5 left-5 flex rounded bg-white px-3 py-1">
          <H5>&#8358; {`${AveragePrice}`}</H5> <P>/ mo</P>
        </div>
      </div>

      <div className="`border-solid  border- w-[40vw] rounded-r-lg border border-[#C2C2C2] px-3 pl-5 pr-7">
        <div className="py-5">
          <H4 className={`${styles.h4}`}>{`${Name}`}</H4>
          <H6 className={styles.h6}>{`${Address.City}, ${Address.Country}`}</H6>
        </div>

        <div className="flex gap-7">
          <div className="flex items-center gap-1 align-middle text-black">
            <BiBed />
            <H6 className={`${styles.h6} text-[14px]`}>{`${0}`}</H6>
          </div>

          <div className="flex items-center gap-1 text-black">
            <BiShower className="" />
            <H6 className={`${styles.h6} text-[14px]`}>{`${0}`}</H6>
          </div>

          <div className="flex items-center gap-1 text-black">
            <BsHouse className="" />
            <H6 className={`${styles.h6} text-[14px]`}>{`${0}`}</H6>
          </div>
        </div>

        <P className="max-w-md py-3">
          An exceptional exclusive 5 bedroom apartment for sale in this much
          sought after development in Knightsbridge.
        </P>

        <hr />

        <div className="flex items-center justify-between  py-5">
          <div className="flex">
            <H5>&#8358; {`${AveragePrice}`}</H5>{" "}
            <P className="text-black">/ night</P>
          </div>

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

export default HotelListItem;
