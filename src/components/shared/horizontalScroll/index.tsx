import React from "react";
import { H3, P } from "../headings/Headings";

const HorizontalScroll: React.FC<{
  label?: string;
  title: string;
  subTitle?: string;
  children: React.ReactNode;
}> = ({ subTitle, title, label, children }) => {
  return (
    <div className="flex flex-col">
      <P>{label}</P>
      <H3>{title}</H3>
      <P>{subTitle}</P>
      <div className="mt-10 flex overflow-x-scroll">{children}</div>
    </div>
  );
};

export default HorizontalScroll;
