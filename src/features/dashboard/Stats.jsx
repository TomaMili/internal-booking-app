import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings = [], confirmedStays = [], numDays, roomCount }) {
  const safeBookings = Array.isArray(bookings) ? bookings : [];
  const safeConfirmedStays = Array.isArray(confirmedStays)
    ? confirmedStays
    : [];

  const numBookings = safeBookings.length;
  const sales = safeBookings.reduce(
    (acc, cur) => acc + (cur.totalPrice || 0),
    0
  );
  const checkins = safeConfirmedStays.length;
  const occupation =
    safeConfirmedStays.reduce((acc, cur) => acc + (cur.numNights || 0), 0) /
    (numDays * roomCount || 1); // prevent divide by zero

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase size={30} />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes size={30} />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays size={30} />}
        value={checkins}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar size={30} />}
        value={Math.round(occupation * 100) + "%"}
      />
    </>
  );
}

export default Stats;
