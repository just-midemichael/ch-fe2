import { useState } from "react";
import { MdRoom } from "react-icons/md";
import CalendarIcon from "@/assets/icons/calendar3.svg";
import UserGroupIcon from "@/assets/icons/usergroup.svg";
import LocationIcon from "@/assets/icons/location2.svg";
import BsFillPeopleFill from "@/assets/icons/people.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import type BannerProps from "./Banner.props";
import { H1, H4, P } from "../headings/Headings";
import Button from "../button/Button";
import Img from "../images/Image";

const Banner: React.FC<BannerProps> = ({ path }) => {
  const [startDate, setStartDate] = useState<Date | null>();
  const [endDate, setEndDate] = useState<Date | null>();

  const persons = [
    { value: "3 persons", label: "3 Persons" },
    { value: "2 persons", label: "2 Persons" },
    { value: "1 person", label: "1 Person" }
  ];

  const options = [
    { value: "Abuja", label: "Abuja" },
    { value: "Lagos", label: "Lagos" },
    { value: "Oyo", label: "Oyo" },
    { value: "Ogun", label: "Ogun" },
    { value: "Enugu", label: "Enugu" }
  ];

  return (
    <div className="relative h-[669px] w-full max-w-[100vw]">
      <Img path={`${path}`} name="banner" className="h-full w-full" />
      <div className="absolute top-0 flex h-full w-full flex-col items-center justify-center">
        <div className="flex w-full flex-col text-center align-middle lg:w-[942px]">
          <H1 className="mb-4">Explore! Discover! Live!</H1>

          <H4 className="hidden text-white lg:block">
            Experience the perfect getaway: Unwind and recharge in our tranquil
            retreat. Make every stay unforgettable, create lasting memories,
            immerse yourself in our warm hospitality
          </H4>
        </div>

        <div className="my-10 hidden justify-center gap-5 p-4 align-middle backdrop-blur-sm lg:mx-[12%] lg:flex">
          <div className="border-r-solid border-r-2 border-[#828282] px-4">
            <div className="mb-1 flex gap-3 align-middle">
              <MdRoom className="text-white" />
              <P className="text-white">Location</P>
            </div>
            <Select
              classNamePrefix="select"
              className="h-[29px] w-[220px] bg-transparent text-white focus:outline-none"
              placeholder={"Where are you going ?"}
              name="city"
              options={options}
            />
          </div>

          <div className="border-r-solid border-r-2 border-[#828282] px-4 text-center">
            <div className="mb-2 block gap-3 align-middle lg:flex">
              <CalendarIcon className="inline text-white" />
              <P className="text-white">Check-in date &mdash; Check-out date</P>
            </div>
            <DatePicker
              className="w-[280px] bg-transparent  text-white"
              monthsShown={2}
              selected={startDate}
              placeholderText="Click to select"
              onChange={(val: any) => {
                setStartDate(val[0]);
                setEndDate(val[1]);
              }}
              startDate={startDate}
              endDate={endDate}
              selectsRange
            />
          </div>
          <div>
            <div className="mb-1 flex gap-3 align-middle">
              <BsFillPeopleFill className="text-white" />
              <P className="text-white">Guests</P>
            </div>

            <Select
              classNamePrefix="select"
              className="h-[29px] w-[180px] bg-transparent px-0 text-white"
              defaultValue={persons[0]}
              name="guest"
              options={persons}
            />
          </div>

          <div className="ml-10 flex items-center justify-center">
            <Button size="lg" color="primary">
              Search
            </Button>
          </div>
        </div>
        <div className="my-9 block lg:hidden">
          <div className="z-0 flex h-10 gap-3 backdrop-blur-sm">
            <LocationIcon className="w-7 text-white" />
            <Select
              classNamePrefix="select"
              className="h-[29px] w-[220px] bg-transparent text-white focus:outline-none"
              placeholder={"Destination"}
              name="city"
              options={options}
            />
          </div>
          <div className="z-0 my-5 flex h-10 gap-3 backdrop-blur-sm">
            <CalendarIcon className=" h-7 w-7" />
            <div>
              <DatePicker
                className="z-0 w-[280px] bg-transparent  text-white"
                selected={startDate}
                placeholderText="Departure Date - Arrival Date"
                onChange={(val: any) => {
                  setStartDate(val[0]);
                  setEndDate(val[1]);
                }}
                startDate={startDate}
                endDate={endDate}
                selectsRange
              />
            </div>
          </div>
          <div className="z-0 flex h-10 gap-3 backdrop-blur-sm">
            <UserGroupIcon className="w-7 text-white" />
            <Select
              classNamePrefix="select"
              className="h-[29px] w-[180px] bg-transparent px-0 text-white"
              placeholder="Guests"
              defaultValue={persons[0]}
              name="guest"
              options={persons}
            />
          </div>
          <div className="ml-10 mt-5 flex items-center justify-center">
            <Button size="lg" color="primary">
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
