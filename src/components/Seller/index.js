import React from "react";

import "../Buyer/Buyer.css";

const Seller = () => {
  return (
    <div className="buyer__component seller__component" id="for_sellers">
      <div className="header">
        <h5>For Sellers</h5>
        <h3>How to Sell a house in BlockProperties</h3>
      </div>
      <img src="/SELL.svg" alt="sell" className="sell" />
      <img src="/AHOME.svg" alt="AHOME" className="ahome" />
      <div className="contents">
        {/* Content One */}
        <div className="content">
          <div>
            <h5>01</h5>
            <h3>upload</h3>
            <p>
              Donec cras lacus, quis nunc urna. Feugiat neque, non, mi erat
              ultricies morbi. Habitasse iaculis sed morbi natoque. acus,{" "}
            </p>
            <span>
              Upload Home <img src="/Line.svg" alt="Line SVG" />
            </span>
          </div>
          <img src="/house3.svg" alt="house svg" />
        </div>
        {/* Content Two */}
        <div className="content">
          <img src="/house4.svg" alt="house svg" />
          <div>
            <h5>02</h5>
            <h3>Open Bid</h3>
            <p>
              Donec cras lacus, quis nunc urna. Feugiat neque, non, mi erat
              ultricies morbi. Habitasse iaculis sed morbi natoque. acus,{" "}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="content">
          <div>
            <h5>03</h5>
            <h3>Receive Payment</h3>
            <p>
              Donec cras lacus, quis nunc urna. Feugiat neque, non, mi erat
              ultricies morbi. Habitasse iaculis sed morbi natoque. acus,{" "}
            </p>
          </div>
          <img src="/house5.svg" alt="house svg" />
        </div>
      </div>

      {/* Testimmonials */}
      <div className="testimonials">
        <div className="left">
          <h5>Testimonials</h5>
          <h3>jonathan sawab</h3>
          <p>the yamen group</p>
        </div>
        <div className="right">
          <span>“</span>Id viverra ultricies nascetur sed in. Magna sed
          ultricies risus nunc vulputate sit. Et massa egestas amet neque quam.
          <span>”</span>
        </div>
        <img
          src="/testimonials.svg"
          alt="testimonial"
          className="testimonial"
        />
      </div>
    </div>
  );
};

export default Seller;
