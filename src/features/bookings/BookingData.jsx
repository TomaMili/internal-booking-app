import { format, isToday } from "date-fns";
import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
  HiOutlineHomeModern,
} from "react-icons/hi2";
import { formatDistanceFromNow, formatCurrency } from "../../utils/helpers";

function BookingData({ booking }) {
  const {
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    roomPrice,
    extrasPrice,
    totalPrice,
    hasBreakfast,
    description,
    isPaid,
    guests: { name: guestName, email, nationality, flag, nationalIDnum },
    rooms: { name: roomName },
  } = booking;

  const renderDataItem = (icon, label, content) => (
    <div className="flex items-center gap-6 py-3">
      <span className="flex items-center gap-3 font-medium text-[1.4rem]">
        <span className="w-8 h-8 text-brand-600 flex-shrink-0">{icon}</span>
        <span>{label}</span>
      </span>
      <div className="text-[1.4rem]">{content}</div>
    </div>
  );

  return (
    <section className="bg-gray-50 border border-gray-100 rounded-lg overflow-hidden">
      <header className="bg-brand-500 text-brand-50 p-8 flex justify-between items-center">
        <div className="flex items-center gap-6 text-xl font-semibold">
          <HiOutlineHomeModern className="w-8 h-8" />
          <p className="flex items-baseline">
            {numNights} nights in Cabin{" "}
            <span className="ml-1 font-bold text-2xl">{roomName}</span>
          </p>
        </div>
        <p className="text-lg">
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) — {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>
      </header>

      <div className="p-8 pt-6">
        <div className="flex items-center gap-4 mb-4 text-gray-700">
          {flag && (
            <img
              src={flag}
              alt={`Flag of ${nationality}`}
              className="max-w-8 rounded-sm block border-1 border-zinc-200"
            />
          )}
          <p className="font-medium">
            {guestName} {numGuests > 1 ? `+ ${numGuests - 1} guests` : ""}
          </p>
          <span className="text-gray-400">•</span>
          <p>{email}</p>
          <span className="text-gray-400">•</span>
          <p>National ID {nationalIDnum}</p>
        </div>

        {description &&
          renderDataItem(
            <HiOutlineChatBubbleBottomCenterText className="w-8 h-8 text-brand-600" />,
            "Observations",
            description
          )}
        {renderDataItem(
          <HiOutlineCheckCircle className="w-8 h-8 text-brand-600" />,
          "Breakfast included?",
          hasBreakfast ? "Yes" : "No"
        )}

        <div
          className={`flex items-center justify-between p-4 mt-6 rounded-sm shadow-sm \${
            isPaid ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {renderDataItem(
            <HiOutlineCurrencyDollar className="w-8 h-8 text-current" />,
            "Total price",
            <>
              {formatCurrency(totalPrice)}
              {hasBreakfast &&
                ` (${formatCurrency(roomPrice)} cabin + ${formatCurrency(
                  extrasPrice
                )} breakfast)`}
            </>
          )}
          <p className="uppercase font-semibold">
            {isPaid ? "Paid" : "Will pay at property"}
          </p>
        </div>
      </div>

      <footer className="p-4 text-sm text-gray-500 text-right">
        <p>Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}</p>
      </footer>
    </section>
  );
}

export default BookingData;
