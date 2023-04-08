import React from "react";
import RoomBanner from "@/components/shared/banner/RoomBanner";
import Carousel from "@/components/shared/carousel/Carousel";
import BookingForm from "@/components/shared/bookingForm/BookingForm";
import { H3, P, P2 } from "@/components/shared/headings/Headings";
import type MainProps from "@/layout/main/Main.props";
import type { FC } from "react";
import { FaParking } from "react-icons/fa";

import WifiIcon from "@/assets/icons/wifi.svg";
import ManIcon from "@/assets/icons/man.svg";
import TvMonitorIcon from "@/assets/icons/tv-monitor.svg";
import HairdryerIcon from "@/assets/icons/hairdryer.svg";
import MeasureIcon from "@/assets/icons/measure.svg";
import BedIcon from "@/assets/icons/bed.svg";
import BathtubIcon from "@/assets/icons/bathtub.svg";
import KeyIcon from "@/assets/icons/key.svg";
import ParkingIcon from "@/assets/icons/parking.svg";
import AirConditionerIcon from "@/assets/icons/air-conditioner.svg";
import DaughterIcon from "@/assets/icons/daughter.svg";
import CoffeeMachineIcon from "@/assets/icons/coffee-machine.svg";
import TissueBoxIcon from "@/assets/icons/tissue-box.svg";

import HorizontalScroll from "@/components/shared/horizontalScroll/HorizontalScroll";
import Hotel from "@/components/shared/hotelCard/Hotel";
import { mockHotel } from "@/utils/constants";
import Main from "@/layout/main/Main";
import Navbar from "@/components/shared/navbar/Navbar";
import FooterAds from "@/components/shared/footerAds/FooterAds";

const HotelRoomPage: FC<MainProps> = () => {
  const medias = ["/Banner.png", "/hotel.png", "/featured.png", "/city.png"];

  return (
    <>
      <Navbar defaultTransparent />
      <RoomBanner path="/roomPageBanner.png" />
      <Main>
        <div className="app__container">
          <div className="mt-20 flex items-start gap-8">
            <Carousel medias={medias} autoSlide />
            <div className="hidden lg:block ">
              <BookingForm />
            </div>
          </div>

          <div className="mt-20 max-w-[700px]">
            <H3 className="mb-5">Overview</H3>
            <P className="leading-[33px]">
              Our Vip Room offers a stunning view of the white sand beach. This
              room is designed and decorated with modern style and equipped with
              the most luxurious facilites. Little luxuries include free Wi-Fi,
              deluxe bath amenities and a 4K technology flat-screen television
              with cable channels.
            </P>

            <div className="mb-3 mt-7 grid grid-cols-3 gap-3">
              <div className="flex items-center gap-2">
                <ManIcon className="text-[25px] text-[#FE8501]" />
                <P2 className="md:text-[14px]">2 Adults</P2>
              </div>

              <div className="flex items-center gap-2">
                <DaughterIcon className="text-[25px] text-[#FE8501]" />
                <P2 className="md:text-[14px]">2 Children</P2>
              </div>

              <div className="flex items-center gap-2">
                <MeasureIcon className="text-[25px] text-[#FE8501]" />
                <P2 className="md:text-[14px]">1 Bedroom</P2>
              </div>

              <div className="flex items-center gap-2">
                <BedIcon className="text-[25px] text-[#FE8501]" />
                <P2 className="md:text-[14px]">2 Beds</P2>
              </div>

              <div className="flex items-center gap-2">
                <BathtubIcon className="text-[25px] text-[#FE8501]" />
                <P2 className="md:text-[14px]"> Bath</P2>
              </div>

              <div className="flex items-center gap-2">
                <ParkingIcon className="text-[25px] text-[#FE8501]" />
                <P2 className="md:text-[14px]">Car Packing</P2>
              </div>
            </div>
          </div>

          <div className="mt-12 max-w-[700px]">
            <H3 className="mb-5">Free Amenities</H3>

            <div className="mb-3 mt-7 grid grid-cols-4 gap-3 gap-x-0">
              <div className="flex items-center gap-2">
                <AirConditionerIcon className="text-[25px] text-[#FE8501]" />
                <P2 className="md:text-[14px]">Air Conditioner</P2>
              </div>

              <div className="flex items-center gap-2">
                <TvMonitorIcon className="text-[25px] text-[#FE8501]" />
                <P2 className="md:text-[14px]">Big TV</P2>
              </div>

              <div className="flex items-center gap-2">
                <WifiIcon className="text-[25px] text-[#FE8501]" />
                <P2 className="md:text-[14px]">Wifi</P2>
              </div>

              <div className="flex items-center gap-2">
                <KeyIcon className="text-[25px] text-[#FE8501]" />
                <P2 className="md:text-[14px]">Door Key</P2>
              </div>

              <div className="flex items-center gap-2">
                <CoffeeMachineIcon className="text-[25px] text-[#FE8501]" />
                <P2 className="md:text-[14px]">Coffe Maker</P2>
              </div>

              <div className="flex items-center gap-2">
                <TissueBoxIcon className="text-[25px] text-[#FE8501]" />
                <P2 className="md:text-[14px]">Tissue Box</P2>
              </div>

              <div className="flex items-center gap-2">
                <HairdryerIcon className="text-[25px] text-[#FE8501]" />
                <P2 className="md:text-[14px]">Hair Dryer</P2>
              </div>

              <div className="flex items-center gap-2">
                <FaParking className="text-[25px] text-[#FE8501]" />
                <P2 className="md:text-[14px]">Free Parking</P2>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[70px] w-full bg-[#FFF9F6]  py-6">
          <div className="app__container ">
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
        </div>
        <FooterAds />
      </Main>
    </>
  );
};

export default HotelRoomPage;
