import React from "react";
import DashBoardPeople from "@/assets/icons/dashboardPeople.svg";
import { P, H6 } from "@/components/shared/headings/Headings";
import Button from "@/components/shared/button/Button";

export default function NewUser() {
  return (
    <div className="flex h-[100vh] w-full items-center justify-center bg-[#F7F7F7] text-center">
      <div className="flex h-[476px] max-w-[803px] flex-col items-center justify-center rounded-md bg-[#FFF] px-52">
        <DashBoardPeople className="h-[164px] w-[213px]" />
        <P className="my-4 text-[25px] font-black">Welcome to City Hotels!!</P>
        <H6>
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
          Aliquam in hendrerit.
        </H6>
        <Button size="md" color="primary" className="mt-5">
          Continue Profile Set up
        </Button>
      </div>
    </div>
  );
}
