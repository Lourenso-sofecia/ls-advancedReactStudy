// src/routes/AnimatedRoutes.tsx
import { Routes, useLocation, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { publicRoutes } from "./PublicRoutes";
import { privateRoutes } from "./PrivateRoutes";
import { NotFound } from "../pages/errors/NotFound";
import { Unauthorized } from "../pages/errors/Unauthorized";
import { UnderConstruction } from "../pages/errors/UnderConstruction";

export function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        {publicRoutes()}
        {privateRoutes()}
        <Route path="*" element={<NotFound />}  />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/under-construction" element={<UnderConstruction />} />
      </Routes>
    </AnimatePresence>
  );
}
