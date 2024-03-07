import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import axios from "axios";
import { BASE_URL } from "./react-app-env.d";

import Debugger from "./components/debugger/debugger";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

axios.defaults.baseURL = BASE_URL;
axios.interceptors.request.use(
  (config) => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token) {
      config.headers.token = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Debugger />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
