import type { MouseEventHandler } from "react";

export default interface HotelImageCardProps
  extends React.HtmlHTMLAttributes<HTMLElement> {
  className?: string;
  onClick?: MouseEventHandler<HTMLElement> | undefined;
  path: string;
}
