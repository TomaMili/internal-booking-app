import { useState } from "react";

import { useUpdateUser } from "./useUpdateUser";
import { useGetUser } from "../../hooks/useGetUser";
import InputField from "../rooms/InputField";
import { Bed } from "lucide-react";

function UpdateUserData() {
  // We don't need the loading state, and can immediately use the user data, because we know that it has already been loaded at this point
  const {
    user: {
      email,
      user_metadata: { name: currentFullName },
    },
  } = useGetUser();

  const { updateUser, isUpdating } = useUpdateUser();

  const [fullName, setFullName] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!fullName) return;
    updateUser(
      { fullName, avatar },
      {
        onSuccess: () => {
          setAvatar(null);
          e.target.reset();
        },
      }
    );
  }

  function handleCancel() {
    setFullName(currentFullName);
    setAvatar(null);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-xl mx-auto p-6 bg-zinc-100 rounded-2xl shadow-xl space-y-5 text-sm "
    >
      <h2 className="text-xl font-bold text-zinc-800">Create Account</h2>

      <InputField label={"Email address"}>
        <input
          type="text"
          id="email"
          disabled
          value={email}
          className="w-full pl-10 pr-4 py-2 border bg-zinc-50 border-zinc-300 rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-700 focus:outline-none transition"
        />
        <Bed className="absolute left-3 top-2.5 h-5 w-5 text-zinc-400" />
      </InputField>

      <InputField label={"Full name"}>
        <input
          type="text"
          id="fullName"
          disabled={isUpdating}
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border bg-zinc-50 border-zinc-300 rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-700 focus:outline-none transition"
        />
        <Bed className="absolute left-3 top-2.5 h-5 w-5 text-zinc-400" />
      </InputField>

      <InputField label={"Avatar image"}>
        <input
          id="avatar"
          disabled={isUpdating}
          accept="image/*"
          onChange={(e) => setFullName(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border-0 bg-zinc-50 border-zinc-300 rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-700 focus:outline-none transition"
        />
        {/* <Bed className="absolute left-3 top-2.5 h-5 w-5 text-zinc-400" /> */}
        <div></div>
      </InputField>

      <button
        type="reset"
        disabled={isUpdating}
        onClick={handleCancel}
        className="cursor-pointer w-full py-2 px-4 bg-zinc-400 text-white font-semibold rounded-lg hover:bg-zinc-300 transition duration-300"
      >
        Cancel
      </button>
      <button
        disabled={isUpdating}
        className="cursor-pointer w-full py-2 px-4 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-600 transition duration-300"
      >
        Update account
      </button>
    </form>
  );
}

export default UpdateUserData;
