import type { IRoom } from "@/services/room/payload";

export default interface RoomProps
  extends React.HtmlHTMLAttributes<HTMLElement> {
  className?: string;
  room: IRoom;
  inverted?: boolean;
}
