import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoute() {
  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");

  return email && password ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
