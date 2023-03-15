import Hero from "@/components/home/hero/Hero";
import City from "@/components/shared/City Card/City";
import Featured from "@/components/shared/Featured Card/Featured";
import Hotel from "@/components/shared/Hotel Card/Hotel";
import Meta from "@/components/shared/meta/Meta";
import Main from "@/layout/main/Main";

export default function Home() {
  return (
    <>
      <Meta
        title="Welcome to City Hotels"
        description="Home page of City Hotels, Nigeria"
      />

      <Main>
        <div>
          <Hero />
          <div className="flex items-center gap-6">
            <Hotel featured={true} info={true} favourite={false} />
            <Hotel featured={true} info={false} favourite={true} />
            <Hotel featured={false} info={true} favourite={true} />
            <Featured featured={true} />
            <City />
          </div>
        </div>
      </Main>
    </>
  );
}
