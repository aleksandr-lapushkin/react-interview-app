import OrderStatus from "./OrderStatus";

export default class Order {
  constructor(id, title, status) {
    this.id = id;
    this.title = title;
    this.status = status;
  }
  static fromJson = json => {
    return new Order(json.id, json.title, json.status);
  };
}
