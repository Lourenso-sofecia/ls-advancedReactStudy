// src/routes/AnimatedRoutes.tsx
import { Routes, useLocation, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { publicRoutes } from "./PublicRoutes";
import { privateRoutes } from "./PrivateRoutes";
import { NotFound } from "../pages/errors/NotFound";

export function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/study-schedule" replace />} />
        {publicRoutes()}
        {privateRoutes()}
        <Route path="*" element={<NotFound />}  />
      </Routes>
    </AnimatePresence>
  );
}
