import type { FC } from "react";
import { AiOutlinePlayCircle, AiOutlinePicture } from "react-icons/ai";
import { BsFillPersonFill, BsArrowRight } from "react-icons/bs";
import { BiChild } from "react-icons/bi";
import { MdOutlineBedroomParent, MdOutlineBedroomChild } from "react-icons/md";
import { FaBath } from "react-icons/fa";
import { GiHomeGarage } from "react-icons/gi";
import { H3, H6, P, P2 } from "../headings/Headings";
import Img from "../images/Image";
import type RoomProps from "./Room.props";
import Button from "../button/Button";
import style from "./Room.module.scss";

const RoomCard: FC<RoomProps> = ({ className, room, inverted }) => {
  return (
    <div className={`${inverted ? style.inverted : ""} ${className}`}>
      <div className={style.base}>
        <div className={`md:relative ${style.imgCard}`}>
          <Img
            className={`${style.skeleton} ${style.img}`}
            path={`${room.Medias.find((item) => item.Type === 2)?.Path}`}
            name={room.Name}
          />
          <div className={style.imgInfo}>
            <div className="flex cursor-pointer items-center gap-1 bg-white p-1">
              <AiOutlinePlayCircle className="text-gray-500" />
              <H6 className="text-gray-500">Watch Video</H6>
            </div>

            <div className="flex cursor-pointer items-center gap-1 bg-white p-1">
              <AiOutlinePicture className="text-gray-500" />
              <H6 className="text-gray-500">5 Photos</H6>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className={style.info}>
            <div className="max-w-lg">
              <P>
                {" "}
                From{" "}
                <span className="text-[20px] text-[#FE8501] ">
                  {" "}
                  &#36; {room.Price}
                </span>{" "}
                /Night
              </P>
              <H3 className="pb-3 font-light">Standard Room</H3>
              <P2> {room.Description}</P2>

              <div className="mb-3 mt-7 grid grid-cols-3 gap-3">
                <div className="flex items-center gap-2">
                  <BsFillPersonFill className="text-[#FE8501]" />
                  <P2 className="md:text-[14px]">2 Adults</P2>
                </div>

                <div className="flex items-center gap-2">
                  <BiChild className="text-[#FE8501]" />
                  <P2 className="md:text-[14px]">2 Children</P2>
                </div>

                <div className="flex items-center gap-2">
                  <MdOutlineBedroomChild className="text-[#FE8501]" />
                  <P2 className="md:text-[14px]">1 Bedroom</P2>
                </div>

                <div className="flex items-center gap-2">
                  <MdOutlineBedroomParent className="text-[#FE8501]" />
                  <P2 className="md:text-[14px]">2 Beds</P2>
                </div>

                <div className="flex items-center gap-2">
                  <FaBath className="text-[#FE8501]" />
                  <P2 className="md:text-[14px]"> Bath</P2>
                </div>

                <div className="flex items-center gap-2">
                  <GiHomeGarage className="text-[#FE8501]" />
                  <P2 className="md:text-[14px]">Car Packing</P2>
                </div>
              </div>
              <hr />

              <div className="flex gap-20 pt-4 md:gap-40">
                <div className="flex items-center gap-2">
                  <P>View Details</P>
                  <BsArrowRight />
                </div>

                <Button size="md" color="primary" className="text-[12.54px]">
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
