import { useState } from "react";
import type { ChangeEvent } from "react";
import Button from "@/components/shared/button/Button";
import Checkbox from "@/components/shared/checkbox/Checkbox";
import Dropdown from "@/components/shared/dropdown/Dropdown";
import Hotel from "@/components/shared/hotelCard/Hotel";
import SearchInput from "@/components/shared/searchInput/SearchInput";
import Main from "@/layout/main/Main";
import { hotelDatas } from "@/utils/constants";
import { RxReset } from "react-icons/rx";
import { SlMenu } from "react-icons/sl";

export default function HotelList() {
  const locationOptions = [
    {
      label: "All cities",
      value: "cities"
    },
    {
      label: "Hotel",
      value: "hotel"
    },
    {
      label: "Motel",
      value: "motel"
    }
  ];
  const options = [
    {
      label: "Newest",
      value: "newest"
    },
    {
      label: "Oldest",
      value: "oldest"
    },
    {
      label: "Latest",
      value: "latest"
    }
  ];

  const [dropdownValue, setDropdownValue] = useState("");
  const handleDropdownChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setDropdownValue(e.target.value);
  };

  const [checkboxes, setCheckboxes] = useState({
    Hotel: false,
    Houses: false,
    Motel: false,
    ShortletApartments: false
  });

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckboxes((prevState) => {
      return { ...prevState, [e.target.name]: e.target.checked };
    });
  };

  return (
    <>
      <Main>
        <h1 className="ml-[140px] text-[24px] font-semibold">Hotels Near Me</h1>
        <div className="flex flex-col items-center justify-center">
          <div className="relative ml-[-20px] mt-6 flex items-center">
            <SearchInput
              placeholder="Search ..."
              className="w-[1000px] flex-1 pr-12 outline-none"
            />

            <Button
              color="primary"
              className="top-3.7 absolute right-[8px] "
              size="md"
            >
              Search
            </Button>
          </div>

          <div>
            <div className="ml-8 mt-12 w-80 rounded-2xl border border-gray-300 p-8">
              <h1 className="py-3 text-[16px] font-bold">Location</h1>
              <Dropdown
                options={locationOptions}
                onChange={handleDropdownChange}
                dropdownValue={dropdownValue}
              />
              <h1 className="py-3 text-[16px] font-bold">Property Type</h1>
              <Checkbox
                label="Hotel"
                value={checkboxes.Hotel}
                onChange={handleCheckboxChange}
              />
              <Checkbox
                label="Houses"
                value={checkboxes.Houses}
                onChange={handleCheckboxChange}
              />
              <Checkbox
                label="Motel"
                value={checkboxes.Motel}
                onChange={handleCheckboxChange}
              />
              <Checkbox
                label="Shortlet Apartments"
                value={checkboxes.ShortletApartments}
                onChange={handleCheckboxChange}
              />
              <h1 className="py-3 text-[16px] font-bold">Price Range</h1>
              <div className="flex items-center space-x-4">
                <SlMenu className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-700 " />
                <input type="range" className="w-full" />
                <SlMenu className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-700" />
              </div>

              <form className="py-3">
                <input
                  className="h-12 w-28 rounded-lg border border-gray-300 pl-2 text-sm placeholder:text-gray-600 focus:outline-none"
                  placeholder="$ min."
                  type="text"
                ></input>
                -
                <input
                  className="h-12 w-28 rounded-lg border border-gray-300 pl-2 text-sm placeholder:text-gray-600 focus:outline-none"
                  placeholder="$ max."
                  type="text"
                ></input>
                <div>
                  <h1 className="py-3 text-[16px] font-bold">Bedrooms</h1>
                  <input
                    className="h-12 w-12 rounded-l-lg border border-gray-300 pl-2 text-sm outline-none placeholder:text-gray-600"
                    placeholder="Any"
                    type="text"
                  ></input>
                  <input
                    className="h-12 w-12 border border-gray-300 pl-2 text-sm outline-none placeholder:text-gray-600"
                    placeholder="1+"
                    type="text"
                  ></input>
                  <input
                    className="h-12 w-12 border border-gray-300 pl-2 text-sm outline-none placeholder:text-gray-600"
                    placeholder="2+"
                    type="text"
                  ></input>
                  <input
                    className="h-12 w-12 border border-gray-300 pl-2 text-sm outline-none placeholder:text-gray-600"
                    placeholder="3+"
                    type="text"
                  ></input>
                  <input
                    className="h-12 w-12 rounded-r-lg border border-gray-300 pl-2 text-sm outline-none placeholder:text-gray-600"
                    placeholder="4+"
                    type="text"
                  ></input>
                </div>
                <p className="flex items-center py-3">
                  <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-700">
                    <RxReset />
                  </span>
                  <span>reset all filters</span>
                </p>
              </form>
            </div>

            <div className="ml-80 mt-[-40rem] grid grid-cols-2 gap-14 overflow-x-auto pb-5 pl-36">
              <h1 className="mt-[2rem]">Showing 1-10 of 13 results</h1>
              <div className="mt-[1rem] flex items-center justify-between gap-4">
                <span className=" whitespace-nowrap ">Sort By</span>
                <Dropdown
                  options={options}
                  onChange={handleDropdownChange}
                  dropdownValue={dropdownValue}
                />
                <span className="h-5 border-l border-gray-300"></span>
                <h1>Grid</h1>

                <span className="h-5 border-l border-gray-300"></span>
                <h1>List</h1>
              </div>

              {hotelDatas.map((hotel, index) => (
                <Hotel
                  key={index}
                  path={hotel.path}
                  featured={hotel.featured}
                  info={hotel.info}
                  favourite={hotel.favourite}
                />
              ))}
            </div>
          </div>
        </div>
      </Main>
    </>
  );
}
