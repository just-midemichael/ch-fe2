import { useState } from "react";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { BsFillPeopleFill } from "react-icons/bs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import type BannerProps from "./Banner.props";
import { H1, H4, P } from "../headings/Headings";
import Button from "../button/Button";
import Img from "../images/Image";

const Banner: React.FC<BannerProps> = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

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
    <div>
      <Img
        path="/banner.png"
        name="banner"
        className="relative h-[669px] max-w-[100vw]"
      />
      <div className="absolute top-[188px] left-[249px]">
        <div className="flex w-[942px] flex-col text-center align-middle">
          <H1 className="mb-3">Explore! Discover! Live!</H1>

          <H4>
            Experience the perfect getaway: Unwind and recharge in our tranquil
            retreat. Make every stay unforgettable, create lasting memories,
            immerse yourself in our warm hospitality
          </H4>
        </div>

        <div className="my-4 mx-[12%] flex w-[75%] justify-center gap-5 py-4 align-middle backdrop-blur-sm">
          <div>
            <div className="flex gap-3 pb-2 align-middle">
              <HiOutlineCalendarDays className="inline text-white" />
              <P className="text-white">Check-in</P>
            </div>
            <DatePicker
              className="bg-transparent text-white"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              monthsShown={2}
            />
          </div>

          <span className="h-[50px] w-[2px] border border-solid border-[#828282]"></span>

          <div>
            <div className="flex gap-3 pb-2 align-middle">
              <HiOutlineCalendarDays className="inline text-white" />
              <P className="text-white">Check-out</P>
            </div>
            <DatePicker
              className="bg-transparent text-white"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              monthsShown={2}
            />
          </div>

          <span className="h-[50px] w-[2px] border border-solid border-[#828282]"></span>

          <div>
            <div className="flex gap-3 pb-2 align-middle">
              <BsFillPeopleFill className="text-white" />
              <P className="text-white">Guests</P>
            </div>

            <Select
              classNamePrefix="select"
              className="h-[29px] w-[120px] bg-transparent"
              defaultValue={persons[0]}
              name="guest"
              options={persons}
            />
          </div>

          <span className="h-[50px] w-[2px] border border-solid border-[#828282]"></span>

          <div>
            <div className="flex gap-3 pb-2 align-middle">
              <BsFillPeopleFill className="text-white" />
              <P className="text-white">Location</P>
            </div>
            <Select
              classNamePrefix="select"
              className="h-[29px] w-[90px] bg-transparent"
              defaultValue={options[0]}
              name="city"
              options={options}
            />
          </div>

          <Button size="lg" color="primary">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
