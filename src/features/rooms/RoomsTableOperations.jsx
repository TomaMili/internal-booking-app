import Filter from "./Filter";
import Sort from "../../ui/Sort";

function RoomsTableOperations() {
  return (
    <div className="flex font-semibold text-lg mr-2 mb-2 gap-4">
      <Filter
        field="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With discount" },
        ]}
      />
      {/* <span className="font-extralight leading-6">|</span> */}
      <Sort
        field="sort"
        options={[
          { value: "price-asc", label: "Sort by price (low-high)" },
          { value: "price-desc", label: "Sort by price (high-low)" },
          { value: "capacity-asc", label: "Sort by capacity (low-high)" },
          { value: "capacity-desc", label: "Sort by capacity (high-low)" },
          { value: "name-asc", label: "Sort by name (A-Z)" },
          { value: "name-desc", label: "Sort by name (Z-A)" },
        ]}
      ></Sort>
    </div>
  );
}

export default RoomsTableOperations;
