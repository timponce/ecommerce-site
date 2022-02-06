import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function Navbar(props) {
  return (
    <header className="header">
      <h2 className="header--title">
        <Link to="/">Grow It Out</Link>
      </h2>
      <nav className="header--nav">
        <ul className="header--nav-ul">
          <li>
            <Link to="/ShopPage">Shop</Link>
          </li>
          <li>
            <Link to="/ArticlesPage">Articles</Link>
          </li>
          <li>
            <Link to="/AboutPage">About</Link>
          </li>
        </ul>
      </nav>
      {props.cart.length > 0 && (
        <button className="header--cart-tag-container">
          <span className="header--cart-tag-number">{props.cart.length}</span>
          <FontAwesomeIcon
            className="header--cart-icon"
            icon={faShoppingCart}
          />
        </button>
      )}
    </header>
  );
}
