import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ToastProvider } from "react-toast-notifications";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { store } from "./state/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastProvider
        autoDismiss
        autoDismissTimeout={4000}
        placement="top-right"
      >
        <App />
      </ToastProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
