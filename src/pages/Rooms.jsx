import { useEffect } from "react";
import { getRooms } from "../services/apiRooms";

function Rooms() {
  useEffect(function () {
    getRooms().then((data) => console.log(data));
  }, []);

  return (
    <div>
      <img
        src="https://ulhzgjehimepduybfjcw.supabase.co/storage/v1/object/public/room-images//room-3.webp"
        alt="room-3"
      />
    </div>
  );
}

export default Rooms;
