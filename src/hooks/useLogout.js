import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../services/apiAuth";
import { replace, useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();
  const qc = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      qc.removeQueries();
      navigate("/login", { replace: true });
    },
  });

  return { logout, isLoading };
}
