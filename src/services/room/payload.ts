import type { IMedia } from "../hotel/payload";

// TODO: Correct this when you know the exact payload
export type RoomPayload = {
  name: string;
};

export type IRoom = {
  Bed: string;
  CancellationFee: number;
  Created_at: string;
  Description: string;
  Facilities: string[];
  HotelId: string;
  Id: string;
  Last_updated: string;
  MaxGuest: number;
  Medias: IMedia[];
  Name: string;
  NumberAvailable: number;
  PrePayment: boolean;
  Price: number;
  PromoCost: number;
  Quantity: number;
  Refundable: boolean;
  RefundableDate: string;
  SEO: string;
  Slug: string;
};
