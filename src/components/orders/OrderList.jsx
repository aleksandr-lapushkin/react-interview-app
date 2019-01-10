import React from "react";
import PropTypes from "prop-types";
import OrderRow from "./OrderRow";
import { Orders } from "../../model";

export default class OrderList extends React.PureComponent {
  render() {
    const orders = this.props.orders;
    return (
      <table className="OrderList u-full-width">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => {
            return <OrderRow key={order.id} order={order} />;
          })}
        </tbody>
      </table>
    );
  }
}

OrderList.propTypes = {
  order: PropTypes.objectOf(Orders.Order)
};
