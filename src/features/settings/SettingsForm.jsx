import { Bed, Euro, User } from "lucide-react";
import { useSettings } from "./useSettings";
import Spinner from "../../ui/Spinner";
import ErrorMessage from "../../ui/ErrorMessage";
import { useUpdateSetting } from "./useUpdateSetting";

function SettingsForm() {
  const {
    isLoading,
    error,
    settings: {
      maxGuestsPerRoom,
      maxBookingLength,
      minBookingLength,
      breakfastPrice,
    } = {},
  } = useSettings();

  const { isUpdating, updateSetting } = useUpdateSetting();

  if (isLoading) return <Spinner />;
  if (error) return <ErrorMessage message={error.message} />;

  function handleUpdate(e, fieldName) {
    const { value } = e.target;

    if (!value) return;
    updateSetting({ [fieldName]: value });
  }

  return (
    <section className="px-2 py-10 w-full flex flex-col overflow-hidden">
      <form className="max-w-xl h-full p-6 bg-white rounded-2xl shadow-xl space-y-5">
        <label
          htmlFor="max-nights"
          className="relative text-sm font-medium text-zinc-700 mb-1 "
        >
          Maximum nights / booking
          <input
            type="number"
            id="max-nights"
            name="max-nights"
            required
            disabled={isUpdating}
            className="w-full pl-10 pr-4 py-2 border border-zinc-300 rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-700 focus:outline-none transition mb-6"
            defaultValue={maxBookingLength}
            onBlur={(e) => handleUpdate(e, "maxBookingLength")}
          />
          <Bed className="absolute left-3 top-7 h-5 w-5 text-zinc-400" />
        </label>
        <label
          htmlFor="min-nights"
          className="relative text-sm font-medium text-zinc-700 mb-1"
        >
          Minimum nights / booking
          <input
            type="number"
            id="min-nights"
            name="min-nights"
            required
            disabled={isUpdating}
            className="w-full pl-10 pr-4 py-2 border border-zinc-300 rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-700 focus:outline-none transition mb-6"
            defaultValue={minBookingLength}
            onBlur={(e) => handleUpdate(e, "minBookingLength")}
          />
          <Bed className="absolute left-3 top-7 h-5 w-5 text-zinc-400" />
        </label>
        <label
          htmlFor="max-guests"
          className="relative text-sm font-medium text-zinc-700 mb-1"
        >
          Maximum guests / booking
          <input
            type="number"
            id="max-guests"
            name="max-guests"
            required
            disabled={isUpdating}
            className="w-full pl-10 pr-4 py-2 border border-zinc-300 rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-700 focus:outline-none transition mb-6"
            defaultValue={maxGuestsPerRoom}
            onBlur={(e) => handleUpdate(e, "maxGuestsPerRoom")}
          />
          <User className="absolute left-3 top-7 h-5 w-5 text-zinc-400" />
        </label>
        <label
          htmlFor="breakfast"
          className="relative text-sm font-medium text-zinc-700 mb-1"
        >
          Breakfast price
          <input
            type="number"
            id="breakfast"
            name="breakfast"
            required
            disabled={isUpdating}
            className="w-full pl-10 pr-4 py-2 border border-zinc-300 rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-700 focus:outline-none transition "
            defaultValue={breakfastPrice}
            onBlur={(e) => handleUpdate(e, "breakfastPrice")}
          />
          <Euro className="absolute left-3 top-7 h-5 w-5 text-zinc-400" />
        </label>
      </form>
    </section>
  );
}

export default SettingsForm;
