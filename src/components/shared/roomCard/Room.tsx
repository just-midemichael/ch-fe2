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

const RoomCard: FC<RoomProps> = ({ className, path }) => {
  return (
    <div className={`${className} mt-7`}>
      <div className="relative">
        <Img
          className="h-[384.4px] w-[661.28px]"
          path={`${path}`}
          name="hotel room card"
        />
        <div className="absolute bottom-4 left-12 flex items-center gap-2">
          <div className="flex items-center gap-1 bg-white p-1">
            <AiOutlinePlayCircle className="text-gray-500" />
            <H6 className="text-gray-500">Watch Video</H6>
          </div>

          <div className="flex items-center gap-1 bg-white p-1">
            <AiOutlinePicture className="text-gray-500" />
            <H6 className="text-gray-500">5 Photos</H6>
          </div>
        </div>

        <div className="absolute top-7 left-[620px]  border border-[#F0F0F0] bg-white p-7">
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
                <P>2 Adults</P>
              </div>

              <div className="flex items-center gap-2">
                <BiChild className="text-[#FE8501]" />
                <P>2 Children</P>
              </div>

              <div className="flex items-center gap-2">
                <MdOutlineBedroomChild className="text-[#FE8501]" />
                <P>1 Bedroom</P>
              </div>

              <div className="flex items-center gap-2">
                <MdOutlineBedroomParent className="text-[#FE8501]" />
                <P>2 Beds</P>
              </div>

              <div className="flex items-center gap-2">
                <FaBath className="text-[#FE8501]" />
                <P> Bath</P>
              </div>

              <div className="flex items-center gap-2">
                <GiHomeGarage className="text-[#FE8501]" />
                <P>Car Packing</P>
              </div>
            </div>
            <hr />

            <div className="flex gap-40 pt-4">
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
  );
};

export default RoomCard;
