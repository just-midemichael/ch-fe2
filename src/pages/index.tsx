import Meta from "@/components/shared/meta/Meta";
import Main from "@/layout/main/Main";
import HorizontalScroll from "@/components/shared/horizontalScroll/HorizontalScroll";
import RegisterHotelComponent from "@/components/home/register-hotel/RegisterHotel";
import Hotel from "@/components/shared/hotelCard/Hotel";
import React from "react";
import { hotelData } from "@/utils/constants";

export default function Home() {
  return (
    <>
      <Meta
        title="Welcome to City Hotels"
        description="Home page of City Hotels, Nigeria"
      />

      <Main>
        <div className="my-12">
          <HorizontalScroll
            title="Explore Our Featured Hotels"
            subTitle="Aliquam lacinia diam quis lacus euismod"
            showPagination
          >
            {hotelData.map((hotel, index) => (
              <React.Fragment key={index}>
                <Hotel
                  className="mx-3"
                  featured={hotel.featured}
                  info={hotel.info}
                  favourite={hotel.favourite}
                  path={hotel.path}
                />
              </React.Fragment>
            ))}
          </HorizontalScroll>
        </div>
        <RegisterHotelComponent />
      </Main>
    </>
  );
}
