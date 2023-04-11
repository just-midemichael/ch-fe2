import Meta from "@/components/shared/meta/Meta";
import React from "react";
import Banner from "@/components/shared/banner/Banner";
import Navbar from "@/components/shared/navbar/Navbar";
import Main from "@/layout/main/Main";
import { H3, P } from "@/components/shared/headings/Headings";
import City from "@/components/shared/cityCard/City";
import HorizontalScroll from "@/components/shared/horizontalScroll/HorizontalScroll";
import HotelGridItem from "@/components/shared/hotelItemCard/HotelGridItem";
import { mockHotel } from "@/utils/constants";
import RegisterHotelComponent from "@/components/home/register-hotel/RegisterHotel";

export default function Home() {
  const hotels = new Array(10).fill(mockHotel);
  return (
    <>
      <Meta
        title="Welcome to City Hotels"
        description="Home page of City Hotels, Nigeria"
      />
      <Navbar defaultTransparent />
      <Banner path="/roomPageBanner.png" />
      <Main>
        <div className="app__container">
          <H3>Explore Cities</H3>
          <P>Aliquam lacinia diam quis lacus euismod</P>
          <div className="mt-12 grid grid-cols-2 gap-2 md:grid-cols-4">
            <City path="" />
            <City path="" />
            <City path="" />
            <City path="" />
          </div>
          <div className="mt-[100px]">
            <HorizontalScroll
              title="Explore Our Featured Hotels"
              subTitle="Aliquam lacinia diam quis lacus euismod"
              showNavigation
              showPagination
            >
              <div className="flex gap-5">
                {hotels.map((hotel, index) => (
                  <HotelGridItem
                    hotel={hotel}
                    key={hotel.id + index}
                    className="w-[281px]"
                  />
                ))}
              </div>
            </HorizontalScroll>
          </div>
          <div className="mt-[100px]">
            <RegisterHotelComponent />
          </div>
        </div>
      </Main>
    </>
  );
}
