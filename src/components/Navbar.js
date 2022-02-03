import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="header">
      <h2 className="header--title">Grow It Out</h2>
      <nav className="header--nav">
        <ul className="header--nav-ul">
          <li>
            <Link to="ShopPage">Shop</Link>
          </li>
          <li>
            <Link to="/">Articles</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
