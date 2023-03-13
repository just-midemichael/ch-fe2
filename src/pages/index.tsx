import Hero from "@/components/home/hero/Hero";
import Meta from "@/components/shared/meta/Meta";
import Main from "@/layout/main/Main";
import Img from "@/components/shared/Images/Image";

export default function Home() {
  return (
    <>
      <Meta
        title="Welcome to City Hotels"
        description="Home page of City Hotels, Nigeria"
      />

      <Main>
        <div className="absolute top-1/2 left-1/2 w-max -translate-x-1/2 -translate-y-1/2">
          <Hero />
          <div className="h-[120px] w-full">
            <Img
              path="/featured.png"
              name="featured"
              className="overflow-hidden object-contain"
            />
          </div>
        </div>
      </Main>
    </>
  );
}
