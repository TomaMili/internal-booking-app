import { LucideUserCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useGetUser } from "../hooks/useGetUser";

function HeaderUser() {
  const navigate = useNavigate();
  const { user } = useGetUser();
  const { fullName, avatar } = user.user_metadata;

  return (
    <div className="flex gap-6 items-center">
      <p className="text-lg font-medium">
        Welcome back, <span className="font-bold text-xl">{fullName}</span>
      </p>
      {!avatar ? (
        <LucideUserCircle2
          size={40}
          strokeWidth={1.5}
          className="text-zinc-700 cursor-pointer hover:text-zinc-600 transition-all duration-300"
          onClick={() => navigate("/account")}
        />
      ) : (
        <img
          src={avatar}
          alt={`${fullName}-avatar`}
          onClick={() => navigate("/account")}
          className="w-13 h-13 rounded-4xl cursor-pointer outline-zinc-800 outline-1 hover:outline-emerald-700 transition-all duration-300"
        />
      )}
    </div>
  );
}

export default HeaderUser;
