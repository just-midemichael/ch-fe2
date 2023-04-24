import type { FC } from "react";
import { GoLocation } from "react-icons/go";
import { FaWalking } from "react-icons/fa";
import { RiBus2Fill, RiMotorbikeFill } from "react-icons/ri";
import type MapProps from "./Map.props";
import Img from "../images/Image";
import { H4, H5, P } from "../headings/Headings";

const Map: FC<MapProps> = () => {
  return (
    <div className="absolute right-[130px] top-2 hidden  md:block">
      <div>
        <Img
          path="/map.png"
          name=""
          className="h-[406px] w-[401px] rounded-lg"
        />
        <div className="mt-5 flex items-center gap-3">
          <div className="rounded-full bg-[#FFF9F6] p-3">
            <GoLocation className="text-[#FE8501]" />
          </div>
          <P>67988 Felix Garden Apt. 387, York, Oregon, 69634</P>
        </div>
      </div>
      <H4 className="mt-7 font-semibold">What&apos;s Nearby?</H4>
      <div className="mt-6 flex flex-col gap-6">
        <div>
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-[#FFF9F6] p-3">
              <FaWalking className="text-[#FE8501]" />
            </div>
            <div>
              <H5>Walk Score</H5>
              <P>57/100 (Somewhat Walkable)</P>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-[#FFF9F6] p-3">
              <RiBus2Fill className="text-[#FE8501]" />
            </div>
            <div>
              <H5>Transit Score</H5>
              <P>40/100 (Somewhat Walkable)</P>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-[#FFF9F6] p-3">
              <RiMotorbikeFill className="text-[#FE8501]" />
            </div>
            <div>
              <H5>Bike Score</H5>
              <P>20/100 (Somewhat Walkable)</P>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
