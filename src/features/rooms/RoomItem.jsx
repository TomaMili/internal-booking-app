import { BiTrash, BiEdit } from "react-icons/bi";
import { useState } from "react";
import NewRoomForm from "./NewRoomForm";
import { useDeleteRoom } from "./useDeleteRoom";

function RoomItem({ room }) {
  const {
    id: roomId,
    name,
    type,
    capacity,
    price,
    discount,
    desc,
    image,
  } = room;

  const [isNewRoomModalOpen, setIsNewRoomModalOpen] = useState(false);
  const { isDeleting, deleteRoom } = useDeleteRoom();

  let typeColor = "text-zinc-900";

  switch (type) {
    case "Queen bed":
      typeColor = "text-yellow-600 bg-yellow-100";
      break;
    case "Double bed":
      typeColor = "text-red-600 bg-red-100";
      break;
    case "Luxury king":
      typeColor = "text-blue-600 bg-blue-100";
      break;
    case "Single bed":
      typeColor = "text-green-600 bg-green-100";
      break;
    default:
      typeColor = "text-green-600 bg-green-100";
  }

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
            <NewRoomForm
              roomToEdit={room}
              setIsNewRoomModalOpen={setIsNewRoomModalOpen}
            />
          </div>
        </div>
      )}
      <div className="w-full h-24 px-4 py-2 grid grid-cols-[1.5fr_1.2fr_1.5fr_2.8fr_1fr_0.7fr] gap-4 border-b-1 border-zinc-200 hover:bg-zinc-100">
        <section className="flex gap-3">
          <span className="w-34 h-19.5 rounded-lg">
            {image ? (
              <img
                src={image}
                alt={`room-${roomId}`}
                className="w-full h-full rounded-lg"
              />
            ) : (
              <div className="w-full h-full rounded-lg flex justify-center items-center border-2 text-zinc-400 border-zinc-300 text-3xl font-light">
                ?
              </div>
            )}
          </span>
          <div className="flex flex-col justify-evenly">
            <span className="font-bold">
              Room{" "}
              {Math.abs(Number(name)) < 100
                ? Math.abs(Number(name)) < 10
                  ? `00${Math.abs(Number(name))}`
                  : `0${Math.abs(Number(name))}`
                : Math.abs(Number(name))}
            </span>
          </div>
        </section>
        <section className="flex items-center justify-center">
          <p className={`font-normal ${typeColor} mr-4 px-2 py-1 rounded-md`}>
            {type}
          </p>
        </section>
        <section className="flex items-center font-light">
          <p>
            Can fit up to{" "}
            <span className="font-bold">
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </span>
          </p>
        </section>
        <section className="flex items-center font-light">
          <p>{desc}</p>
        </section>
        <section className="flex items-center">
          <span className="font-bold">{price.toFixed(2)}€ / night</span>
        </section>
        <section className="flex items-center justify-center gap-6">
          <button
            onClick={() => setIsNewRoomModalOpen(true)}
            disabled={false}
            className="text-[24px] cursor-pointer text-zinc-700 hover:text-zinc-950"
          >
            <BiEdit />
          </button>
          <button
            onClick={() => deleteRoom(room)}
            disabled={isDeleting}
            className="text-[24px] cursor-pointer text-zinc-700 hover:text-zinc-950"
          >
            <BiTrash />
          </button>
        </section>
      </div>
    </>
  );
}

export default RoomItem;
