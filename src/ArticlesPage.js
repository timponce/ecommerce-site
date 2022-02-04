import React from "react";
import Navbar from "./components/Navbar";
import ArticlesBody from "./components/ArticlesBody";
import Footer from "./components/Footer";

export default function ArticlesPage() {
  return (
    <div>
      <Navbar />
      <div id="body">
        <ArticlesBody />
      </div>
      <Footer />
    </div>
  );
}
