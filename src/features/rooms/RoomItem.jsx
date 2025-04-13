import { BiTrash } from "react-icons/bi";

function RoomItem({ room }) {
  const { id, name, type, capacity, price, discount, desc, image } = room;

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
  }

  return (
    <div className="w-full h-24 px-4 py-2 grid grid-cols-[1.5fr_1.2fr_1.5fr_2.8fr_1fr_0.7fr] gap-4 border-b-1 border-zinc-200 hover:bg-zinc-100">
      <section className="flex gap-3">
        <span className="w-34 h-18 rounded-lg">
          <img
            src={image}
            alt={`room-${id}`}
            className="w-34 h-19.5 rounded-lg"
          />
        </span>
        <div className="flex flex-col justify-evenly">
          <span className="font-bold">Room {name}</span>
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
      <section className="flex items-center justify-center">
        <button className="text-[24px] cursor-pointer text-zinc-700 hover:text-zinc-950">
          <BiTrash />
        </button>
      </section>
    </div>
  );
}

export default RoomItem;
