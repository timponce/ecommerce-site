import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function ProductCarousel() {
  const productsArray = [
    "Hair Tie 1",
    "Hair Tie 2",
    "Hair Tie 3",
    "Hair Tie 4",
    "Hair Tie 5",
    "Hair Tie 6",
  ];

  const productCard = productsArray.map((product) => (
    <div className="product-card">
      <h1 className="product-card--placeholder-text">{product}</h1>
    </div>
  ));
  return (
    <div className="product-carousel">
      <button className="fa-chevron-left">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      {productCard}
      <button className="fa-chevron-right">
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
}
