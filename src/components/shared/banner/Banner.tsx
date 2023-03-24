import { useState } from "react";
import { MdRoom } from "react-icons/md";
import BsFillPeopleFill from "@/assets/icons/people.svg";
import CalendarIcon from "@/assets/icons/calendar.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import type BannerProps from "./Banner.props";
import { H1, H4, P } from "../headings/Headings";
import Button from "../button/Button";
import Img from "../images/Image";

const Banner: React.FC<BannerProps> = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const persons = [
    { value: "3 persons", label: "3 persons" },
    { value: "2 persons", label: "2 persons" },
    { value: "1 person", label: "1 person" }
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
      <Img path="/banner.png" name="banner" className="h-full w-full" />
      <div className="absolute top-0 flex h-full w-full flex-col items-center justify-center">
        <div className="flex w-[942px] flex-col text-center align-middle">
          <H1 className="mb-4">Explore! Discover! Live!</H1>

          <H4>
            Experience the perfect getaway: Unwind and recharge in our tranquil
            retreat. Make every stay unforgettable, create lasting memories,
            immerse yourself in our warm hospitality
          </H4>
        </div>

        <div className="my-10 mx-[12%] flex w-[75%] justify-center gap-5 py-4 align-middle backdrop-blur-sm">
          <div className="border-r-solid border-r-2 border-[#828282] px-4">
            <div className="mb-1 flex gap-3 align-middle">
              <MdRoom className="text-white" />
              <P className="text-white">Location</P>
            </div>
            <Select
              classNamePrefix="select"
              className="h-[29px] w-[220px] bg-transparent focus:outline-none"
              placeholder={"Where are you going?"}
              name="city"
              options={options}
            />
          </div>

          <div className="border-r-solid border-r-2 border-[#828282] px-4 text-center">
            <div className="mb-2 flex gap-3 align-middle">
              <CalendarIcon className="inline text-white" />
              <P className="text-white">Check-in date &mdash; Check-out date</P>
            </div>
            <DatePicker
              className="w-[280px] bg-transparent  text-white"
              monthsShown={2}
              selected={startDate}
              placeholderText="Click to select"
              onChange={(val) => {
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
              className="h-[29px] w-[180px] bg-transparent px-0"
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
      </div>
    </div>
  );
};

export default Banner;
