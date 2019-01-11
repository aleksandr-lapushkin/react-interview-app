import React from "react";
import { OrderList } from "./orders";
import { OrderDaos } from "../dao";
import Loader from "./Loader";
import { Link, Route } from "react-router-dom";
import { Order } from "./orders";

const orderDao = new OrderDaos.OrderDao();

export default class App extends React.Component {
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
  };
  onRefresh = () => {
    this.setState(
      {
        ...this.state,
        loaded: false
      },
      this.fetchAllOrders
    );
  };
  componentDidMount() {
    this.fetchAllOrders();
  }
  render() {
    const { orders, loaded } = this.state;
    const ordersRenderer = () => {
      return (
        <div>
          <div className="row">
            <div className="column twelve">
              <Link to="/new">
                <button className="button-primary">New</button>
              </Link>
              <button onClick={() => this.onRefresh()}>Refresh</button>
            </div>
          </div>
          <div className="row">
            <div className="column twelve">
              {loaded ? <OrderList orders={orders} /> : <Loader />}
            </div>
          </div>
        </div>
      );
    };
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
              <Route path="/" exact render={ordersRenderer} />
              <Route path="/new" exact component={Order} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
