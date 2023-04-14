import React from "react";
import Main from "@/layout/main/Main";
import { H3, H33, H4, P } from "@/components/shared/headings/Headings";
import HorizontalScroll from "@/components/shared/horizontalScroll/HorizontalScroll";
import { GoLocation } from "react-icons/go";
import { RiParkingBoxFill } from "react-icons/ri";
import { MdRoomService, MdOutlineBreakfastDining } from "react-icons/md";
import { FaSwimmingPool } from "react-icons/fa";
import { BiWifi } from "react-icons/bi";
import Hotel from "@/components/shared/hotelCard/Hotel";
import { mockHotel, room } from "@/utils/constants";
import RoomCard from "@/components/shared/roomCard/Room";
import Map from "@/components/shared/map/Map";
import Navbar from "@/components/shared/navbar/Navbar";
import Profile from "../components/shared/hotelProfile/HotelProfile";

export default function hotelPage() {
  return (
    <div className="lg:overflow-x-hidden">
      <Navbar theme="light" />
      <div className="mt-9 px-4 md:px-0">
        <div className="relative md:w-[150vw] md:bg-[#FFF9F6] md:px-14 md:py-16">
          <Profile />

          <Map />
        </div>

        <div className="mb-9 md:w-[540px] md:pl-14">
          <H4 className="my-3 font-black">About Grand and Royale Hotel</H4>
          <hr className="md:border md:border-[#C2C2C2]" />
          <P className="leading-[34px]">
            The Grand Royale Hotel is a luxurious five-star hotel located in the
            heart of the city. With its stunning architecture and exquisite
            interior design, the hotel is a favorite among guests who seek
            comfort, elegance, and top-notch service.
          </P>

          <P className="mt-5 hidden leading-[34px] md:block">
            The hotel features 250 well-appointed rooms and suites, each
            designed to offer a luxurious stay experience. All rooms are
            equipped with modern amenities such as flat-screen TVs, high-speed
            internet, and luxurious bedding.
          </P>
          <P className="text-[#FE8501] underline">Show more</P>
        </div>
      </div>

      <div className="flex flex-col gap-9 pl-8 md:mt-[200px] md:w-[150vw] lg:w-auto">
        <HorizontalScroll title="Hotel Facilities" showPagination>
          <div className="flex gap-7">
            <div className="w-[280px] border border-[#C2C2C2] p-4">
              <H33 className="mb-2 font-playfair text-[20px]">
                Pick Up & Drop
              </H33>
              <div className="flex items-end gap-2">
                <P className="max-w-[180px] text-[12px]">
                  We’ll pick up from airport while you comfy on your ride, mus
                  nellentesque habitant.
                </P>
                <GoLocation className="text-[40px] text-[#FE8501]" />
              </div>
            </div>

            <div className="w-[280px] border border-[#C2C2C2] p-4">
              <H33 className="mb-2 font-playfair text-[20px]">
                Parking Space
              </H33>
              <div className="flex items-end gap-2">
                <P className="max-w-[180px] text-[12px]">
                  We’ll pick up from airport while you comfy on your ride, mus
                  nellentesque habitant.
                </P>
                <RiParkingBoxFill className="text-[40px] text-[#FE8501]" />
              </div>
            </div>

            <div className="w-[280px] border border-[#C2C2C2] p-4">
              <H33 className="mb-2 font-playfair text-[20px]">Room Service</H33>
              <div className="flex items-end gap-2">
                <P className="max-w-[180px] text-[12px]">
                  We’ll pick up from airport while you comfy on your ride, mus
                  nellentesque habitant.
                </P>
                <MdRoomService className="text-[40px] text-[#FE8501]" />
              </div>
            </div>

            <div className="w-[280px] border border-[#C2C2C2] p-4">
              <H33 className="mb-2 font-playfair text-[20px]">
                Swimming Pool
              </H33>
              <div className="flex items-end gap-2">
                <P className="max-w-[180px] text-[12px]">
                  We’ll pick up from airport while you comfy on your ride, mus
                  nellentesque habitant.
                </P>
                <FaSwimmingPool className="text-[40px] text-[#FE8501]" />
              </div>
            </div>

            <div className="w-[280px] border border-[#C2C2C2] p-4">
              <H33 className="mb-2 font-playfair text-[20px]">
                Fibre Internet
              </H33>
              <div className="flex items-end gap-2">
                <P className="max-w-[180px] text-[12px]">
                  We’ll pick up from airport while you comfy on your ride, mus
                  nellentesque habitant.
                </P>
                <BiWifi className="text-[40px] text-[#FE8501]" />
              </div>
            </div>

            <div className="w-[280px] border border-[#C2C2C2] p-4">
              <H33 className="mb-2 font-playfair text-[20px]">Breakfast</H33>
              <div className="flex items-end gap-2">
                <P className="max-w-[180px] text-[12px]">
                  We’ll pick up from airport while you comfy on your ride, mus
                  nellentesque habitant.
                </P>
                <MdOutlineBreakfastDining className="text-[40px] text-[#FE8501]" />
              </div>
            </div>
          </div>
        </HorizontalScroll>

        <HorizontalScroll title="Hotel Gallery">
          <div className="flex gap-3">
            <Hotel hotel={mockHotel} path="/hotel.png" />
            <Hotel hotel={mockHotel} path="/hotel.png" />
            <Hotel hotel={mockHotel} path="/hotel.png" />
            <Hotel hotel={mockHotel} path="/hotel.png" />
            <Hotel hotel={mockHotel} path="/hotel.png" />
            <Hotel hotel={mockHotel} path="/hotel.png" />
            <Hotel hotel={mockHotel} path="/hotel.png" />
            <Hotel hotel={mockHotel} path="/hotel.png" />
            <Hotel hotel={mockHotel} path="/hotel.png" />
            <Hotel hotel={mockHotel} path="/hotel.png" />
            <Hotel hotel={mockHotel} path="/hotel.png" />
            <Hotel hotel={mockHotel} path="/hotel.png" />
            <Hotel hotel={mockHotel} path="/hotel.png" />
            <Hotel hotel={mockHotel} path="/hotel.png" />
          </div>
        </HorizontalScroll>
      </div>

      <div className="mt-9 px-7">
        <H3 className="mb-5">Available Room</H3>
        <div className="mb-9 flex flex-col gap-9">
          <RoomCard room={room} inverted />
          <RoomCard room={room} />
          <RoomCard room={room} inverted />
          <RoomCard room={room} />
          <RoomCard room={room} inverted />
        </div>
      </div>
      <Main></Main>
    </div>
  );
}
