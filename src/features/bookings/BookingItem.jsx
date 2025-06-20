import { format, isToday } from "date-fns";
import {
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiEye,
  HiTrash,
} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

import Modal from "../../ui/Modal";
import Table from "../../ui/Table";
import Actions from "../../ui/Actions";
import ConfirmDeletion from "../../ui/ConfirmDeletion";

import StatusTag from "../../ui/StatusTag";

import { formatCurrency, formatDistanceFromNow } from "../../utils/helpers";

// import { useCheckout } from "../check-in-out/useCheckout";
// import { useDeleteBooking } from "./useDeleteBooking";

function BookingItem({
  booking: {
    id: bookingId,
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    totalPrice,
    extrasPrice,
    status,
    guests: { name: guestName, email },
    rooms: { name: roomName, image },
  },
}) {
  const navigate = useNavigate();
  //   const { checkout, isCheckingOut } = useCheckout();
  //   const { deleteBooking, isDeleting } = useDeleteBooking();

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <>
      <section className="flex gap-3">
        <span className="w-34 h-19.5 rounded-lg">
          {image ? (
            <img
              src={image}
              alt={`room-${roomName}`}
              className="w-full h-full rounded-lg"
            />
          ) : (
            <div className="w-full h-full rounded-lg flex justify-center items-center border-2 text-zinc-400 border-zinc-300 text-3xl font-light">
              ?
            </div>
          )}
        </span>
        <div className="flex flex-col justify-evenly">
          <span className="font-bold text-lg">
            Room{" "}
            {Math.abs(Number(roomName)) < 100
              ? Math.abs(Number(roomName)) < 10
                ? `00${Math.abs(Number(roomName))}`
                : `0${Math.abs(Number(roomName))}`
              : Math.abs(Number(roomName))}
          </span>
        </div>
      </section>

      <div className="flex flex-col gap-1 justify-center">
        <span className="font-bold text-lg">{guestName}</span>
        <span className="text-zinc-500 text-xs">{email}</span>
      </div>

      <div className="flex flex-col gap-1 justify-center">
        <span className="font-bold text-lg">
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}{" "}
          &rarr; {numNights} night stay
        </span>
        <span className="text-zinc-500 text-xs">
          {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
          {format(new Date(endDate), "MMM dd yyyy")}
        </span>
      </div>

      <StatusTag type={statusToTagName[status]}>
        {status.replace("-", " ")}
      </StatusTag>

      <div className="font-bold text-lg text-emerald-800 justify-center flex flex-col">
        {formatCurrency(totalPrice)}
      </div>

      <Modal>
        <Actions.Action>
          <Actions.Toggle id={bookingId} />
          <Actions.List id={bookingId}>
            <Actions.Button
              icon={<HiEye />}
              onClick={() => navigate(`/bookings/${bookingId}`)}
            >
              See details
            </Actions.Button>

            {status === "unconfirmed" && (
              <Actions.Button
                icon={<HiArrowDownOnSquare />}
                onClick={() => navigate(`/checkin/${bookingId}`)}
              >
                Check in
              </Actions.Button>
            )}

            {status === "checked-in" && (
              <Actions.Button
                icon={<HiArrowUpOnSquare />}
                // onClick={() => checkout(bookingId)}
                // disabled={isCheckingOut}
              >
                Check out
              </Actions.Button>
            )}

            <Modal.Open opens="delete">
              <Actions.Button icon={<HiTrash />}>Delete booking</Actions.Button>
            </Modal.Open>
          </Actions.List>
        </Actions.Action>

        <Modal.Window name="delete">
          <ConfirmDeletion
            resourceName="booking"
            // disabled={isDeleting}
            // onConfirm={() => deleteBooking(bookingId)}
          />
        </Modal.Window>
      </Modal>
    </>
  );
}

export default BookingItem;
