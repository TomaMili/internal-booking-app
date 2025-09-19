import { useUpdateUser } from "./useUpdateUser";
import InputField from "../rooms/InputField";
import { Lock } from "lucide-react";
import { useForm } from "react-hook-form";
import supabase from "../../services/supabase";
import { useGetUser } from "../../hooks/useGetUser";

function UpdatePasswordData() {
  const { register, handleSubmit, formState, getValues, reset, setError } =
    useForm();
  const { errors } = formState;

  const { updateUser, isUpdating } = useUpdateUser();
  const { user } = useGetUser();

  async function checkCurrentPassword(email, currentPassword) {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password: currentPassword,
    });
    return error
      ? { valid: false, message: "Current password is incorrect" }
      : { valid: true };
  }

  async function onSubmit({ password, passwordNew }) {
    const { valid, message } = await checkCurrentPassword(user.email, password);

    if (!valid) {
      setError("password", { type: "manual", message });
      return;
    }

    updateUser({ password: passwordNew }, { onSuccess: reset });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-xl mx-auto p-6 bg-zinc-100 rounded-2xl shadow-xl space-y-5 text-sm"
    >
      <h2 className="text-xl font-bold text-zinc-800">Update Password</h2>

      <InputField label="Current password" error={errors?.password?.message}>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          disabled={isUpdating}
          {...register("password", { required: "This field is required" })}
          className="w-full pl-10 pr-4 py-2 border bg-zinc-50 border-zinc-300 rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-700 focus:outline-none transition"
        />
        <Lock className="absolute left-3 top-2.5 h-5 w-5 text-zinc-400" />
      </InputField>

      <InputField label="New password" error={errors?.passwordNew?.message}>
        <input
          type="password"
          id="passwordNew"
          autoComplete="new-password"
          disabled={isUpdating}
          {...register("passwordNew", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
          className="w-full pl-10 pr-4 py-2 border bg-zinc-50 border-zinc-300 rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-700 focus:outline-none transition"
        />
        <Lock className="absolute left-3 top-2.5 h-5 w-5 text-zinc-400" />
      </InputField>

      <InputField
        label="Repeat new password"
        error={errors?.passwordConfirm?.message}
      >
        <input
          type="password"
          id="passwordConfirm"
          autoComplete="confirm-password"
          disabled={isUpdating}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              getValues().passwordNew === value || "Passwords need to match",
          })}
          className="w-full pl-10 pr-4 py-2 border bg-zinc-50 border-zinc-300 rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-700 focus:outline-none transition"
        />
        <Lock className="absolute left-3 top-2.5 h-5 w-5 text-zinc-400" />
      </InputField>

      <button
        type="reset"
        disabled={isUpdating}
        onClick={reset}
        className="cursor-pointer w-full py-2 px-4 bg-zinc-400 text-white font-semibold rounded-lg hover:bg-zinc-300 transition duration-300"
      >
        Cancel
      </button>
      <button
        disabled={isUpdating}
        className="cursor-pointer w-full py-2 px-4 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-600 transition duration-300"
      >
        Update password
      </button>
    </form>
  );
}

export default UpdatePasswordData;
