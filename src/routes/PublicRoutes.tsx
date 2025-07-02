/* import { Route, Routes } from "react-router-dom";
import { PublicLayout } from "../layouts/PublicLayout";
import { Login } from "../pages/public/Login";
import { Home } from "../pages/public/Home";

export function PublicRoutes() {
  return (
    <>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </>
  );
}
 */

import { Route } from "react-router-dom";
import { PublicLayout } from "../layouts/PublicLayout";
import { Login } from "../pages/public/Login";
import { Home } from "../pages/public/Home";

export const publicRoutes = () => [
  <Route key="public" element={<PublicLayout />}>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
  </Route>,
];
