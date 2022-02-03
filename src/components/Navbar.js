import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
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
    </header>
  );
}
