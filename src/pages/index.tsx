import Meta from "@/components/shared/meta/Meta";
import RoomCard from "@/components/shared/roomCard/Room";
import { roomObject } from "@/utils/constants";

export default function Home() {
  return (
    <>
      <Meta
        title="Welcome to City Hotels"
        description="Home page of City Hotels, Nigeria"
      />

      <div className="mx-7 mt-7 flex flex-col gap-4">
        {roomObject.map((room) => (
          <RoomCard
            path="/available.png"
            inverted={room.inverted}
            key={room.id}
          />
        ))}
      </div>
    </>
  );
}
