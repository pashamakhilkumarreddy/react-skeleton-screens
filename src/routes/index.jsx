import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import SEOComponent from "../components/SEOComponent";
import Home from "../pages/Home";

const Articles = lazy(() => import("../pages/Articles"));

const AppRoutes = () => (
  <Suspense fallback={<></>}>
    <Routes>
      <Route path={"/"} element={<SEOComponent component={Home} title="Users" />} />
      <Route
        path="/articles"
        element={<SEOComponent component={Articles} title="Articles" />}
      />
    </Routes>
  </Suspense>
);

export default AppRoutes;
