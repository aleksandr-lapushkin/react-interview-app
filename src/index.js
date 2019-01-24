import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { OrderDaos } from "./dao";

import "./styles.css";

const axiosInstance = axios.create({
  baseURL: "https://c098da06.ngrok.io",
  timeout: 1000
});

const orderDao = new OrderDaos.OrderDao(axiosInstance);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App orderDao={orderDao} />
  </BrowserRouter>,
  rootElement
);
