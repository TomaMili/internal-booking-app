import { useRecentStays } from "./useRecentStays";
import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import Stats from "./Stats";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";
import { useGetRooms } from "../rooms/useGetRooms";

function DashboardLayout() {
  const { bookings, isLoading: isLoading1 } = useRecentBookings();
  const { confirmedStays, isLoading: isLoading2, numDays } = useRecentStays();
  const { rooms, isLoading: isLoading3 } = useGetRooms();

  if (isLoading1 || isLoading2 || isLoading3) return <Spinner />;

  return (
    <div
      className="
        grid 
        grid-cols-4 
        grid-rows-[auto_20rem_auto] 
        gap-6
      "
    >
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        roomCount={rooms.length}
      />
      <TodayActivity />
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart bookings={bookings} numDays={numDays} />
    </div>
  );
}

export default DashboardLayout;
