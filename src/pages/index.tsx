import Meta from "@/components/shared/meta/Meta";
import RoomCard from "@/components/shared/roomCard/Room";
import { hotel, room } from "@/utils/constants";
import HotelListItem from "@/components/shared/hotelItemCard/HotelListItem";
import HotelGridItem from "@/components/shared/hotelItemCard/HotelGridItem";
import React from "react";

export default function Home() {
  return (
    <>
      <Meta
        title="Welcome to City Hotels"
        description="Home page of City Hotels, Nigeria"
      />

      <div className="mx-7 mt-7 flex flex-col gap-4">
        <RoomCard room={room} inverted />
        <RoomCard room={room} />
      </div>
      <div className=" ml-10 mt-4 flex flex-col gap-7">
        <HotelListItem hotel={hotel} featured={true} />
        <HotelListItem hotel={hotel} />
        <HotelGridItem hotel={hotel} />
      </div>
    </>
  );
}
