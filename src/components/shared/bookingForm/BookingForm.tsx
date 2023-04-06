import { BsCalendar2DateFill } from "react-icons/bs";
import { RiErrorWarningLine } from "react-icons/ri";
import { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { Label, P } from "../headings/Headings";
import styles from "./BookingForm.module.scss";
import type BookingFormProps from "./BookingForm.props";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../button/Button";

const BookingForm: React.FC<BookingFormProps> = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const guest = [
    { value: "3", label: "3" },
    { value: "2", label: "2" },
    { value: "1", label: "1" }
  ];

  const services = [
    { value: "wifi", label: "wifi" },
    { value: "golf", label: "golf" },
    { value: "basketball", label: "basketball" }
  ];
  return (
    <div>
      <div className={`${styles.formContainer}`}>
        <P className="my-3 text-center text-[26px]">Bookings</P>

        <div className="px-8">
          <div className={`${styles.inputs}`}>
            <div>
              <Label className={`${styles.label}`}>Check-In</Label>
              <div className="flex items-center">
                <BsCalendar2DateFill className="absolute z-10 ml-2  text-[#333333]" />
                <DatePicker
                  selected={startDate}
                  onChange={(date) => date && setStartDate(date)}
                  className={`${styles.datePicker}`}
                />
              </div>
            </div>

            <div>
              <Label className={`${styles.label}`}>Check-Out</Label>
              <div className="flex items-center">
                <BsCalendar2DateFill className="absolute z-10 ml-2  text-[#333333]" />
                <DatePicker
                  selected={endDate}
                  placeholderText="Click to select"
                  onChange={(date) => date && setEndDate(date)}
                  className={`${styles.datePicker}`}
                  startDate={startDate}
                  endDate={endDate}
                />
              </div>
            </div>

            <div>
              <Label className={`${styles.label}`}>Guest</Label>
              <Select
                classNamePrefix="select"
                className={`${styles.select}`}
                defaultValue={services[0]}
                name="services"
                options={services}
              />
            </div>

            <div>
              <Label className={`${styles.label}`}>Rooms</Label>
              <Select
                classNamePrefix="select"
                className={`${styles.select}`}
                defaultValue={services[2]}
                name="services"
                options={services}
              />
            </div>

            <div>
              <Label className={`${styles.label}`}>Services</Label>
              <Select
                classNamePrefix="select"
                className={`${styles.select}`}
                defaultValue={services[0]}
                name="guest"
                options={guest}
              />
            </div>

            <div className="mt-6">
              <Select
                classNamePrefix="select"
                className={`${styles.select}`}
                defaultValue={guest[0]}
                name="guest"
                options={guest}
              />
            </div>
          </div>

          <div className="flex items-center gap-1">
            <RiErrorWarningLine className="text-[#FE8501]" />
            <small className={`${styles.small}`}>info: no refund</small>
          </div>
        </div>
        <div className={`${styles.bookContainer}`}>
          <Button size="md" color="primary">
            Book Now
          </Button>

          <div className={`${styles.totalPrice}`}>
            <div className="flex items-center gap-2">
              <P className="text-[#333333]">Total:</P>{" "}
              <P className="text-[21.47px] font-bold">&#8358;12, 500</P>
            </div>

            <div className="flex items-center gap-2">
              <P className="text-[9px]">Available Rooms: </P>{" "}
              <P className="font-medium text-[15.625px;]"> 3</P>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
