import type { IHotel } from "@/services/hotel/payload";
import type { IRoom } from "@/services/room/payload";

export const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const roomObject = [
  { inverted: true, id: 1 },
  { inverted: false, id: 2 },
  { inverted: true, id: 3 },
  { inverted: false, id: 4 }
];
export const hotel: IHotel = {
  Id: "63a0308f2f40d02bb5e2d445",
  Name: "De' Lovers Hotel",
  Slogan: "De' Best Hotel In Town",
  Email: "lovers@gmail.com",
  Telephone: "08182876756",
  Rating: 4,
  Facilities: ["63e0c90cb03fc4bb1b38c2bf", "63e0c5ca18bff30c3039cdc2"],
  Logo: {
    Path: "https://cityhotels.s3.amazonaws.com/logo.png",
    Status: true
  },
  Banner: {
    Type: 1,
    Path: "https://cityhotels.s3.amazonaws.com/banner.png",
    Status: true
  },
  Medias: [
    {
      Type: 2,
      Path: "https://cityhotels.s3.amazonaws.com/hotel2.png",
      Status: true
    }
  ],
  Slug: "de-lovers-hotel",
  SEO: "",
  Address: {
    City: "",
    Country: "",
    PostalCode: "",
    State: "",
    Street: ""
  },
  AveragePrice: 0,
  Created_at: "",
  Last_updated: ""
};

export const Room: IRoom = {
  Id: "63a096c52f40d02bb5e2d447",
  HotelId: "63a0308f2f40d02bb5e2d445",
  Name: "Room 306",
  Description:
    "This is our regular standard room with tables chairs and tv set",
  Price: 40000,
  PromoCost: 37500,
  MaxGuest: 2,
  Quantity: 10,
  NumberAvailable: 5,
  Bed: "Standard",
  CancellationFee: 0,
  Created_at: "",
  Facilities: [],
  Last_updated: "",
  Medias: [
    {
      Path: "",
      Type: undefined,
      Status: false
    }
  ],
  PrePayment: false,
  Refundable: false,
  RefundableDate: "",
  SEO: "",
  Slug: ""
};
