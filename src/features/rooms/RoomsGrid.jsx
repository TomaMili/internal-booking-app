import RoomItem from "./RoomItem";
import Spinner from "../../ui/Spinner";
import ErrorMessage from "../../ui/ErrorMessage";
import { useGetRooms } from "./useGetRooms";
import AddRoom from "./AddRoom";
import Table from "../../ui/Table";
import Actions from "../../ui/Actions";

function RoomsGrid() {
  const { isPending, error, rooms } = useGetRooms();

  if (isPending) return <Spinner />;
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <>
      <section className="px-2 w-full h-full flex flex-col overflow-hidden">
        <div className="flex justify-between items-end">
          <div className="font-medium text-5xl mb-3 ml-2 flex items-end">
            All Rooms
            <div>
              <div className="px-2 mx-5 pb-1">
                <AddRoom />
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

        <Actions>
          <Table columns="1.5fr_1.2fr_1.5fr_2.8fr_1fr_0.7fr">
            <Table.Header>
              <div className="flex items-center border-r border-zinc-200">
                Room
              </div>
              <div className="flex items-center border-r border-zinc-200">
                Type
              </div>
              <div className="flex items-center border-r border-zinc-200">
                Capacity
              </div>
              <div className="flex items-center border-r border-zinc-200">
                Description
              </div>
              <div className="flex items-center  border-zinc-200">Price</div>
            </Table.Header>

            <Table.Body
              data={rooms}
              render={(room) => (
                <Table.Row key={room.id}>
                  <RoomItem room={room} />
                </Table.Row>
              )}
            />
          </Table>
        </Actions>
      </section>
    </>
  );
}

export default RoomsGrid;
