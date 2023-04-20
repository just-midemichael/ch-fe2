import { P, P2 } from "@/components/shared/headings/Headings";
import Img from "@/components/shared/images/Image";
import { Table } from "@/components/shared/table/Table";
import UserDashboardLayout from "@/layout/user/User";
import Link from "next/link";
import React from "react";

const index = () => {
  const countBegin = 1;
  const bookings = new Array(3)
    .fill([
      {
        hotel: "Studio apartment",
        bookingId: "Flat 1111",
        checkin_date: "26 Nov 2022",
        checkout_date: "40 Nov 2022",
        amount: 10000
      },
      {
        hotel: "Iphone 13 pro max #1",
        bookingId: "SN123243",
        checkin_date: "26 Nov 2022",
        checkout_date: "40 Nov 2022",
        amount: 10000
      },
      {
        hotel: "Macbook pro 2015 #3",
        bookingId: "000231",
        checkin_date: "26 Nov 2022",
        checkout_date: "40 Nov 2022",
        amount: 10000
      }
    ])
    .flat()
    .map((assignment) => ({ id: countBegin + 1, ...assignment }));
  return (
    <UserDashboardLayout>
      <div className="flex gap-6 ">
        <div className="flex h-[278px] flex-col items-center justify-center gap-[10px] rounded-lg border border-gray-100 text-center lg:basis-3/5">
          <Img
            className="h-[120px] w-[120px] rounded-full"
            path={"/city.png"}
            name={"user avatar"}
          />
          <div>
            <P className="text-[16px] leading-[21px]"> Dianne Russell</P>
            <P2 className="mb-[10px] text-[14px] leading-[21px] text-gray-500">
              Customer
            </P2>
          </div>
          <Link className="text-primary400" href={"/user/settings"}>
            Edit Profile
          </Link>
        </div>
        <div className="flex h-[278px] flex-col justify-between gap-[22px] rounded-lg border border-gray-100 p-8 lg:basis-2/5">
          <P className="text-[16px] leading-[21px] text-gray-400">
            Billing Address
          </P>
          <div className="max:w-[264px] flex h-[278px] flex-col gap-[6px]">
            <P2 className="text-[14px] leading-[21px]"> Dianne Russell</P2>
            <P2 className="text-[14px] leading-[21px]">
              4140 Parker Rd. Allentown, New Mexico 31134
            </P2>
            <P2 className="text-[14px] leading-[21px]">
              dainne.ressell@gmail.com
            </P2>
            <P2 className="text-[14px] leading-[21px]">(671) 555-0110</P2>
          </div>
          <Link className="text-primary400" href={"/user/settings"}>
            Edit Profile
          </Link>
        </div>
      </div>
      <div>
        <Table
          headerComponent={
            <div className="flex w-full justify-between pr-24">
              <P className="text-[16px]">History</P>
              <Link href={"/user/history"}>View all </Link>
            </div>
          }
          header={[
            {
              key: "hotel",
              title: "Hotel",
              width: "30%",
              render(_column, item) {
                return (
                  <div className="flex items-center gap-5">
                    <Img
                      path={"/city.png"}
                      alt="User Profile"
                      name="Hotel Img"
                      className="h-[70px] w-[70px]"
                    />
                    <div className={` text-neutral500 text-sm font-medium`}>
                      {item.hotel}
                    </div>
                  </div>
                );
              }
            },
            {
              key: "bookingId",
              title: "Booking ID",
              width: "20%"
            },
            {
              key: "checkin_date",
              title: "Check in",
              width: "15%"
            },
            {
              key: "checkout_date",
              title: "Check out",
              width: "15%"
            },
            {
              key: "amount",
              title: "Amount",
              width: "15%"
            }
          ]}
          data={bookings}
        />
      </div>
    </UserDashboardLayout>
  );
};

export default index;
