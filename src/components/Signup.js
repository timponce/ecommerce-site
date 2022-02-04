import React from "react";

export default function Signup() {
  return (
    <div className="signup">
      <h1 className="signup--heading">Sign up for our newsletter!</h1>
      <h2 className="signup--subheading">
        Receive weekly emails with free styling tips, articles, photos, and
        discovered products to keep your hair looking beautiful.
      </h2>
      <form className="signup--form">
        <h3 className="signup--form--heading">Subscribe for free content</h3>
        <div className="signup--form--names">
          <input placeholder="First Name" />
          <input placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email address" />
        <button className="signup--form--button">Subscribe</button>
      </form>
    </div>
  );
}
