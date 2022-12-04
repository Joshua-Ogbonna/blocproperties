import React from "react";
import Buyer from "../../components/Buyer";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Process from "../../components/Process";
import Rotate from "../../components/Rotate";
import Seller from "../../components/Seller";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      {/* <Rotate /> */}
      <Process />
      <Buyer />
      <Seller />
      <Footer />
    </div>
  );
};

export default Home;
