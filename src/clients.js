import { OrderDaos } from "./dao";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://c90ccf0e.ngrok.io",
  timeout: 1000
});

export const ordersDao = new OrderDaos.OrderDao(axiosInstance);
