// import { Calculator } from "@/modules/Calculator/Calculator";
import { lazy } from "react";

import { SharedLayout } from "./modules/common/components/SharedLayout/SharedLayout";
import { Route, Routes } from "react-router-dom";
const Home = lazy(() => import("./pages/Home/Home"));
const Calculators = lazy(() => import("./pages/Calculators/Calculators"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="calculators" element={<Calculators />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
