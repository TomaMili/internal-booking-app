function RoomItem({ room }) {
  const { id, name, type, capacity, price, discount, desc, image } = room;
  return (
    <div className="w-full h-24 px-4 py-2 grid grid-cols-[1.5fr_1fr_1.5fr_2.8fr_1fr_0.7fr] gap-4">
      <section className="flex gap-3">
        <span className="w-30 h-20 rounded-lg">
          <img
            src={image}
            alt={`room-${id}`}
            className="w-30 h-20 rounded-lg"
          />
        </span>
        <div className="flex flex-col justify-evenly">
          <span className="font-bold">Room {name}</span>
        </div>
      </section>
      <section className="flex items-center justify-center">
        <p
          className={`font-semibold text-${
            type === `Queen bed` ? `yellow-400` : `red-400`
          }`}
        >
          {type}
        </p>
      </section>
      <section className="flex items-center">
        <p>Can fit up to {capacity} people</p>
      </section>

      <section className="flex items-center">
        <p>{desc}</p>
      </section>
      <section className="flex items-center">
        <span>{price}€</span>
      </section>
      <section className="flex items-center justify-center">
        <span>
          <button className="bg-amber-300 px-6 py-2 rounded-2xl">delete</button>
        </span>
      </section>
    </div>
  );
}

export default RoomItem;
