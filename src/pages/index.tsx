import FeaturedList from "@/components/shared/featuredCard/FeaturedList";
import Meta from "@/components/shared/meta/Meta";
import React from "react";

export default function Home() {
  return (
    <>
      <Meta
        title="Welcome to City Hotels"
        description="Home page of City Hotels, Nigeria"
      />
      <div className=" ml-10 mt-4 flex flex-col gap-7">
        <FeaturedList path="/hotellist.png" featured={true} />
        <FeaturedList path="/hotellist.png" />
      </div>
    </>
  );
}
