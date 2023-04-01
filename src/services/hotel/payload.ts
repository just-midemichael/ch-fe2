// TODO: Correct this when you know the exact payload
export type HotelPayoad = {
  name: string;
};
export type Address = {
  City: string;
  Country: string;
  PostalCode: string;
  State: string;
  Street: string;
};
export type Media = {
  Path: string;
  Type: string;
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
  Address: Address;
  Email: string;
  Banner: Media;
  Facilities: string[];
  Logo: Media;
  Media: Media[];
  Created_at: string;
  Last_updated: string;
};
