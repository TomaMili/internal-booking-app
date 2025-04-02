import { useQuery } from "@tanstack/react-query";
import { getRooms } from "../../services/apiRooms";
import RoomItem from "./RoomItem";
import Spinner from "../../ui/Spinner";
import ErrorMessage from "../../ui/ErrorMessage";

function RoomsGrid() {
  const {
    isPending,
    data: rooms,
    error,
  } = useQuery({
    queryKey: ["room"],
    queryFn: getRooms,
  });

  if (isPending) return <Spinner />;
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <section className="px-2 w-full h-full flex flex-col">
      <div className="flex justify-between items-end">
        <div className="font-bold text-5xl mb-4 ml-2">All rooms</div>
        <div className="flex gap-3 font-semibold text-lg mr-2 mb-2">
          <button className="cursor-pointer">Sort</button>
          <span className="font-light leading-6.5">|</span>
          <button className="cursor-pointer">Filter</button>
        </div>
      </div>

      <div className="bg-white font-bold px-4 py-2 grid grid-cols-[1.5fr_1.2fr_1.5fr_2.8fr_1fr_0.7fr] gap-4">
        <div className="flex items-center border-r-1 border-zinc-400">Room</div>
        <div className="flex items-center border-r-1 border-zinc-400">Type</div>
        <div className="flex items-center border-r-1 border-zinc-400">
          Capacity
        </div>
        <div className="flex items-center border-r-1 border-zinc-400">
          Description
        </div>
        <div className="flex items-center border-r-1 border-zinc-400">
          Price
        </div>
        <div className="flex items-center">Actions</div>
      </div>
      <div className="bg-white overflow-auto flex-1 max-h-[calc(100vh-280px)] min-h-0 w-full">
        {rooms.map((room) => (
          <RoomItem key={room.id} room={room} />
        ))}
      </div>
    </section>
  );
}

export default RoomsGrid;
