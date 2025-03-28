import { useQuery } from "@tanstack/react-query";
import { getRooms } from "../../services/apiRooms";
import RoomItem from "./RoomItem";

function RoomsGrid() {
  const {
    isPending,
    data: rooms,
    error,
  } = useQuery({
    queryKey: ["room"],
    queryFn: getRooms,
  });

  // TODO: make a spinner and error display
  if (isPending) return "Spinner";
  if (error) return error;

  // TODO: make a grid for all the rooms
  return (
    <section className="bg-white py-2 px-2 w-full h-full">
      <div className="font-bold px-4 py-2 grid grid-cols-[1.5fr_1fr_1.5fr_2.8fr_1fr_0.7fr] gap-4">
        <div className="flex items-center">Room</div>
        <div className="flex items-center">Type</div>
        <div className="flex items-center">Capacity</div>
        <div className="flex items-center">Description</div>
        <div className="flex items-center">Price</div>
        <div className="flex items-center">Actions</div>
      </div>
      {rooms.map((room) => (
        <RoomItem key={room.id} room={room} />
      ))}
    </section>
  );
}

export default RoomsGrid;
