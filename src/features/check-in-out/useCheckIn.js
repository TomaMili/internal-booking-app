import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useReturnPage } from "../../hooks/useReturnPage";

export function useCheckIn() {
  const qc = useQueryClient();
  const returnPage = useReturnPage();

  const { mutate: checkIn, isLoading: isCheckingIn } = useMutation({
    mutationFn: ({ bookingId, breakfast }) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
        ...breakfast,
      }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked in`);
      qc.invalidateQueries({ active: true });
      returnPage();
    },
    onError: () => {
      toast.error("Error while checking in");
    },
  });

  return { checkIn, isCheckingIn };
}
