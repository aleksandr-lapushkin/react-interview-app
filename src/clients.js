import { OrderDaos } from "./dao";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://a7126dc3.ngrok.io",
  timeout: 1000
});

export const ordersDao = new OrderDaos.OrderDao(axiosInstance);
