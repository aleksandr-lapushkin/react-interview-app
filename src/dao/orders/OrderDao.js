import { Orders } from "../../model";

export default class OrderDao {
  constructor(axiosInstance) {
    this.axios = axiosInstance;
  }
  fetchAll = () => {
    console.info("Fetching All Orders");
    return this.axios.get('/orders')
      .then(response => {
        return response.data.map(o => Orders.Order.fromJson(o));
      });
  };

  saveOrder = (title, status) => {
    //TODO: implement and test
    console.info("Saving order");
  }
}
