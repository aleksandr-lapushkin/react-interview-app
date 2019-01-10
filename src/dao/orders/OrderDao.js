import { Orders } from "../../model";

export default class OrderDao {
  fetchAll = () => {
    console.info("Fetching All Orders");
    return fetch("https://4389818d.ngrok.io/orders/")
      .then(result => result.json())
      .then(orders => {
        return orders.map(o => Orders.Order.fromJson(o));
      });
  };
}
