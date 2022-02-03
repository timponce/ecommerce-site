import React from "react";
import { HeroImage } from "../images/index";

export default function Hero() {
  return (
    <div className="hero">
      <img
        className="hero--image"
        src={HeroImage}
        alt="Long haired man on boat"
      />
      <h1 className="hero--text">Let your hair down</h1>
    </div>
  );
}
