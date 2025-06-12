import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getRooms } from "../../services/apiRooms";
import RoomItem from "./RoomItem";
import Spinner from "../../ui/Spinner";
import ErrorMessage from "../../ui/ErrorMessage";
import NewRoomForm from "./NewRoomForm";

function RoomsGrid() {
  const [isNewRoomModalOpen, setIsNewRoomModalOpen] = useState(false);

  const {
    isPending,
    data: rooms,
    error,
  } = useQuery({
    queryKey: ["rooms"],
    queryFn: getRooms,
  });

  if (isPending) return <Spinner />;
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <>
      {isNewRoomModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
          onClick={() => setIsNewRoomModalOpen(false)}
        >
          <div
            className="relative bg-white rounded-2xl w-full max-w-md mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsNewRoomModalOpen(false)}
              className="absolute top-4 right-6 cursor-pointer text-gray-500 hover:text-gray-700 transition text-2xl"
            >
              ×
            </button>
            <NewRoomForm setIsNewRoomModalOpen={setIsNewRoomModalOpen} />
          </div>
        </div>
      )}

      <section className="px-2 w-full h-full flex flex-col overflow-hidden">
        <div className="flex justify-between items-end">
          <div className="font-medium text-5xl mb-3 ml-2 flex items-end">
            All Rooms
            <div>
              <div className="px-2 mx-5 pb-1">
                <button
                  onClick={() => setIsNewRoomModalOpen(true)}
                  className="text-lg cursor-pointer px-4 py-2 bg-emerald-700 text-zinc-100 rounded-md hover:bg-emerald-600 transition duration-300"
                >
                  + Add new room
                </button>
              </div>
            </div>
          </div>

          <div className="flex font-semibold text-lg mr-2 mb-2">
            <button className="cursor-pointer hover:bg-zinc-200 px-3 rounded transition-colors duration-200">
              Sort
            </button>
            <span className="font-extralight leading-6">|</span>
            <button className="cursor-pointer hover:bg-zinc-200 px-3 rounded transition-colors duration-200">
              Filter
            </button>
          </div>
        </div>

        <div className="bg-white border-b border-zinc-200 font-bold px-4 py-2 grid grid-cols-[1.5fr_1.2fr_1.5fr_2.8fr_1fr_0.7fr] gap-4 rounded-t">
          <div className="flex items-center border-r border-zinc-200">Room</div>
          <div className="flex items-center border-r border-zinc-200">Type</div>
          <div className="flex items-center border-r border-zinc-200">
            Capacity
          </div>
          <div className="flex items-center border-r border-zinc-200">
            Description
          </div>
          <div className="flex items-center border-r border-zinc-200">
            Price
          </div>
          <div className="flex items-center">Actions</div>
        </div>
        <div className="bg-white overflow-auto flex-1 max-h-[calc(100vh-280px)] min-h-0 w-full rounded-b">
          {rooms.map((room) => (
            <RoomItem key={room.id} room={room} />
          ))}
        </div>
      </section>
    </>
  );
}

export default RoomsGrid;
