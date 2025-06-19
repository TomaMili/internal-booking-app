import Modal from "../../ui/Modal";
import NewRoomForm from "./NewRoomForm";

function AddRoom() {
  return (
    <Modal>
      <Modal.Open opens="room-form">
        <button className="text-lg cursor-pointer px-4 py-2 bg-emerald-700 text-zinc-100 rounded-md hover:bg-emerald-600 transition duration-300">
          + Add new room
        </button>
      </Modal.Open>
      <Modal.Window name="room-form">
        <NewRoomForm />
      </Modal.Window>
    </Modal>
  );
}

export default AddRoom;
