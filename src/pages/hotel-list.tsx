import Button from "@/components/shared/button/Button";
import Hotel from "@/components/shared/hotelCard/Hotel";
// import Hotel from "@/components/shared/hotelCard/Hotel";
import SearchInput from "@/components/shared/searchInput/SearchInput";
import Main from "@/layout/main/Main";
import { mockHotel } from "@/utils/constants";

export default function HotelList() {
  return (
    <>
      <Main>
        <h1 className="ml-[100px] text-[24px] font-semibold">All Hotels</h1>

        <div className="relative ml-[100px] mt-6 flex items-center">
          <SearchInput
            placeholder="Search ..."
            className="w-[1086px] flex-1 pr-12 outline-none"
          />

          <Button
            color="primary"
            className="top-3.7 absolute right-[108px] "
            size="md"
          >
            Search
          </Button>
        </div>

        <div className="mb-5 ml-[48px] mt-7 grid grid-cols-4  gap-4 overflow-x-auto px-[53px]">
          {new Array(10).fill(mockHotel).map((hotel: any, index: number) => (
            <Hotel hotel={hotel} key={index} />
          ))}
        </div>
      </Main>
    </>
  );
}
