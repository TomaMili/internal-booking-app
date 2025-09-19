import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/constants";

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : 1;
  const pageCount = Math.ceil(count / PAGE_SIZE);

  const start = (currentPage - 1) * PAGE_SIZE + 1;
  const end = currentPage === pageCount ? count : currentPage * PAGE_SIZE;

  const handlePageChange = (newPage) => {
    searchParams.set("page", newPage);
    setSearchParams(searchParams);
  };

  if (pageCount <= 1) return null;

  return (
    <div className="w-full flex items-center justify-between">
      <p className="text-[1.4rem] ml-3">
        Showing <span className="font-semibold">{start}</span> to{" "}
        <span className="font-semibold">{end}</span> of{" "}
        <span className="font-semibold">{count}</span> results
      </p>
      <div className="flex gap-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`flex items-center gap-1.5 py-2 px-5 rounded-sm font-medium text-[1.4rem] transition-colors bg-gray-50 ${
            currentPage === 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-brand-600 hover:text-brand-50"
          }`}
        >
          <HiChevronLeft className="w-6 h-6" />
          <span>Previous</span>
        </button>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === pageCount}
          className={`flex items-center gap-1.5 py-2 px-5 rounded-sm font-medium text-[1.4rem] transition-colors bg-gray-50 ${
            currentPage === pageCount
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-brand-600 hover:text-brand-50"
          }`}
        >
          <span>Next</span>
          <HiChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
