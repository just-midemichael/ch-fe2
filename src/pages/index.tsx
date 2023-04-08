import Meta from "@/components/shared/meta/Meta";
import React from "react";
import HotelRoomPage from "./room";

export default function Home() {
  return (
    <>
      <Meta
        title="Welcome to City Hotels"
        description="Home page of City Hotels, Nigeria"
      />
      <HotelRoomPage />
    </>
  );
}
