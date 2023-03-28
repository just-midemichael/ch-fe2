import Carousel from "@/components/shared/carousel/Carousel";
import Meta from "@/components/shared/meta/Meta";

export default function Home() {
  const medias = ["/Banner.png", "/hotel.png", "/featured.png", "/city.png"];

  return (
    <>
      <Meta
        title="Welcome to City Hotels"
        description="Home page of City Hotels, Nigeria"
      />
      <div className="mx-auto my-10 w-[683px]">
        <Carousel medias={medias} />
      </div>
    </>
  );
}
