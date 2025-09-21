import DashboardBox from "./DashboardBox";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useDarkMode } from "../../context/DarkModeContext";
import { eachDayOfInterval, format, isSameDay, subDays } from "date-fns";

function SalesChart({ bookings, numDays }) {
  const { isDarkMode } = useDarkMode();

  // ✅ ensure bookings is always an array
  const safeBookings = Array.isArray(bookings) ? bookings : [];

  const allDates = eachDayOfInterval({
    start: subDays(new Date(), numDays - 1),
    end: new Date(),
  });

  const data = allDates.map((date) => {
    const bookingsForDate = safeBookings.filter((booking) =>
      isSameDay(date, new Date(booking.created_at))
    );

    return {
      label: format(date, "MMM dd"),
      totalSales: bookingsForDate.reduce(
        (acc, cur) => acc + (cur.totalPrice || 0),
        0
      ),
      extrasSales: bookingsForDate.reduce(
        (acc, cur) => acc + (cur.extrasPrice || 0),
        0
      ),
    };
  });

  const colors = !isDarkMode
    ? {
        totalSales: { stroke: "#4f46e5", fill: "#4f46e5" },
        extrasSales: { stroke: "#22c55e", fill: "#22c55e" },
        text: "#e5e7eb",
        background: "#18212f",
      }
    : {
        totalSales: { stroke: "#4f46e5", fill: "#c7d2fe" },
        extrasSales: { stroke: "#16a34a", fill: "#dcfce7" },
        text: "#374151",
        background: "#fff",
      };

  return (
    <DashboardBox
      className="
        col-span-4
        [&_.recharts-cartesian-grid-horizontal_line]:stroke-gray-300
        [&_.recharts-cartesian-grid-vertical_line]:stroke-gray-300
      "
    >
      <h2 className="font-medium text-xl ml-2">
        Sales from {format(allDates.at(0), "MMM dd yyyy")} &mdash;{" "}
        {format(allDates.at(-1), "MMM dd yyyy")}
      </h2>

      <ResponsiveContainer height={216} width="100%">
        <AreaChart data={data}>
          <XAxis
            dataKey="label"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <YAxis
            unit="$"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <CartesianGrid strokeDasharray="4" />
          <Tooltip contentStyle={{ backgroundColor: colors.background }} />
          <Area
            dataKey="totalSales"
            type="monotone"
            stroke={colors.totalSales.stroke}
            fill={colors.totalSales.fill}
            strokeWidth={2}
            name="Total sales"
            unit="$"
          />
          <Area
            dataKey="extrasSales"
            type="monotone"
            stroke={colors.extrasSales.stroke}
            fill={colors.extrasSales.fill}
            strokeWidth={2}
            name="Extras sales"
            unit="$"
          />
        </AreaChart>
      </ResponsiveContainer>
    </DashboardBox>
  );
}

export default SalesChart;
