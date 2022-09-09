import React from "react";
import { useAuth } from "./Auth";
import { Navigate } from "react-router-dom";

const RequireAuth = ({children}) => {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to="/signin" />;
  }

  return children;
};

export default RequireAuth;
