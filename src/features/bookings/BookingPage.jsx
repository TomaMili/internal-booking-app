import { HiArrowUpOnSquare } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

import { useGetBooking } from "./useGetBooking";
import { useReturnPage } from "../../hooks/useReturnPage";
import { useDeleteBooking } from "./useDeleteBooking";
import { useCheckOut } from "../check-in-out/useCheckOut";

import Spinner from "../../ui/Spinner";
import Modal from "../../ui/Modal";
import EmptyPage from "../../ui/EmptyPage";
import BookingData from "./BookingData";
import StatusTag from "../../ui/StatusTag";
import ConfirmDeletion from "../../ui/ConfirmDeletion";

function BookingPage() {
  const { booking, isLoading, error } = useGetBooking();
  const { isDeleting, deleteBooking } = useDeleteBooking();
  const { checkOut, isCheckingOut } = useCheckOut();

  const returnPage = useReturnPage();
  const navigate = useNavigate();

  if (isLoading) return <Spinner />;
  if (!booking) return <EmptyPage resourceName="booking" />;

  const { status, id: bookingId } = booking;
  const statusToColor = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-10">
          <h1 className="text-3xl font-semibold leading-tight">
            Booking #{bookingId}
          </h1>
          <StatusTag type={statusToColor[status]}>
            {status.replace("-", " ")}
          </StatusTag>
        </div>
        <button
          onClick={returnPage}
          className="text-[1.4rem] font-medium text-emerald-600 bg-transparent border-none rounded-sm transition-colors hover:text-emerald-700 cursor-pointer"
        >
          &larr; Back
        </button>
      </div>

      <BookingData booking={booking} />

      <div className="flex gap-5 justify-end mt-6">
        {status === "unconfirmed" && (
          <button
            onClick={() => navigate(`/checkin/${bookingId}`)}
            className="text-[1.4rem] font-medium rounded-lg shadow-sm bg-emerald-700 cursor-pointer text-emerald-50 px-[1.6rem] py-3 transition-colors hover:bg-emerald-800"
          >
            Check in
          </button>
        )}

        {status === "checked-in" && (
          <button
            onClick={() => {
              checkOut(bookingId, { onSettled: () => navigate(-1) });
            }}
            disabled={isCheckingOut}
            className="flex cursor-pointer items-center gap-2 text-[1.4rem] font-medium rounded-lg shadow-sm bg-brand-600 text-brand-50 px-[1.6rem] py-3 transition-colors hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <HiArrowUpOnSquare className="w-5 h-5" />
            Check out
          </button>
        )}

        <Modal>
          <Modal.Open opens="delete">
            <button
              disabled={isDeleting}
              className="text-[1.4rem] cursor-pointer font-medium rounded-lg shadow-sm bg-red-700 text-red-100 px-[1.6rem] py-3 transition-colors hover:bg-red-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Delete booking
            </button>
          </Modal.Open>
          <Modal.Window name="delete">
            <ConfirmDeletion
              resourceName="booking"
              disabled={isDeleting}
              onConfirm={() =>
                deleteBooking(bookingId, { onSettled: () => navigate(-1) })
              }
            />
          </Modal.Window>
        </Modal>
      </div>
    </>
  );
}

export default BookingPage;
