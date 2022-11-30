import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { useDispatch, useSelector } from "react-redux";

import { scrollToTop, shortenAddress } from "../../utils/";
import { connectWallet } from "../../state/user/actions";

import "./Navbar.css";

const Navbar = () => {
  const [navbar, setNavbar] = useState("transparent");
  const [button, setButton] = useState({
    color: "#000",
    borderColor: "#000",
  });
  const dispatch = useDispatch();
  const { currentAccount } = useSelector(state => state.user)

  const handleConnectMetamask = () => dispatch(connectWallet());

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar("#14141c");
      setButton({ ...button, color: "#fff", borderColor: "#fff" });
    } else {
      setNavbar("transparent");
      setButton({ ...button, color: "#000", borderColor: "#000" });
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
    // eslint-disable-next-line
  }, [window.scrollY]);

  return (
    <div className="nav__component" style={{ backgroundColor: navbar }}>
      <ul className="first__layer">
        <li className="brand">
          <Link to="" onClick={scrollToTop}>
            <img src="/Logo.svg" alt="Logo avatar" loading="lazy" />
          </Link>
        </li>
        <li>
          <Link smooth to="#explore">
            Explore
          </Link>
        </li>
        <li>
          <Link smooth to="#about_us">
            About Us
          </Link>
        </li>
        <li>
          <Link smooth to="#for_buyers">
            For Buyers
          </Link>
        </li>
        <li>
          <Link smooth to="#for_sellers">
            For Sellers
          </Link>
        </li>
      </ul>
      <ul className="second__layer">
        <li>
          <button
            style={{
              color: button.color,
              border: `1px solid ${button.borderColor}`,
            }}
            onClick={handleConnectMetamask}
          >
            {currentAccount ? shortenAddress(currentAccount) : "Connect Wallet"}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
