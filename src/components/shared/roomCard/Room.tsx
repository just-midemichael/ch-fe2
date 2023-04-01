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

const RoomCard: FC<RoomProps> = ({ className, path, inverted }) => {
  return (
    <div className={`${className}`}>
      <div
        className={
          inverted
            ? `md:flex  lg:relative lg:items-center`
            : `md:flex md:flex-row-reverse md:items-center lg:relative`
        }
      >
        <div className="md:relative">
          <Img
            className={
              inverted
                ? `h-[207.63px] w-[355px]  md:h-[400.4px] md:w-[600.28px]  lg:h-[384.4px] lg:w-[661.28px]`
                : `h-[207.63px] w-[355px]  md:mr-[-100px] md:h-[400.4px]  md:w-[600.28px] lg:mr-[0px] lg:h-[384.4px] lg:w-[661.28px]`
            }
            path={`${path}`}
            name="hotel room card"
          />
          <div
            className={
              inverted
                ? `absolute bottom-[10px] left-7 flex items-center gap-2 md:bottom-[65px] md:left-10 lg:bottom-4 lg:left-12`
                : `absolute bottom-[10px] left-9  flex items-center gap-2 md:left-[250px] md:bottom-[70px] lg:left-[400px] lg:bottom-4`
            }
          >
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

        <div>
          <div
            className={
              inverted
                ? `w-[355px] border  border-[#F0F0F0]  bg-white p-4 md:absolute md:top-[69px] md:right-[-80px] md:h-[315.4px] md:w-[522px] md:p-7 lg:top-[40px] lg:right-[140px]`
                : `left-[140px]  w-[355px] border border-[#F0F0F0] bg-white p-4 md:absolute md:top-[500px] md:left-[20px] md:h-[315.4px] md:w-[522px] md:p-7 lg:top-[40px] lg:left-[140px]`
            }
          >
            <div className="max-w-lg">
              <P>
                {" "}
                From{" "}
                <span className="text-[20px] text-[#FE8501] ">
                  {" "}
                  &#36; 100
                </span>{" "}
                /Night
              </P>
              <H3 className="pb-3 font-light">Standard Room</H3>
              <P2>
                {" "}
                All our Deluxe rooms have big windows to help you take a broad
                view of the cityscape and nature.
              </P2>

              <div className="mt-7 mb-3 grid grid-cols-3 gap-3">
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
