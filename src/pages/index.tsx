import Hero from "@/components/home/hero/Hero";
import Meta from "@/components/shared/meta/Meta";
import Main from "@/layout/main/Main";
import { LogoImg } from "@/components/shared/Images/Images";

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
          <div className="my-4 flex gap-x-2.5">
            <div className="object-contain">
              <LogoImg src="./logo.png" />
            </div>
          </div>
        </div>
      </Main>
    </>
  );
}
