import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function ProductCarousel(props) {
  const [carouselItems, setCarouselItems] = React.useState([0, 1, 2]);

  const productCards = props.products.hairTiesArray.map((item) => (
    <div className="product-card" key={item.id}>
      <h1 className="product-card--placeholder-text">{item.name}</h1>
    </div>
  ));
  const displayedProductCards = carouselItems.map((item) => productCards[item]);

  function shiftCarouselLeft() {
    setCarouselItems((prevItems) => [
      prevItems[0] === 0 ? productCards.length - 1 : prevItems[0] - 1,
      ...prevItems.slice(0, 2),
    ]);
  }
  function shiftCarouselRight() {
    setCarouselItems((prevItems) => [
      ...prevItems.slice(1, 3),
      prevItems[2] === productCards.length - 1 ? 0 : prevItems[2] + 1,
    ]);
  }
  return (
    <div className="product-carousel">
      <button className="fa-chevron-left" onClick={shiftCarouselLeft}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      {displayedProductCards}
      <button className="fa-chevron-right" onClick={shiftCarouselRight}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
}
