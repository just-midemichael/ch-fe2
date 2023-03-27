import City from "@/components/shared/cityCard/City";
import Meta from "@/components/shared/meta/Meta";

export default function Home() {
  return (
    <>
      <Meta
        title="Welcome to City Hotels"
        description="Home page of City Hotels, Nigeria"
      />
      <div className="flex gap-4">
        <City path="/city.png" />
        <City path="/city.png" />
        <City path="/city.png" />
      </div>
    </>
  );
}
