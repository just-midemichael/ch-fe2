/* eslint-disable tailwindcss/enforces-negative-arbitrary-values */
import { H3, H5, P, P2 } from "@/components/shared/headings/Headings";
import React from "react";
import InvestmentIcon from "@/assets/icons/investment.svg";
import KeywordingIcon from "@/assets/icons/keywording.svg";
import SecurityIcon from "@/assets/icons/security.svg";
import HomeIcon from "@/assets/icons/home.svg";
import HotelRegister from "@/assets/images/HotelRegister.png";
import Button from "@/components/shared/button/Button";
import Img from "@/components/shared/images/Image";

const RegisterHotelComponent = () => {
  return (
    <div className="flex items-center justify-center gap-20 bg-primary50 lg:-mx-[8rem] lg:h-[880px]">
      <div className="relative hidden lg:block">
        <div className="absolute left-[-50px] top-[30px] z-10 flex items-center gap-3 rounded-lg bg-white p-[19px]">
          <div className="flex h-[55px] w-[55px] items-center justify-center rounded-full bg-black">
            <HomeIcon />
          </div>
          <div>
            <P className="text-grey40">Total Hotels</P>
            <P className="text-[18px] leading-7">4,382 +</P>
          </div>
        </div>
        <div className="absolute bottom-[30px] right-[-50px] z-10 flex items-center gap-3 rounded-lg bg-white p-[18px]">
          <div className="flex h-[55px] w-[55px] items-center justify-center rounded-full bg-black">
            <HomeIcon />
          </div>
          <div>
            <P className="text-grey40">Total Hotels</P>
            <P className="text-[18px] leading-7">4,382 +</P>
          </div>
        </div>
        <Img
          path={HotelRegister}
          name="Hotel Register"
          className="z-0 h-[602px] w-[520px] rounded-[10px]"
        />
      </div>
      <div>
        <H3 className="text-center lg:text-left ">Register your Hotel</H3>
        <P2 className="mt-5 w-full text-center text-[13px] font-[300] leading-7 lg:max-w-[309px] lg:text-left">
          As the complexity of buildings to increase, the field of architecture.
        </P2>
        <div className="mt-9 block  gap-4 lg:flex">
          <div className="mx-auto flex h-[58px] w-[58px] items-center justify-center rounded-full  border border-primary400 bg-primary100">
            <InvestmentIcon />
          </div>
          <div className="text-center lg:w-[430px] lg:text-left">
            <H5 className="mb-2">Increased Exposure</H5>
            <P2 className=" text-[12px] font-[300] leading-[22px]">
              By registering on a hotel portal, a hotel can reach a wider
              audience and increase its online exposure. Many travelers use
              hotel portals to search for accommodation options, and by being
              listed on a portal, a hotel can increase its visibility to
              potential guests
            </P2>
          </div>
        </div>
        <div className="mt-8 block  gap-4  lg:flex">
          <div className="mx-auto flex  h-[58px] w-[58px] items-center justify-center rounded-full  border border-primary400 bg-primary100">
            <KeywordingIcon />
          </div>
          <div className="text-center lg:w-[430px] lg:text-left">
            <H5 className="mb-2">Direct Bookings</H5>
            <P2 className="text-[12px] font-[300] leading-[22px]">
              Hotel portals can provide a platform for hotels to accept direct
              bookings from customers. By offering a convenient and easy-to-use
              booking platform, hotels can increase the likelihood of customers
              booking directly with them instead of through a third-party
              booking site.
            </P2>
          </div>
        </div>
        <div className="mt-8  block gap-4 lg:flex">
          <div className="mx-auto flex   h-[58px] w-[58px] items-center justify-center rounded-full  border border-primary400 bg-primary100">
            <SecurityIcon />
          </div>
          <div className="text-center lg:w-[430px] lg:text-left ">
            <H5 className="mb-2 text-[14px]">Analytics and Insights</H5>
            <P2 className="text-[12px] font-[300] leading-[22px]">
              Hotel portals can provide hotels with valuable analytics and
              insights into their online performance. By tracking metrics such
              as conversion rates, click-through rates, and customer
              demographics, hotels can better understand their target audience
              and optimize their marketing strategies accordingly
            </P2>
          </div>
        </div>
        <div className="mt-9 gap-2 text-center">
          <Button
            color="primary"
            size="lg"
            className="w-[228px] rounded-[4px] text-[15px]"
          >
            Register Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RegisterHotelComponent;
