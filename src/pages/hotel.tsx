import React, { useState } from "react";
import Main from "@/layout/main/Main";
import { H3, H4, P } from "@/components/shared/headings/Headings";
import HorizontalScroll from "@/components/shared/horizontalScroll/HorizontalScroll";

import WifiIcon from "@/assets/icons/wifi.svg";
import LocationIcon from "@/assets/icons/location.svg";
import SwimmingPoolIcon from "@/assets/icons/swimming-pool.svg";
import CoffeIcon from "@/assets/icons/coffee.svg";
import ParkingIcon from "@/assets/icons/parking2.svg";
import RoomServiceIcon from "@/assets/icons/room.svg";
import { room } from "@/utils/constants";
import RoomCard from "@/components/shared/roomCard/Room";
import Map from "@/components/shared/map/Map";
import Navbar from "@/components/shared/navbar/Navbar";
import HotelFacilityCard from "@/components/hotel/hotelFacilityCard/HotelFacilityCard";
// import Img from "@/components/shared/images/Image";
import HotelImageCard from "@/components/hotel/hotelImageCard/HotelImageCard";
import Modal from "@/components/shared/modal/Modal";
import Carousel from "@/components/shared/carousel/Carousel";
import Profile from "../components/shared/hotelProfile/HotelProfile";
// import { IHotel } from "@/services/hotel/payload";

export const HotelPage: React.FC = () => {
  const [showImagesModal, setShowImagesModal] = useState(false);
  const medias = ["/Banner.png", "/hotel.png", "/featured.png", "/city.png"];
  // const hotel: IHotel = mockHotel;
  return (
    <div className="lg:overflow-x-hidden">
      <Navbar theme="light" />

      <Main>
        <div className="app__container relative mt-9 flex h-[230px] w-full  justify-between md:bg-[#FFF9F6] md:py-16 lg:h-[300px]">
          {/* {hotel.Banner && (
            <Img
              className="absolute h-full w-full"
              path={hotel.Banner.Path}
              name={`${hotel.Name} Banner`}
            />
          )} */}
          <Profile />
          <div>
            <Map />
          </div>
        </div>
        <div className="app__container ">
          <div className="mb-9 md:w-[540px]">
            <H4 className="mt-5 font-semibold">About Grand and Royale Hotel</H4>
            <hr className="md:border-bottom my-3 md:border-[#C2C2C2] " />
            <P className="leading-[34px]">
              The Grand Royale Hotel is a luxurious five-star hotel located in
              the heart of the city. With its stunning architecture and
              exquisite interior design, the hotel is a favorite among guests
              who seek comfort, elegance, and top-notch service.
            </P>

            <P className="mt-5 hidden leading-[34px] md:block">
              The hotel features 250 well-appointed rooms and suites, each
              designed to offer a luxurious stay experience. All rooms are
              equipped with modern amenities such as flat-screen TVs, high-speed
              internet, and luxurious bedding.
            </P>
            <P className="mt-5 text-[#FE8501] underline">Show more</P>
          </div>

          <div className="flex flex-col gap-9 md:mt-[70px] md:w-[150vw] lg:w-auto">
            <div>
              <HorizontalScroll title="Hotel Facilities">
                <div className="flex gap-4">
                  <HotelFacilityCard
                    title="Pick Up & Drop"
                    description="We’ll pick up from airport while you comfy on your ride,
                      mus nellentesque habitant."
                    Icon={LocationIcon}
                  />

                  <HotelFacilityCard
                    title="Parking Space"
                    description="We’ll pick up from airport while you comfy on your ride,
                      mus nellentesque habitant."
                    Icon={RoomServiceIcon}
                  />
                  <HotelFacilityCard
                    title="Room Service"
                    description="We’ll pick up from airport while you comfy on your ride,
                      mus nellentesque habitant."
                    Icon={ParkingIcon}
                  />
                  <HotelFacilityCard
                    title="Swimming Pool"
                    description="We’ll pick up from airport while you comfy on your ride,
                      mus nellentesque habitant."
                    Icon={SwimmingPoolIcon}
                  />
                  <HotelFacilityCard
                    title="Breakfast"
                    description="We’ll pick up from airport while you comfy on your ride,
                      mus nellentesque habitant."
                    Icon={CoffeIcon}
                  />
                  <HotelFacilityCard
                    title="Fibre Internet"
                    description="We’ll pick up from airport while you comfy on your ride,
                      mus nellentesque habitant."
                    Icon={WifiIcon}
                  />
                </div>
              </HorizontalScroll>
              <P className="mt-5 text-[#FE8501] underline">See all</P>
            </div>

            <HorizontalScroll title="Hotel Gallery">
              <div className="flex gap-3">
                <HotelImageCard
                  path="/hotel.png"
                  onClick={() => setShowImagesModal(true)}
                />
                <HotelImageCard
                  path="/hotel.png"
                  onClick={() => setShowImagesModal(true)}
                />
                <HotelImageCard
                  path="/hotel.png"
                  onClick={() => setShowImagesModal(true)}
                />
                <HotelImageCard
                  path="/hotel.png"
                  onClick={() => setShowImagesModal(true)}
                />
                <HotelImageCard
                  path="/hotel.png"
                  onClick={() => setShowImagesModal(true)}
                />
                <HotelImageCard
                  path="/hotel.png"
                  onClick={() => setShowImagesModal(true)}
                />
                <HotelImageCard
                  path="/hotel.png"
                  onClick={() => setShowImagesModal(true)}
                />
              </div>
            </HorizontalScroll>
          </div>

          <div className="mt-14">
            <H3 className="mb-7">Available Room</H3>
            <div className="flex flex-col gap-16">
              <RoomCard room={room} inverted />
              <RoomCard room={room} />
              <RoomCard room={room} inverted />
              <RoomCard room={room} />
              <RoomCard room={room} inverted />
            </div>
          </div>
        </div>
        <Modal
          openModal={showImagesModal}
          setOpenModal={setShowImagesModal}
          variant="plain"
        >
          <section>
            <div className="">
              <Carousel medias={medias} autoSlide />
            </div>
          </section>
        </Modal>
      </Main>
    </div>
  );
};

export default HotelPage;
