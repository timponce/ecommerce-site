import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ShopPage from "./ShopPage";

export default function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ShopPage" element={<ShopPage />} />
      </Routes>
    </BrowserRouter>
  );
}
