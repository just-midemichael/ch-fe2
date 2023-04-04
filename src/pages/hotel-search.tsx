import SearchInput from "@/components/shared/searchInput/SearchInput";
import Main from "@/layout/main/Main";
import Select from "react-select";

import { H3 } from "@/components/shared/headings/Headings";
import Button from "@/components/shared/button/Button";
import SearchComponent from "@/components/shared/searchComponent/SearchComponent";
import { useMemo, useState } from "react";
import { mockHotel } from "@/utils/constants";
import type { IHotel } from "@/services/hotel/payload";
import HotelGridItem from "@/components/shared/hotelItemCard/HotelGridItem";
import HotelListItem from "@/components/shared/hotelItemCard/HotelListItem";

export default function HotelList() {
  const [listType, setListType] = useState<"grid" | "list">("grid");

  const hotels: IHotel[] = new Array(10).fill(mockHotel);

  const HotelItem = useMemo(
    () => (listType === "grid" ? HotelGridItem : HotelListItem),
    [listType]
  );

  const options = [
    {
      label: "Newest",
      value: "newest"
    },
    {
      label: "Oldest",
      value: "oldest"
    }
  ];

  return (
    <>
      <Main>
        <H3>Hotels Near Me</H3>
        <div className="mb-10 mt-8 flex">
          <SearchInput
            placeholder="Search ..."
            className="w-full grow outline-none"
          />

          <Button
            color="primary"
            className="ml-[-20px] w-[164px] rounded-l-none px-10 "
            size="md"
            style={{ borderRadius: "0 6px 6px 0" }}
          >
            Search
          </Button>
        </div>

        <div className=" flex gap-10">
          <div>
            <SearchComponent />
          </div>
          <div className="grow">
            <div className="flex items-center justify-between">
              <h1 className="">Showing 1-10 of 13 results</h1>
              <div className="flex items-center justify-between gap-5">
                <span className=" whitespace-nowrap ">Sort By</span>
                <Select
                  classNamePrefix="select_outline"
                  className="h-[29px] w-[105px] bg-transparent focus:outline-none"
                  options={options}
                  placeholder="Latest"
                />
                <span className="h-5 border-l border-gray-300"></span>
                <Button onClick={() => setListType("grid")} color="text">
                  Grid
                </Button>

                <span className="h-5 border-l border-gray-300"></span>
                <Button onClick={() => setListType("list")} color="text">
                  List
                </Button>
              </div>
            </div>
            <div
              className={` ${
                listType === "grid"
                  ? "grid grid-flow-col grid-rows-6  gap-6"
                  : "flex flex-col gap-4"
              }`}
            >
              {hotels.map((hotel, index) => (
                <div className="mt-8" key={`hotel-${hotel.Id}-${index}`}>
                  <HotelItem hotel={hotel} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Main>
    </>
  );
}
