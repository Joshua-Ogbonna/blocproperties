import React from "react";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer__component">
      <div className="separate">
        <div className="left">
          <span>It’s your house</span>
          <div>
            <img src="/logo2.svg" alt="Brand 2" />
            <span>Buy with trust</span>
          </div>
        </div>
        <div className="right">
          <input type="email" name="email" placeholder="your@email.com" />
          <button>Subscribe</button>
        </div>
      </div>
      <hr />
      <div className="links">
        <Link to="#explore">Explore</Link>
        <Link to="#about_us">About Us</Link>
        <Link to="#for_buyers">For Buyers</Link>
        <Link to="#for_sellers">For Sellers</Link>
      </div>
    </div>
  );
};

export default Footer;
