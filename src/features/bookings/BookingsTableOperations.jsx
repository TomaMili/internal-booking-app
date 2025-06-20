import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import Sort from "../../ui/Sort";
import Filter from "../rooms/Filter";

const filterOptions = [
  { value: "all", label: "All" },
  { value: "checked-out", label: "Checked out" },
  { value: "checked-in", label: "Checked in" },
  { value: "unconfirmed", label: "Unconfirmed" },
];

const sortOptions = [
  { value: "startDate-desc", label: "Date (recent first)" },
  { value: "startDate-asc", label: "Date (earlier first)" },
  { value: "totalPrice-desc", label: "Amount (high first)" },
  { value: "totalPrice-asc", label: "Amount (low first)" },
];

export default function BookingsTableOperations() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const currentSortBy = searchParams.get("sortBy") || "startDate-desc";

  useEffect(() => {
    filterOptions.forEach(({ value: filterVal }) => {
      const filter =
        !filterVal || filterVal === "all"
          ? null
          : { field: "status", value: filterVal };

      sortOptions.forEach(({ value: sortVal }) => {
        const [field, dir] = sortVal.split("-");
        const sort = { field, dir };

        queryClient.prefetchQuery({
          queryKey: ["bookings", filter, sort],
          queryFn: () => getBookings({ filter, sort }),
        });
      });
    });
  }, [queryClient]);

  return (
    <div className="flex font-semibold text-lg mr-2 mb-2 gap-4">
      <Filter field="status" options={filterOptions} />
      <Sort field="sortBy" options={sortOptions} defaultValue={currentSortBy} />
    </div>
  );
}
