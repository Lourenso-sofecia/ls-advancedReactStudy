import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { PrivateLayout } from "../layouts/PrivateLayout";
import { Profile } from "../pages/private/Profile";
import { Dashboard } from "../pages/private/Dashboard";

export function PrivateRoutes() {
  return (
    <Routes>
      <Route 
        element={
            <ProtectedRoute>
                <PrivateLayout />
            </ProtectedRoute>
        }
     >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}
