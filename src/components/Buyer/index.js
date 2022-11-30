import React from "react";

import "./Buyer.css";

const Buyer = () => {
  return (
    <div className="buyer__component" id="about_us">
      <div className="header" id="for_buyers">
        <h5>For buyers</h5>
        <h3>How to buy a house in BlockProperties</h3>
      </div>

      <div className="contents">
        {/* Content One */}
        <div className="content">
          <div>
            <h5>01</h5>
            <h3>Browse</h3>
            <p>
              Donec cras lacus, quis nunc urna. Feugiat neque, non, mi erat
              ultricies morbi. Habitasse iaculis sed morbi natoque. acus,{" "}
            </p>
            <span>
              Browse All <img src="/Line.svg" alt="Line SVG" />
            </span>
          </div>
          <img src="/house3.svg" alt="house svg" className="house" />
          <img src="/about.svg" alt="about" className="about" />
        </div>
        {/* Content Two */}
        <div className="content">
          <img src="/house4.svg" alt="house svg" />
          <div>
            <h5>02</h5>
            <h3>Bid</h3>
            <p>
              Donec cras lacus, quis nunc urna. Feugiat neque, non, mi erat
              ultricies morbi. Habitasse iaculis sed morbi natoque. acus,{" "}
            </p>
          </div>
        </div>

        {/* Content Three */}
        <div className="content">
          <div>
            <h5>03</h5>
            <h3>Pay</h3>
            <p>Donec cras lacus, quis nunc urna. Feugiat neque, non, mi erat ultricies morbi. Habitasse iaculis sed morbi natoque. acus, </p>
          </div>
          <img src="/house5.svg" alt="house" />
        </div>
      </div>
    </div>
  );
};

export default Buyer;
