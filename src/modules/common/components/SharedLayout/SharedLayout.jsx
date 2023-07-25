import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Header } from "../Header/Header";

export const SharedLayout = () => {
  return (
    <div className="">
      <Header />
      <main>
        <Suspense fallback="Loading...">
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
