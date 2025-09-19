import { Link } from "react-router-dom";
import { Flag } from "../../ui/Flag";
import Button from "../../ui/Button";
import CheckoutButton from "./CheckoutButton";
import StatusTag from "../../ui/StatusTag";

function TodayItem({ activity }) {
  const { id, status, guests, numNights } = activity;

  return (
    <li
      className="
        grid 
        grid-cols-[9rem_2rem_1fr_7rem_9rem] 
        gap-3 
        items-center 
        text-base 
        py-2 
        border-b border-gray-100
        first:border-t
      "
    >
      {/* Status Tag */}
      {status === "unconfirmed" && <StatusTag type="green">Arriving</StatusTag>}
      {status === "checked-in" && <StatusTag type="blue">Departing</StatusTag>}

      {/* Guest flag */}
      <Flag src={guests.flag} alt={`Flag of ${guests.country}`} />

      {/* Guest name */}
      <div className="font-medium text-xl">{guests.name}</div>

      {/* Nights */}
      <div className="text-xl">{numNights} nights</div>

      {/* Action button */}
      {status === "unconfirmed" && (
        <Button size="small" type="small" as={Link} to={`/checkin/${id}`}>
          Check in
        </Button>
      )}
      {status === "checked-in" && <CheckoutButton bookingId={id} />}
    </li>
  );
}

export default TodayItem;
