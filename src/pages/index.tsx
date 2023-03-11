import Hero from "@/components/home/hero/Hero";
import Button from "@/components/shared/button/Button";
import Meta from "@/components/shared/meta/Meta";
import Main from "@/layout/main/Main";
import { FaFacebookF } from "react-icons/fa";

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
            <Button size="lg" color="neutral">
              Explore
            </Button>

            <Button size="subscribe" color="primary">
              Explore
            </Button>

            <Button size="lg" color="danger">
              Explore
            </Button>

            <Button size="media" color="media">
              <FaFacebookF />
            </Button>
          </div>
        </div>
      </Main>
    </>
  );
}
