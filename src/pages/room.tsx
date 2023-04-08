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
          <div className="flex items-start gap-8 lg:mt-20">
            <Carousel medias={medias} autoSlide />
            <div className="hidden lg:block ">
              <BookingForm />
            </div>
          </div>

          <div className="mt-10 max-w-[700px] lg:mt-20">
            <H3 className="mb-5">Overview</H3>
            <P className="leading-[33px]">
              Our Vip Room offers a stunning view of the white sand beach. This
              room is designed and decorated with modern style and equipped with
              the most luxurious facilites. Little luxuries include free Wi-Fi,
              deluxe bath amenities and a 4K technology flat-screen television
              with cable channels.
            </P>

            <div className="mb-3 mt-7 grid grid-cols-3 gap-3">
              <div className="items-center gap-2 lg:flex">
                <ManIcon className="mx-auto text-[25px] text-[#FE8501] lg:mx-0" />
                <P2 className="mb-5 mt-2 text-center md:text-[14px]">
                  2 Adults
                </P2>
              </div>

              <div className="items-center gap-2 lg:flex">
                <DaughterIcon className="mx-auto  text-[25px] text-[#FE8501]  lg:mx-0" />
                <P2 className="mb-5 mt-2 text-center md:text-[14px] lg:my-0">
                  2 Children
                </P2>
              </div>

              <div className="items-center gap-2 lg:flex">
                <MeasureIcon className="mx-auto  text-[25px] text-[#FE8501]  lg:mx-0" />
                <P2 className="mb-5 mt-2 text-center md:text-[14px] lg:my-0">
                  1 Bedroom
                </P2>
              </div>

              <div className="items-center gap-2 lg:flex">
                <BedIcon className="mx-auto  text-[25px] text-[#FE8501]  lg:mx-0" />
                <P2 className="mb-5 mt-2 text-center md:text-[14px] lg:my-0">
                  2 Beds
                </P2>
              </div>

              <div className="items-center gap-2 lg:flex">
                <BathtubIcon className="mx-auto  text-[25px] text-[#FE8501]  lg:mx-0" />
                <P2 className="mb-5 mt-2 text-center md:text-[14px] lg:my-0">
                  {" "}
                  Bath
                </P2>
              </div>

              <div className="items-center gap-2 lg:flex">
                <ParkingIcon className="mx-auto  text-[25px] text-[#FE8501]  lg:mx-0" />
                <P2 className="mb-5 mt-2 text-center md:text-[14px] lg:my-0">
                  Car Packing
                </P2>
              </div>
            </div>
          </div>

          <div className="mt-5 max-w-[700px] lg:mt-12">
            <H3 className="mb-5">Free Amenities</H3>

            <div className="mb-3 mt-7 grid grid-cols-3  gap-3 gap-x-0 lg:grid-cols-4">
              <div className="block items-center gap-2 text-center lg:flex">
                <AirConditionerIcon className="mx-auto text-[25px] text-[#FE8501] lg:mx-0" />
                <P2 className="mb-5 mt-2 md:text-[14px] lg:my-0">
                  Air Conditioner
                </P2>
              </div>

              <div className="block items-center gap-2 text-center lg:flex">
                <TvMonitorIcon className="mx-auto text-[25px] text-[#FE8501] lg:mx-0" />
                <P2 className="mb-5 mt-2 md:text-[14px] lg:my-0">Big TV</P2>
              </div>

              <div className="block items-center gap-2 text-center lg:flex">
                <WifiIcon className="mx-auto text-[25px] text-[#FE8501] lg:mx-0" />
                <P2 className="mb-5 mt-2 md:text-[14px] lg:my-0">Wifi</P2>
              </div>

              <div className="block items-center gap-2 text-center lg:flex">
                <KeyIcon className="mx-auto text-[25px] text-[#FE8501] lg:mx-0" />
                <P2 className="mb-5 mt-2 md:text-[14px] lg:my-0">Door Key</P2>
              </div>

              <div className="block items-center gap-2 text-center lg:flex">
                <CoffeeMachineIcon className="mx-auto text-[25px] text-[#FE8501] lg:mx-0" />
                <P2 className="mb-5 mt-2 md:text-[14px] lg:my-0">
                  Coffe Maker
                </P2>
              </div>

              <div className="block items-center gap-2 text-center lg:flex">
                <TissueBoxIcon className="mx-auto text-[25px] text-[#FE8501] lg:mx-0" />
                <P2 className="md:text-[14px mb-5] mt-2 lg:my-0">Tissue Box</P2>
              </div>

              <div className="block items-center gap-2 text-center lg:flex">
                <HairdryerIcon className="mx-auto text-[25px] text-[#FE8501] lg:mx-0" />
                <P2 className="mb-5 mt-2 md:text-[14px] lg:my-0">Hair Dryer</P2>
              </div>

              <div className="block items-center gap-2 text-center lg:flex">
                <FaParking className="mx-auto text-[25px] text-[#FE8501] lg:mx-0" />
                <P2 className="mb-5 mt-2 md:text-[14px] lg:my-0">
                  Free Parking
                </P2>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 w-full bg-[#FFF9F6] py-6  lg:mt-20">
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
