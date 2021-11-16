import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const Articles = lazy(() => import("../pages/Articles"));

const AppRoutes = () => (
  <Suspense fallback={<></>}>
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path="/articles" element={<Articles />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;
