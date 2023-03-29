import Meta from "@/components/shared/meta/Meta";
import RoomCard from "@/components/shared/roomCard/Room";

export default function Home() {
  return (
    <>
      <Meta
        title="Welcome to City Hotels"
        description="Home page of City Hotels, Nigeria"
      />

      <div className="ml-[80px] flex flex-col gap-4">
        <RoomCard path="/available.png" />
        <RoomCard path="/available.png" />
      </div>
    </>
  );
}
