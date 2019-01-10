import React from "react";
import { OrderList } from "./orders";
import { OrderDaos } from "../dao";
import LoadingSpinner from "./LoadingSpinner";
import Loader from "./Loader";

const orderDao = new OrderDaos.OrderDao();

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { orders: [], loaded: false };
  }
  fetchAllOrders = () => {
    orderDao.fetchAll().then(result => {
      this.setState({
        loaded: true,
        orders: result
      });
    });
  }
  onRefresh = () => {
    this.setState({
      ...this.state,
      loaded: false,
    }, this.fetchAllOrders)
  }
  componentDidMount() {
    this.fetchAllOrders();
  }
  render() {
    const { orders, loaded } = this.state;
    return (
      <div className="App u-full-width">
        <div className="container">
          <div className="row">
            <div className="column twelve centered">
              <h1>Orders</h1>
            </div>
          </div>
          <div className="row">
            <div className="column twelve">
              {loaded ? (<OrderList orders={orders} />) : (<Loader/>)}
            </div>
          </div>
          <div className="row">
            <div className="column twelve">
              <button onClick={() => this.onRefresh()}>Refresh</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
