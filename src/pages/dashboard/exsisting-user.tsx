import React from "react";
import DashBoardCard from "@/components/shared/dashBoardCard/dashBoard";
import { Table } from "@/components/shared/table/Table";
import { P } from "@/components/shared/headings/Headings";
import Img from "@/components/shared/images/Image";
import Select from "react-select";
import Edit from "@/assets/icons/edit.svg";

export default function ExsistingUser() {
  const countBegin = 1;
  const bookings = new Array(3)
    .fill([
      {
        customer_name: "Customer Name 1",
        customer_email: "example@gmail.com",
        customer_profile: "/customer.png",
        checkbox: "checkbox",
        booking_date: "9660",
        checkin_date: "26 Nov 2022",
        checkout_date: "40 Nov 2022",
        status: "checked in"
      },
      {
        customer_name: "Customer Name 2",
        customer_email: "example@gmail.com",
        customer_profile: "/customer-2.png",
        checkbox: "checkbox",
        booking_date: "6100",
        checkin_date: "26 Nov 2022",
        checkout_date: "40 Nov 2022",
        status: "active"
      },
      {
        customer_name: "Customer Name 3",
        customer_email: "example@gmail.com",
        customer_profile: "/customer.png",
        checkbox: "checkbox",
        booking_date: "5950",
        checkin_date: "26 Nov 2022",
        checkout_date: "40 Nov 2022",
        status: "confirmed"
      },
      {
        customer_name: "Customer Name 4",
        customer_email: "example@gmail.com",
        customer_profile: "/customer.png",
        checkbox: "checkbox",
        booking_date: "9000",
        checkin_date: "30 Nov 2025",
        checkout_date: "40 Nov 2028",
        status: "rejected"
      }
    ])
    .flat()
    .map((assignment) => ({ id: countBegin + 1, ...assignment }));

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" }
  ];

  return (
    <div className="h-full w-full items-center bg-[#F7F7F7] p-8">
      <div className="flex flex-col gap-7 md:mb-7 md:flex-row md:justify-center md:pt-7">
        <DashBoardCard title="Rooms" record="123" home className="" />
        <DashBoardCard title="Total Bookings" record="192" search />
        <DashBoardCard title="Visits" record="531" home />
      </div>

      <Table
        headerComponent={
          <div>
            <div className="mb-7 flex w-full justify-between">
              <P className="text-[16px] font-black">History</P>
              <P className="text-[16px] font-black">View All</P>
            </div>

            <div className="flex items-center justify-between gap-3">
              <input
                type="search"
                placeholder="Search"
                className="h-[42px] w-[60%] border border-[#EAEAEA] pl-4 outline-none placeholder:text-[#666666] lg:w-[75%]"
              />

              <Select
                className="h-[42px] text-[#666666]"
                placeholder={"Sort By: Recents"}
                name="options"
                options={options}
              />
            </div>
          </div>
        }
        header={[
          {
            key: "checkbox",
            title: "checkbox",
            width: "2%",

            renderHeader() {
              return <input type="checkbox" />;
            },
            render(_column, item) {
              return <input type="checkbox" name={item.checkbox} />;
            }
          },

          {
            key: "customer_name",
            title: "Customer Name",
            width: "13%",
            render(_column, item) {
              return (
                <div className="flex items-center gap-5">
                  <Img
                    path={item.customer_profile}
                    alt="User Profile"
                    name="Hotel Img"
                    className="h-[50px] w-[50px]"
                  />
                  <div className="flex  flex-col gap-1">
                    <div className={` text-[14px] text-black`}>
                      {item.customer_name}
                    </div>
                    <div className="text-[12px] text-black">
                      {item.customer_email}
                    </div>
                  </div>
                </div>
              );
            }
          },

          {
            key: "booking_date",
            title: "Booking Date",
            width: "4%"
          },
          {
            key: "checkin_date",
            title: "Check in",
            width: "4%"
          },
          {
            key: "checkout_date",
            title: "Check out",
            width: "4%"
          },
          {
            key: "status",
            title: "Status",
            width: "1%",

            render(_column, item) {
              return (
                <div
                  className={`${
                    (item.status === "active" && "bg-[#3401FE]") ||
                    (item.status === "checked in" && "bg-[#FE8501]") ||
                    (item.status === "confirmed" && "bg-[#3CBC00]") ||
                    "bg-[#FE012F]"
                  }   flex items-center justify-center gap-2 rounded-md px-[11px] py-[6px]`}
                >
                  <span className="h-[5px] w-[5px] rounded-full bg-[#FFF] "></span>
                  <div className="text-right text-[#FFF]">{item.status}</div>
                </div>
              );
            }
          },

          {
            key: "status",
            title: "",
            width: "4%",

            render() {
              return <Edit className="ml-8 cursor-pointer" />;
            }
          }
        ]}
        data={bookings}
      />
    </div>
  );
}
