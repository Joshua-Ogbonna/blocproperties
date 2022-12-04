import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { connectWallet } from "../../state/user/actions";
import { shortenAddress } from "../../utils";

import "./Hero.css";

const Hero = () => {
  const dispatch = useDispatch()
  const { currentAccount } = useSelector(state => state.user)

  const handleConnectMetamask = () => {
    dispatch(connectWallet())
  }

  return (
    <div className="hero__component">
      <div className="inner">
        <img src="/home.svg" alt="home avatar" />
        <h1>
          <span className="small__text">
            it’s your House.
            <br /> Buy with Trust.
          </span>
          <span className="mid__text">a vision for Buying</span>
        </h1>
        <div className="bottom__text">and Selling homes.</div>
        <button onClick={handleConnectMetamask}>{currentAccount ? shortenAddress(currentAccount) : "Connect Wallet"}</button>
      </div>
      <div className="left">
        
      </div>
      <div className="right">
        {/* <div>
          <span> Donec cras</span> lacus, quis nunc urna. Feugiat neque, non, mi
          erat ultricies morbi. Habitasse iaculis sed morbi natoque. acus, quis
          nunc urna. Feugiat neque, non, mi erat
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
