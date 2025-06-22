import { LucideUserCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useGetUser } from "../hooks/useGetUser";

function HeaderUser() {
  const navigate = useNavigate();
  const { user } = useGetUser();
  const { name, avatar } = user.user_metadata;

  return (
    <div className="flex gap-6 items-center">
      <p className="text-lg font-medium">
        Welcome back, <span className="font-bold text-xl">{name}</span>
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
          alt={`${name}-avatar`}
          onClick={() => navigate("/account")}
        />
      )}
    </div>
  );
}

export default HeaderUser;
