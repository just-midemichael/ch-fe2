import { H33, P } from "@/components/shared/headings/Headings";
import React from "react";
import type HotelFacilityCardProps from "./HotelFacilityCard.props";

const HotelFacilityCard: React.FC<HotelFacilityCardProps> = ({
  title,
  description,
  Icon
}) => {
  return (
    <div className="w-[230px] rounded-sm border border-[#E5E5E5] p-3 px-2">
      <H33 className="mb-2 font-playfair text-[14px] font-normal">{title}</H33>
      <div className="flex items-end gap-2">
        <P className="max-w-[170px] text-[8px] leading-3">{description}</P>
        <Icon className=" text-[#FE8501]" />
      </div>
    </div>
  );
};

export default HotelFacilityCard;
