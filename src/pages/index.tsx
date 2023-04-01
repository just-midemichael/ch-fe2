import HotelListItem from "@/components/shared/hotelItemCard/HotelListItem";
import HotelGridItem from "@/components/shared/hotelItemCard/HotelGridItem";
import Meta from "@/components/shared/meta/Meta";
import React from "react";
import { hotel } from "@/utils/constants";

export default function Home() {
  return (
    <>
      <Meta
        title="Welcome to City Hotels"
        description="Home page of City Hotels, Nigeria"
      />
      <div className=" ml-10 mt-4 flex flex-col gap-7">
        <HotelListItem hotel={hotel} featured={true} />
        <HotelListItem hotel={hotel} />
        <HotelGridItem hotel={hotel} />
      </div>
    </>
  );
}
