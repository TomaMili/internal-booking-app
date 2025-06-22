import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export function useLogin() {
  const qc = useQueryClient();
  const navigate = useNavigate();

  const {
    mutate: login,
    isLoading,
    error,
  } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      qc.setQueryData(["user"], user.user);
      toast.success("Successfully logged in");
      navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      console.log(err.message);
      toast.error("Provided email or password are incorrect");
    },
  });

  return { login, isLoading, error };
}
