import Banner from "@/components/shared/banner/Banner";
import Meta from "@/components/shared/meta/Meta";
import SearchInput from "@/components/shared/searchInput/SearchInput";
import Main from "@/layout/main/Main";
import Input from "@/components/shared/input/Input";
import HorizontalScroll from "@/components/shared/horizontalScroll/HorizontalScroll";
import RegisterHotelComponent from "@/components/home/register-hotel/RegisterHotel";
import Hero from "@/components/home/hero/Hero";
import City from "@/components/shared/cityCard/City";
import Featured from "@/components/shared/featuredCard/Featured";
import Hotel from "@/components/shared/hotelCard/Hotel";

export default function Home() {
  return (
    <>
      <Meta
        title="Welcome to City Hotels"
        description="Home page of City Hotels, Nigeria"
      />

      <Main>
        <Hero />
        <div className="flex items-center gap-6 overflow-x-auto">
          <Hotel featured={true} info={true} favourite={false} path={""} />
          <Hotel featured={true} info={false} favourite={true} path={""} />
          <Hotel featured={false} info={true} favourite={true} path={""} />
          <Featured featured={true} />
          <City />
        </div>
        <div className="py-5">
          <SearchInput placeholder="Search" />
        </div>
        <div className="py-5">
          <Input
            label="Username"
            name="username"
            placeholder="Enter Your Username"
            className="rounded-lg"
          />
          <Input
            type="password"
            label="Password"
            name="username"
            className="rounded-lg"
          />
        </div>

        <div>
          <HorizontalScroll
            title="Explore Our Featured Hotels"
            subTitle="Aliquam lacinia diam quis lacus euismod"
            showPagination
          >
            <Hotel
              className="mx-3"
              featured={false}
              info={true}
              favourite={true}
              path={""}
            />
            <Hotel
              className="mx-3"
              featured={false}
              info={true}
              favourite={true}
              path={""}
            />
            <Hotel
              className="mx-3"
              featured={false}
              info={true}
              favourite={true}
              path={""}
            />
            <Hotel
              className="mx-3"
              featured={false}
              info={true}
              favourite={true}
              path={""}
            />
            <Hotel
              className="mx-3"
              featured={false}
              info={true}
              favourite={true}
              path={""}
            />
            <Hotel
              className="mx-3"
              featured={false}
              info={true}
              favourite={true}
              path={""}
            />
            <Hotel
              className="mx-3"
              featured={false}
              info={true}
              favourite={true}
              path={""}
            />
            <Hotel
              className="mx-3"
              featured={false}
              info={true}
              favourite={true}
              path={""}
            />
            <Hotel
              className="mx-3"
              featured={false}
              info={true}
              favourite={true}
              path={""}
            />
            <Hotel
              className="mx-3"
              featured={false}
              info={true}
              favourite={true}
              path={""}
            />
            <Hotel
              className="mx-3"
              featured={false}
              info={true}
              favourite={true}
              path={""}
            />
            <Hotel
              className="mx-3"
              featured={false}
              info={true}
              favourite={true}
              path={""}
            />
            <Hotel
              className="mx-3"
              featured={false}
              info={true}
              favourite={true}
              path={""}
            />
            <Hotel
              className="mx-3"
              featured={false}
              info={true}
              favourite={true}
              path={""}
            />
            <Hotel
              className="mx-3"
              featured={false}
              info={true}
              favourite={true}
              path={""}
            />
            <Hotel
              className="mx-3"
              featured={false}
              info={true}
              favourite={true}
              path={""}
            />
            <Hotel
              className="mx-3"
              featured={false}
              info={true}
              favourite={true}
              path={""}
            />
            <Hotel
              className="mx-3"
              featured={false}
              info={true}
              favourite={true}
              path={""}
            />
            <Hotel
              className="mx-3"
              featured={false}
              info={true}
              favourite={true}
              path={""}
            />
            <Hotel
              className="mx-3"
              featured={false}
              info={true}
              favourite={true}
              path={""}
            />
          </HorizontalScroll>
        </div>
        <RegisterHotelComponent />
      </Main>
      <Banner />
    </>
  );
}
