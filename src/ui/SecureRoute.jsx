import { useEffect } from "react";
import { useGetUser } from "../hooks/useGetUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";

function SecuredRoute({ children }) {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useGetUser();

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  if (isLoading) return <Spinner />;

  if (isAuthenticated) return children;
}

export default SecuredRoute;
