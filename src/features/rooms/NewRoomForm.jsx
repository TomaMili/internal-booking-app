import { Bed, User, Euro, Percent, FileText, Type } from "lucide-react";

function NewRoomForm() {
  return (
    <form className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-xl space-y-6">
      <h2 className="text-2xl font-bold text-zinc-800">Add a New Room</h2>

      {/* Room Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-zinc-700 mb-1"
        >
          Room Name
        </label>
        <div className="relative">
          <input
            type="text"
            id="name"
            required
            className="w-full pl-10 pr-4 py-2 border border-zinc-300 rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-700 focus:outline-none transition"
          />
          <Bed className="absolute left-3 top-2.5 h-5 w-5 text-zinc-400" />
        </div>
      </div>

      {/* Room Type */}
      <div>
        <label
          htmlFor="type"
          className="block text-sm font-medium text-zinc-700 mb-1"
        >
          Room Type
        </label>
        <div className="relative">
          <select
            id="type"
            name="type"
            required
            className="cursor-pointer w-full pl-10 pr-4 py-2 border border-zinc-300 rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-700 focus:outline-none transition"
          >
            <option value="">Select a type</option>
            <option value="Luxury king">Luxury king</option>
            <option value="Queen bed">Queen bed</option>
            <option value="Single bed">Single bed</option>
            <option value="Double bed">Double bed</option>
            <option value="Other">Other</option>
          </select>
          <Type className="absolute left-3 top-2.5 h-5 w-5 text-zinc-400" />
        </div>
      </div>

      {/* Capacity */}
      <div>
        <label
          htmlFor="capacity"
          className="block text-sm font-medium text-zinc-700 mb-1"
        >
          Capacity
        </label>
        <div className="relative">
          <input
            type="number"
            id="capacity"
            min={1}
            required
            className="w-full pl-10 pr-4 py-2 border border-zinc-300 rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-700 focus:outline-none transition"
          />
          <User className="absolute left-3 top-2.5 h-5 w-5 text-zinc-400" />
        </div>
      </div>

      {/* Price */}
      <div>
        <label
          htmlFor="price"
          className="block text-sm font-medium text-zinc-700 mb-1"
        >
          Price per Night (€)
        </label>
        <div className="relative">
          <input
            type="number"
            id="price"
            min={0}
            required
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-700 focus:outline-none transition"
          />
          <Euro className="absolute left-3 top-2.5 h-5 w-5 text-zinc-400" />
        </div>
      </div>

      {/* Discount */}
      <div>
        <label
          htmlFor="discount"
          className="block text-sm font-medium text-zinc-700 mb-1"
        >
          Discount (%)
        </label>
        <div className="relative">
          <input
            type="number"
            id="discount"
            min={0}
            max={100}
            className="w-full pl-10 pr-4 py-2 border border-zinc-300 rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-700 focus:outline-none transition"
          />
          <Percent className="absolute left-3 top-2.5 h-5 w-5 text-zinc-400" />
        </div>
      </div>

      {/* Description */}
      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-zinc-700 mb-1"
        >
          Description
        </label>
        <div className="relative">
          <textarea
            id="description"
            name="description"
            rows="4"
            required
            placeholder="Start typing..."
            className="w-full pl-10 pr-4 py-2 border border-zinc-300 rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-700 focus:outline-none resize-none transition"
          ></textarea>
          <FileText className="absolute left-3 top-2.5 h-5 w-5 text-zinc-400" />
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <button
          type="submit"
          className="cursor-pointer w-full py-2 px-4 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-600 transition duration-300"
        >
          Create Room
        </button>
      </div>
    </form>
  );
}

export default NewRoomForm;
