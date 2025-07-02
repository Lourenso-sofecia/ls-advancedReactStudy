import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";
import { JSX, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function ProtectedRoute({ children }: Props): JSX.Element {
  return isAuthenticated() ? (
    <>{children}</> 
  ) : (
    <Navigate to="/login" replace />
  );
}
