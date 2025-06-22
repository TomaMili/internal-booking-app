import { useForm } from "react-hook-form";
import InputField from "../rooms/InputField";
import { Bed } from "lucide-react";
import { useSignup } from "./useSignup";

function RegisterSection() {
  const { signup, isLoading } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ name, email, password }) {
    signup({ name, email, password }, { onSettled: () => reset() });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-xl mx-auto p-6 bg-zinc-100 rounded-2xl shadow-xl space-y-5 text-sm "
    >
      <h2 className="text-xl font-bold text-zinc-800">Create Account</h2>

      <InputField label={"Full name *"} error={errors?.name?.message}>
        <input
          type="text"
          id="name"
          disabled={isLoading}
          {...register("name", { required: "This field is required" })}
          className="w-full pl-10 pr-4 py-2 border bg-zinc-50 border-zinc-300 rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-700 focus:outline-none transition"
          placeholder="Your name"
        />
        <Bed className="absolute left-3 top-2.5 h-5 w-5 text-zinc-400" />
      </InputField>

      <InputField label={"E-mail *"} error={errors?.email?.message}>
        <input
          type="email"
          id="email"
          disabled={isLoading}
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Invalid e-mail address",
            },
          })}
          className="cursor-pointer w-full pl-10 pr-4 py-2 border bg-zinc-50 border-zinc-300 rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-700 focus:outline-none transition"
          placeholder="you@email.com"
        />
        <Bed className="absolute left-3 top-2.5 h-5 w-5 text-zinc-400" />
      </InputField>

      <InputField
        label={"Password (min 8 chars) *"}
        error={errors?.password?.message}
      >
        <input
          type="password"
          id="password"
          disabled={isLoading}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
          className="cursor-pointer w-full pl-10 pr-4 py-2 border bg-zinc-50 border-zinc-300 rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-700 focus:outline-none transition"
          placeholder="••••••••"
        />
        <Bed className="absolute left-3 top-2.5 h-5 w-5 text-zinc-400" />
      </InputField>

      <InputField label={"Repeat password *"} error={errors?.password?.message}>
        <input
          type="password"
          id="passwordConfirm"
          disabled={isLoading}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (val) =>
              val === getValues().password || "Passwords need to match",
          })}
          className="cursor-pointer w-full pl-10 pr-4 py-2 border bg-zinc-50 border-zinc-300 rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-700 focus:outline-none transition"
          placeholder="••••••••"
        />
        <Bed className="absolute left-3 top-2.5 h-5 w-5 text-zinc-400" />
      </InputField>
      <button
        type="submit"
        disabled={isLoading}
        className="cursor-pointer w-full py-2 px-4 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-600 transition duration-300"
      >
        Register
      </button>
    </form>
  );
}

export default RegisterSection;
