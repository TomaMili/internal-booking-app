import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { getRooms } from "../../services/apiRooms";
import { useSearchParams } from "react-router-dom";
import Filter from "./Filter";
import Sort from "../../ui/Sort";

const filterOptions = [
  { value: "all", label: "All" },
  { value: "no-discount", label: "No discount" },
  { value: "with-discount", label: "With discount" },
];

const sortOptions = [
  { value: "price-asc", label: "Sort by price (low-high)" },
  { value: "price-desc", label: "Sort by price (high-low)" },
  { value: "capacity-asc", label: "Sort by capacity (low-high)" },
  { value: "capacity-desc", label: "Sort by capacity (high-low)" },
  { value: "name-asc", label: "Sort by name (A-Z)" },
  { value: "name-desc", label: "Sort by name (Z-A)" },
];

export default function RoomsTableOperations() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const currentSort = searchParams.get("sort") || "price-asc";

  useEffect(() => {
    filterOptions.forEach(({ value: discountVal }) => {
      const filter =
        !discountVal || discountVal === "all"
          ? null
          : { field: "discount", value: discountVal };

      sortOptions.forEach(({ value: sortVal }) => {
        const [field, dir] = sortVal.split("-");
        const sort = { field, dir };
        queryClient.prefetchQuery({
          queryKey: ["rooms", filter, sort],
          queryFn: () => getRooms({ filter, sort }),
        });
      });
    });
  }, [queryClient]);

  return (
    <div className="flex font-semibold text-lg mr-2 mb-2 gap-4">
      <Filter field="discount" options={filterOptions} />
      <Sort field="sort" options={sortOptions} defaultValue={currentSort} />
    </div>
  );
}
