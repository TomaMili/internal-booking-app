import { useNavigate } from "react-router-dom";

export function useReturnPage() {
  const navigate = useNavigate();
  return () => navigate(-1);
}
