// import FeaturedList from "@/components/shared/featuredCard/FeaturedList";
import Meta from "@/components/shared/meta/Meta";
// import { featuredObject } from "@/utils/constants";

export default function Home() {
  return (
    <>
      <Meta
        title="Welcome to City Hotels"
        description="Home page of City Hotels, Nigeria"
      />
      <div className="flex gap-4">
        {/* {featuredObject.map((featured) => (
          <FeaturedList
            key={featured.id}
            path={featured.path}
            featured={featured.feature}
            featuredPrice={featured.featuredPrice}
            featuredLocation={featured.featuredLocation}
            featuredPlace={featured.featuredPlace}
            featuredBath={featured.featuredBath}
            featuredBed={featured.featuredBed}
            featuredSize={featured.featuredSize}
          />
        ))} */}
      </div>
    </>
  );
}
