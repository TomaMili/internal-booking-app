import RoomItem from "./RoomItem";
import Spinner from "../../ui/Spinner";
import ErrorMessage from "../../ui/ErrorMessage";
import { useGetRooms } from "./useGetRooms";
import AddRoom from "./AddRoom";
import Table from "../../ui/Table";
import Actions from "../../ui/Actions";
import TableOperations from "./RoomsTableOperations";
import { useSearchParams } from "react-router-dom";

function RoomsGrid() {
  const { isPending, error, rooms } = useGetRooms();
  const [searchParams] = useSearchParams();

  if (isPending) return <Spinner />;
  if (error) return <ErrorMessage message={error.message} />;

  const filterVal = searchParams.get("discount") || "all";

  let filteredRooms;
  if (filterVal === "all") filteredRooms = rooms;
  if (filterVal === "no-discount")
    filteredRooms = rooms.filter((room) => room.discount === 0);
  if (filterVal === "with-discount")
    filteredRooms = rooms.filter((room) => room.discount > 0);

  const sortBy = searchParams.get("sortBy") || "price-asc";
  const [field, direction] = sortBy.split("-");
  const mod = direction === "asc" ? 1 : -1;
  let sortedRooms = filteredRooms.sort((a, b) => (a[field] - b[field]) * mod);

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

          <TableOperations />
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
              <div className="flex items-center border-r border-zinc-200">
                Discount
              </div>
              <div className="flex items-center  border-zinc-200">Price</div>
            </Table.Header>

            <Table.Body
              data={sortedRooms}
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
