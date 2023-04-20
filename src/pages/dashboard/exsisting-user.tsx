import React from "react";
import DashBoardCard from "@/components/shared/dashBoardCard/dashBoard";

export default function ExsistinggUser() {
  return (
    <div className="flex h-[100vh] w-full items-center justify-center gap-4 bg-[#F7F7F7] ">
      <DashBoardCard title="Rooms" record="123" home />
      <DashBoardCard title="Total Bookings" record="192" search />
      <DashBoardCard title="Visits" record="531" home />
    </div>
  );
}
