import TableOperations from "../rooms/RoomsTableOperations";

import Actions from "../../ui/Actions";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";

import BookingItem from "./BookingItem";
import { useGetBookings } from "./useGetBookings";
import BookingsTableOperations from "./BookingsTableOperations";

function BookingGrid() {
  const { isLoading, error, bookings } = useGetBookings();

  if (isLoading) return <Spinner />;
  // if (!bookings.length) return <Empty resourceName="bookings" />;

  return (
    <>
      <section className="px-2 w-full h-full flex flex-col overflow-hidden">
        <div className="flex justify-between items-end">
          <div className="font-medium text-5xl mb-3 ml-2 flex items-end">
            All Bookings
            <div>
              <div className="px-2 mx-5 pb-1">{/* <AddRoom /> */}</div>
            </div>
          </div>
          <BookingsTableOperations />
        </div>

        <Actions>
          <Table columns="2.5fr_2.2fr_2.8fr_1.5fr_1fr_0.5fr">
            <Table.Header>
              <div className="flex items-center border-r border-zinc-200">
                Room
              </div>
              <div className="flex items-center border-r border-zinc-200">
                Guest
              </div>
              <div className="flex items-center border-r border-zinc-200">
                Date
              </div>
              <div className="flex items-center border-r border-zinc-200">
                Status
              </div>
              <div className="flex items-center border-zinc-200">Price</div>
              <div className="flex items-center  border-zinc-200"></div>
            </Table.Header>

            <Table.Body
              data={bookings}
              render={(booking) => (
                <Table.Row key={booking.id}>
                  <BookingItem booking={booking} />
                </Table.Row>
              )}
            />
          </Table>
        </Actions>
      </section>
    </>
  );
}

export default BookingGrid;
