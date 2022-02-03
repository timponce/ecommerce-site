import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Body from "./components/Body";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Body />
    </div>
  );
}
