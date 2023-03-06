import Hero from "@/components/home/hero/Hero";
import Button from "@/components/shared/button/Button";
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
        <div className="absolute top-1/2 left-1/2 w-max -translate-x-1/2 -translate-y-1/2">
          <Hero />
          <div className="my-4">
            <Button className="mx-auto hover:bg-black hover:text-white">
              Explore
            </Button>
          </div>
        </div>
      </Main>
    </>
  );
}
