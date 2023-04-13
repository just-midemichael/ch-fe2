import Meta from "@/components/shared/meta/Meta";
import React from "react";

import Hotel from "./hotel";

export default function Home() {
  // const hotels = new Array(10).fill(mockHotel);
  return (
    <>
      <Meta
        title="Welcome to City Hotels"
        description="Home page of City Hotels, Nigeria"
      />

      <Hotel />
    </>
  );
}
