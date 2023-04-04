import React, { useState } from "react";

import type { ChangeEvent } from "react";
import Checkbox from "@/components/shared/checkbox/Checkbox";
import RxReset from "@/assets/icons/turn-back.svg";
import Select from "react-select";
import { P2 } from "../headings/Headings";
import Button from "../button/Button";

const SearchComponent = () => {
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

  const [checkboxes, setCheckboxes] = useState({
    Hotel: false,
    Houses: false,
    Motel: false,
    ShortletApartments: false
  });

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckboxes((prevState: any) => {
      return { ...prevState, [e.target.name]: e.target.checked };
    });
  };
  return (
    <div>
      {" "}
      <div className="min:w-80 rounded-3xl border border-gray-300 p-[30px]">
        <div>
          <P2 className="mb-4 text-[14px] font-semibold">Location</P2>
          <Select
            classNamePrefix="location__filter"
            className=" w-[290px] bg-transparent focus:outline-none"
            options={locationOptions}
            placeholder="All Cities"
          />
        </div>
        <div className="my-8">
          <P2 className="mb-4 text-[14px] font-semibold">Property Type</P2>
          <Checkbox
            label="Hotel"
            value={checkboxes.Hotel}
            onChange={handleCheckboxChange}
            className="my-4"
          />
          <Checkbox
            label="Houses"
            value={checkboxes.Houses}
            onChange={handleCheckboxChange}
            className="my-4"
          />
          <Checkbox
            label="Motel"
            value={checkboxes.Motel}
            onChange={handleCheckboxChange}
            className="my-4"
          />
          <Checkbox
            label="Shortlet Apartments"
            value={checkboxes.ShortletApartments}
            onChange={handleCheckboxChange}
            className="my-4"
          />
        </div>

        <div className="my-8">
          <P2 className="mb-4 text-[14px] font-semibold">Price Range</P2>
          {/* <div className="my-4 flex items-center">
            <SlMenu className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-700 " />
            <input type="range" className="w-full" />
            <SlMenu className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-700" />
          </div> */}
          <div className="flex items-center gap-2">
            <input
              className="h-12 w-[130px] rounded-lg border border-gray-300 pl-2 text-sm placeholder:text-gray-600 focus:outline-none"
              placeholder="$ min."
              type="text"
            />
            &mdash;
            <input
              className="h-12 w-[130px] rounded-lg border border-gray-300 pl-2 text-sm placeholder:text-gray-600 focus:outline-none"
              placeholder="$ max."
              type="text"
            />
          </div>
        </div>

        <div>
          <P2 className="mb-4 text-[14px] font-semibold">Bedrooms</P2>
          <div className="block">
            <span className="inline-block rounded-l-lg border border-gray-300 p-[14px] text-sm outline-none placeholder:text-gray-600">
              Any
            </span>
            <span className="inline-block border-y border-r border-gray-300 p-[14px] text-sm outline-none placeholder:text-gray-600">
              1+
            </span>
            <span className="inline-block border-y border-r border-gray-300 p-[14px] text-sm outline-none placeholder:text-gray-600">
              2+
            </span>
            <span className="inline-block border-y border-r border-gray-300 p-[14px] text-sm outline-none placeholder:text-gray-600">
              3+
            </span>
            <span className="inline-block border-y  border-gray-300 p-[14px] text-sm outline-none placeholder:text-gray-600">
              4+
            </span>
            <span className="inline-block rounded-r-lg border border-gray-300 p-[14px] text-sm outline-none placeholder:text-gray-600">
              5+
            </span>
          </div>
        </div>
        <Button
          className="mt-10 inline-flex items-center justify-center gap-2 bg-transparent"
          color="text"
        >
          <span className="mr-2 ">
            <RxReset />
          </span>
          <span>Reset all filters</span>
        </Button>
      </div>
    </div>
  );
};

export default SearchComponent;
