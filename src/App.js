import React, { lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import pageLoader from "./HOCs/pageLoader";
import { setAccount } from "./state/user/actions";

import "./App.css";

// Components
const Home = pageLoader(lazy(() => import("./pages/Home")));

let { ethereum } = window;

function App() {
  const dispatch = useDispatch();
  // Check if metamask is connected
  const checkIfWalletIsConnected = async () => {
    if (!ethereum) return alert("Please install metamask");

    const accounts = await ethereum.request({ method: "eth_accounts" });
    if (accounts?.length) {
      dispatch(setAccount(accounts[0]));
    } else {
      console.log("No accounts found!")
    }
    // console.log(accounts);
  };

  useEffect(() => {
    checkIfWalletIsConnected();
    // eslint-disable-next-line
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
