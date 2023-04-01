import type { IHotel } from "@/services/hotel/payload";

export default interface HotelItem
  extends React.HtmlHTMLAttributes<HTMLElement> {
  className?: string;
  featured?: boolean;
  hotel: IHotel;
}
