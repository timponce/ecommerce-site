import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ShopPage from "./ShopPage";
import ArticlesPage from "./ArticlesPage";
import AboutPage from "./AboutPage";

export default function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ShopPage" element={<ShopPage />} />
        <Route path="/ArticlesPage" element={<ArticlesPage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}
