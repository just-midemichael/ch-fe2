import type { IHotel } from "@/services/hotel/payload";

export const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

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
