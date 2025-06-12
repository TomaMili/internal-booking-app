import { Bed, User, Euro, Percent, FileText, Type } from "lucide-react";
import { useForm } from "react-hook-form";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createRoom } from "../../services/apiRooms";
import toast from "react-hot-toast";
import InputField from "./InputField";

function NewRoomForm({ setIsNewRoomModalOpen }) {
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;

  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createRoom,
    onSuccess: () => {
      toast.success("New room successfully created");
      queryClient.invalidateQueries({ queryKey: ["rooms"] });
      setIsNewRoomModalOpen(false);
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  function handleForm(data) {
    mutate({ ...data, image: data.image[0] });
  }
  function handleFormError(errors) {
    console.log(errors);
  }

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ y: -10, scale: 0.9, opacity: 1 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: -10, scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 35 }}
      >
        <form
          className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-xl space-y-5"
          onSubmit={handleSubmit(handleForm, handleFormError)}
        >
          <h2 className="text-2xl font-bold text-zinc-800">Add a new room</h2>

          <InputField label={"Room name"} error={errors?.name?.message}>
            <input
              type="text"
              id="name"
              {...register("name", {
                required: "This field is required",
                min: { value: 1, message: "Room name must be at least 1" },
                max: { value: 999, message: "Room name must be below 1000" },
              })}
              name="name"
              required
              disabled={isCreating}
              className="w-full pl-10 pr-4 py-2 border border-zinc-300 rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-700 focus:outline-none transition"
            />
            <Bed className="absolute left-3 top-2.5 h-5 w-5 text-zinc-400" />
          </InputField>

          <InputField label={"Room type"} error={errors?.type?.message}>
            <select
              id="type"
              {...register("type", {
                required: "This field is required",
              })}
              name="type"
              required
              disabled={isCreating}
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
          </InputField>

          <InputField label={"Capacity"} error={errors?.capacity?.message}>
            <input
              type="number"
              id="capacity"
              {...register("capacity", {
                required: "This field is required",
                min: { value: 1, message: "Capacity must be at least 1" },
              })}
              required
              disabled={isCreating}
              className="w-full pl-10 pr-4 py-2 border border-zinc-300 rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-700 focus:outline-none transition"
            />
            <User className="absolute left-3 top-2.5 h-5 w-5 text-zinc-400" />
          </InputField>

          <InputField
            label={"Price per Night (€)"}
            error={errors?.price?.message}
          >
            <input
              type="number"
              id="price"
              {...register("price", {
                required: "This field is required",
                min: { value: 1, message: "Price must be at least 1" },
              })}
              min={0}
              required
              disabled={isCreating}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-700 focus:outline-none transition"
            />
            <Euro className="absolute left-3 top-2.5 h-5 w-5 text-zinc-400" />
          </InputField>

          <InputField label={"Discount (%)"} error={errors?.discount?.message}>
            <input
              type="number"
              id="discount"
              {...register("discount", {
                required: "This field is required",
                min: { value: 0, message: "Discount must be at above or 0" },
                max: { value: 100, message: "Discount must be below or 100" },
              })}
              min={0}
              max={100}
              defaultValue={0}
              disabled={isCreating}
              className="w-full pl-10 pr-4 py-2 border border-zinc-300 rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-700 focus:outline-none transition"
            />
            <Percent className="absolute left-3 top-2.5 h-5 w-5 text-zinc-400" />
          </InputField>

          <InputField label={"Description"} error={errors?.desc?.message}>
            <textarea
              id="desc"
              {...register("desc", {
                required: "This field is required",
              })}
              name="desc"
              rows="4"
              required
              disabled={isCreating}
              placeholder="Start typing..."
              className="w-full pl-10 pr-4 py-2 border border-zinc-300 rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-700 focus:outline-none resize-none transition"
            ></textarea>
            <FileText className="absolute left-3 top-2.5 h-5 w-5 text-zinc-400" />
          </InputField>

          <InputField error={errors?.image?.message}>
            <input
              type="file"
              id="image"
              accept="image/*"
              {...register("image", {
                required: "This field is required",
              })}
              required
              disabled={isCreating}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-700 cursor-pointer hover:bg-zinc-200  bg-zinc-300 focus:outline-none transition"
            />
          </InputField>

          <div className="pt-4">
            <button
              type="submit"
              className="cursor-pointer w-full py-2 px-4 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-600 transition duration-300"
              disabled={isCreating}
            >
              {isCreating ? "Creating room..." : "Create room"}
            </button>
            <button
              type="reset"
              className="cursor-pointer w-full mt-2 py-2 px-4 bg-zinc-300 text-emerald-700 font-semibold rounded-lg hover:bg-zinc-200 transition duration-300"
            >
              Reset
            </button>
          </div>
        </form>
      </motion.div>
    </AnimatePresence>
  );
}

export default NewRoomForm;
