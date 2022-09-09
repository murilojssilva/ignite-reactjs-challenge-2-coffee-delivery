import { Routes, Route } from "react-router-dom";
import { Checkout } from "../pages/Checkout";
import { Home } from "../pages/Home";

import { DefaultLayout } from "../pages/_layout/default";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}
