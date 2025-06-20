import Sort from "../../ui/Sort";
import Filter from "../rooms/Filter";

function BookingsTableOperations() {
  return (
    <div className="flex font-semibold text-lg mr-2 mb-2 gap-4">
      <Filter
        field="status"
        options={[
          { value: "all", label: "All" },
          { value: "checked-out", label: "Checked out" },
          { value: "checked-in", label: "Checked in" },
          { value: "unconfirmed", label: "Unconfirmed" },
        ]}
      />
      <Sort
        field="sort"
        options={[
          { value: "startDate-desc", label: "Sort by date (recent first)" },
          { value: "startDate-asc", label: "Sort by date (earlier first)" },
          {
            value: "totalPrice-desc",
            label: "Sort by amount (high first)",
          },
          { value: "totalPrice-asc", label: "Sort by amount (low first)" },
        ]}
      ></Sort>
    </div>
  );
}

export default BookingsTableOperations;
