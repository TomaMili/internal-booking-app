import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getStaysAfterDate } from "../../services/apiBookings";

export function useRecentStays() {
  const [searchParams] = useSearchParams();

  const numDaysParam = searchParams.get("last");
  const numDays = Number(numDaysParam) > 0 ? Number(numDaysParam) : 7;
  const queryDate = subDays(new Date(), numDays).toISOString();

  const { isLoading, data, error } = useQuery({
    queryKey: ["stays", { last: numDays }],
    queryFn: async () => {
      const response = await getStaysAfterDate(queryDate);

      // ✅ Normalize: make sure we always return an array
      if (Array.isArray(response)) return response;
      if (response?.data && Array.isArray(response.data)) return response.data;
      return []; // fallback
    },
  });

  const stays = Array.isArray(data) ? data : [];

  const confirmedStays = stays.filter(
    (stay) => stay?.status === "checked-in" || stay?.status === "checked-out"
  );

  return { isLoading, error, stays, confirmedStays, numDays };
}
