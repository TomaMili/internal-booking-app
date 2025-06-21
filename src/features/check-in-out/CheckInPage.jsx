import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useSettings } from "../settings/useSettings";
import { useReturnPage } from "../../hooks/useReturnPage";
import { useGetBooking } from "../bookings/useGetBooking";
import { useCheckIn } from "./useCheckIn";

import Spinner from "../../ui/Spinner";

import { formatCurrency } from "../../utils/helpers";

import BookingData from "../bookings/BookingData";

function CheckinPage() {
  const [confirmPaid, setConfirmPaid] = useState(false);
  const [addBreakfast, setAddBreakfast] = useState(false);

  const { booking, isLoading } = useGetBooking();
  const { settings, isLoading: isLoadingSettings } = useSettings();

  useEffect(() => setConfirmPaid(booking?.isPaid ?? false), [booking]);

  const moveBack = useReturnPage();
  const navigate = useNavigate();
  const { checkIn, isCheckingIn } = useCheckIn();

  if (isLoading || isLoadingSettings) return <Spinner />;

  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = booking;

  const optionalBreakfastPrice =
    settings.breakfastPrice * numNights * numGuests;

  function handleCheckin() {
    if (!confirmPaid) return;
    if (addBreakfast) {
      checkIn({
        bookingId,
        breakfast: {
          hasBreakfast: true,
          extrasPrice: optionalBreakfastPrice,
          totalPrice: totalPrice + optionalBreakfastPrice,
        },
      });
    } else {
      checkIn({ bookingId, breakfast: {} });
    }
  }

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">
          Check in booking #{booking.id}
        </h1>
        <button
          onClick={moveBack}
          className="text-[1.4rem] font-medium text-brand-600 bg-transparent border-none rounded-sm transition-colors hover:text-brand-700"
        >
          &larr; Back
        </button>
      </div>

      <div className="mb-6">
        <BookingData booking={booking} />
      </div>

      {!hasBreakfast && (
        <div className="bg-gray-50 border border-gray-100 rounded-lg p-6 mb-6">
          <label htmlFor="breakfast" className="flex items-center gap-3">
            <input
              id="breakfast"
              type="checkbox"
              checked={addBreakfast}
              onChange={() => {
                setAddBreakfast((prev) => !prev);
                setConfirmPaid(false);
              }}
              className="h-5 w-5 text-brand-600 border-gray-300 rounded focus:ring-brand-500"
            />
            <span className="text-[1.4rem]">
              Want to add breakfast for {formatCurrency(optionalBreakfastPrice)}
              ?
            </span>
          </label>
        </div>
      )}

      <div className="bg-gray-50 border border-gray-100 rounded-lg p-6 mb-6">
        <label htmlFor="confirm" className="flex items-start gap-3">
          <input
            id="confirm"
            type="checkbox"
            checked={confirmPaid}
            disabled={confirmPaid || isCheckingIn}
            onChange={() => setConfirmPaid((val) => !val)}
            className="mt-1 h-5 w-5 text-brand-600 border-gray-300 rounded focus:ring-brand-500 disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <span className="text-[1.4rem]">
            I confirm that {guests.name} has paid the total amount of{" "}
            {!addBreakfast
              ? formatCurrency(totalPrice)
              : `${formatCurrency(
                  totalPrice + optionalBreakfastPrice
                )} (${formatCurrency(totalPrice)} + ${formatCurrency(
                  optionalBreakfastPrice
                )})`}
          </span>
        </label>
      </div>

      <div className="flex justify-end gap-4">
        <button
          onClick={handleCheckin}
          disabled={!confirmPaid || isCheckingIn}
          className="text-[1.4rem] font-medium rounded-sm shadow-sm bg-brand-600 text-brand-50 px-6 py-3 transition-colors hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Check in booking #{bookingId}
        </button>
      </div>
    </>
  );
}

export default CheckinPage;
