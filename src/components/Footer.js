import React from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTiktok,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h4 className="footer-top--title">Grow It Out</h4>
        <div className="footer-top--nav-groups">
          <div className="footer-top--nav-group">
            <h4 className="footer-top--nav-group--title">Mobile App</h4>
            <ul>
              <li>Something</li>
              <li>Something</li>
              <li>Something</li>
            </ul>
          </div>
          <div className="footer-top--nav-group">
            <h4 className="footer-top--nav-group--title">Community</h4>
            <ul>
              <li>Something</li>
              <li>Something</li>
              <li>Something</li>
            </ul>
          </div>
          <div className="footer-top--nav-group">
            <h4 className="footer-top--nav-group--title">Company</h4>
            <ul>
              <li>Something</li>
              <li>Something</li>
              <li>Something</li>
            </ul>
          </div>
        </div>
        <div className="footer-top--sign-up-buttons">
          <button className="footer-top--register-button">Register</button>
          <button className="footer-top--log-in-button">Log in</button>
        </div>
      </div>
      <hr className="footer-hr"></hr>
      <div className="footer-bottom">
        <span className="footer-bottom--copyright">
          © Grow It Out, Inc 2022
        </span>
        <div className="footer-bottom--socials">
          <span className="footer-bottom--socials-label">Follow us:</span>
          <FontAwesomeIcon className="footer-icons" icon={faInstagram} />
          <FontAwesomeIcon className="footer-icons" icon={faTiktok} />
          <FontAwesomeIcon className="footer-icons" icon={faFacebook} />
          <FontAwesomeIcon className="footer-icons" icon={faTwitter} />
        </div>
      </div>
    </footer>
  );
}
