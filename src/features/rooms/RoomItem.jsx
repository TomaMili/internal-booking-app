import { BiTrash, BiEdit } from "react-icons/bi";
import NewRoomForm from "./NewRoomForm";
import { useDeleteRoom } from "./useDeleteRoom";
import Modal from "../../ui/Modal";
import ConfirmDeletion from "../../ui/ConfirmDeletion";
import Actions from "../../ui/Actions";

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
      <section className="flex font-light overflow-y-auto">
        <p className="">{desc}</p>
      </section>
      <section className="flex items-center">
        <span className="font-bold text-green-700">
          {discount > 0 ? `${discount.toFixed(2)} €` : "-"}
        </span>
      </section>
      <section className="flex relative items-center">
        <span className="font-bold">{price.toFixed(2)}€ / night</span>
        <section className="absolute right-0 -top-2">
          <Modal>
            <Actions.Action>
              <Actions.Toggle id={room.id} />
              <Actions.List id={room.id}>
                <Modal.Open opens="edit">
                  <Actions.Button icon={<BiEdit />}>Edit</Actions.Button>
                </Modal.Open>
                <Modal.Open opens="delete">
                  <Actions.Button icon={<BiTrash />}>Delete</Actions.Button>
                </Modal.Open>
              </Actions.List>
              <Modal.Window name="edit">
                <NewRoomForm roomToEdit={room} />
              </Modal.Window>
              <Modal.Window name="delete">
                <ConfirmDeletion
                  resName={room.name}
                  onConfirm={() => deleteRoom(room)}
                  onCloseModal={() => close()}
                  disabled={isDeleting}
                />
              </Modal.Window>
            </Actions.Action>
          </Modal>
        </section>
      </section>
    </>
  );
}

export default RoomItem;
