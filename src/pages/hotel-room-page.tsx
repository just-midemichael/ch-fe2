import React from "react";
import RoomBanner from "@/components/shared/banner/RoomBanner";
import Carousel from "@/components/shared/carousel/Carousel";
import BookingForm from "@/components/shared/bookingForm/BookingForm";
import { H3, P, P2 } from "@/components/shared/headings/Headings";
import Footer from "@/components/shared/footer/Footer";
import type MainProps from "@/layout/main/Main.props";
import type { FC } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { BiChild, BiKey } from "react-icons/bi";
import {
  MdOutlineBedroomParent,
  MdOutlineBedroomChild,
  MdCoffeeMaker
} from "react-icons/md";
import { FaBath, FaBoxTissue, FaParking } from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";
import { SlScreenDesktop } from "react-icons/sl";
import { GiHairStrands, GiHomeGarage } from "react-icons/gi";
import HorizontalScroll from "@/components/shared/horizontalScroll/HorizontalScroll";
import Hotel from "@/components/shared/hotelCard/Hotel";
import { mockHotel } from "@/utils/constants";
import { AiOutlineWifi } from "react-icons/ai";

const HotelRoomPage: FC<MainProps> = ({ subscription }) => {
  const medias = ["/Banner.png", "/hotel.png", "/featured.png", "/city.png"];

  return (
    <div>
      <RoomBanner path="/roomPageBanner.png" />
      <div className="px-[4rem]">
        <div className="mt-20 flex items-start gap-8">
          <Carousel medias={medias} />
          <BookingForm />
        </div>

        <div className="mt-20 max-w-[700px]">
          <H3 className="mb-5">OverView</H3>
          <P className="leading-[33px]">
            Our Vip Room offers a stunning view of the white sand beach. This
            room is designed and decorated with modern style and equipped with
            the most luxurious facilites. Little luxuries include free Wi-Fi,
            deluxe bath amenities and a 4K technology flat-screen television
            with cable channels.
          </P>

          <div className="mb-3 mt-7 grid grid-cols-3 gap-3">
            <div className="flex items-center gap-2">
              <BsFillPersonFill className="text-[25px] text-[#FE8501]" />
              <P2 className="md:text-[14px]">2 Adults</P2>
            </div>

            <div className="flex items-center gap-2">
              <BiChild className="text-[25px] text-[#FE8501]" />
              <P2 className="md:text-[14px]">2 Children</P2>
            </div>

            <div className="flex items-center gap-2">
              <MdOutlineBedroomChild className="text-[25px] text-[#FE8501]" />
              <P2 className="md:text-[14px]">1 Bedroom</P2>
            </div>

            <div className="flex items-center gap-2">
              <MdOutlineBedroomParent className="text-[25px] text-[#FE8501]" />
              <P2 className="md:text-[14px]">2 Beds</P2>
            </div>

            <div className="flex items-center gap-2">
              <FaBath className="text-[25px] text-[#FE8501]" />
              <P2 className="md:text-[14px]"> Bath</P2>
            </div>

            <div className="flex items-center gap-2">
              <GiHomeGarage className="text-[25px] text-[#FE8501]" />
              <P2 className="md:text-[14px]">Car Packing</P2>
            </div>
          </div>
        </div>

        <div className="mt-20 max-w-[700px]">
          <H3 className="mb-5">Free Amenities</H3>

          <div className="mb-3 mt-7 grid grid-cols-4 gap-3 gap-x-0">
            <div className="flex items-center gap-2">
              <TbAirConditioning className="text-[25px] text-[#FE8501]" />
              <P2 className="md:text-[14px]">Air Conditioner</P2>
            </div>

            <div className="flex items-center gap-2">
              <SlScreenDesktop className="text-[25px] text-[#FE8501]" />
              <P2 className="md:text-[14px]">Big TV</P2>
            </div>

            <div className="flex items-center gap-2">
              <AiOutlineWifi className="text-[25px] text-[#FE8501]" />
              <P2 className="md:text-[14px]">Wifi</P2>
            </div>

            <div className="flex items-center gap-2">
              <BiKey className="text-[25px] text-[#FE8501]" />
              <P2 className="md:text-[14px]">Door Key</P2>
            </div>

            <div className="flex items-center gap-2">
              <MdCoffeeMaker className="text-[25px] text-[#FE8501]" />
              <P2 className="md:text-[14px]">Coffe Maker</P2>
            </div>

            <div className="flex items-center gap-2">
              <FaBoxTissue className="text-[25px] text-[#FE8501]" />
              <P2 className="md:text-[14px]">Tissue Box</P2>
            </div>

            <div className="flex items-center gap-2">
              <GiHairStrands className="text-[25px] text-[#FE8501]" />
              <P2 className="md:text-[14px]">Hair Dryer</P2>
            </div>

            <div className="flex items-center gap-2">
              <FaParking className="text-[25px] text-[#FE8501]" />
              <P2 className="md:text-[14px]">Free Parking</P2>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[70px] bg-[#FFF9F6] px-9 py-6">
        <HorizontalScroll
          label="The Best for you"
          title="Similar Hotel"
          showPagination
        >
          <div className="flex gap-5">
            <Hotel path="/hotel.png" hotel={mockHotel} />
            <Hotel path="/hotel.png" hotel={mockHotel} />
            <Hotel path="/hotel.png" hotel={mockHotel} />
            <Hotel path="/hotel.png" hotel={mockHotel} />
            <Hotel path="/hotel.png" hotel={mockHotel} />
            <Hotel path="/hotel.png" hotel={mockHotel} />
            <Hotel path="/hotel.png" hotel={mockHotel} />
            <Hotel path="/hotel.png" hotel={mockHotel} />
            <Hotel path="/hotel.png" hotel={mockHotel} />
          </div>
        </HorizontalScroll>
      </div>

      <div className="my-20 flex justify-center">
        <div className="h-[178px] w-[648px] bg-[#F5F5F4]"></div>
      </div>
      <Footer subscription={subscription} />
    </div>
  );
};

export default HotelRoomPage;
