// TODO: Correct this when you know the exact payload
export type HotelPayoad = {
  name: string;
};
export type IAddress = {
  City: string;
  Country: string;
  PostalCode: string;
  State: string;
  Street: string;
};
export type IMedia = {
  Path: string;
  Type?: 0 | 1 | 2;
  Status: boolean;
};
export type IHotel = {
  Id: string;
  Name: string;
  Rating: number;
  SEO: string;
  Slogan: string;
  Slug: string;
  Telephone: string;
  Address: IAddress;
  Email: string;
  Banner: IMedia;
  Facilities: string[];
  Logo: IMedia;
  Medias: IMedia[];
  AveragePrice: number;
  Created_at: string;
  Last_updated: string;
};
