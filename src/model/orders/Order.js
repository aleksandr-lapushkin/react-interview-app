import OrderStatus from "./OrderStatus";

export default class Order {
  constructor(id, title, status) {
    this.id = id;
    this.title = title;
    this.status = status;
  }
  static fromJson = json => {
    if (!json.id || !json.title || !OrderStatus[json.status]) {
      console.warn("Order shape is not correct: " + json);
    }
    return new Order(json.id, json.title, OrderStatus[json.status]);
  };
}
