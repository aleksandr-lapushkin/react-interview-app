import React from "react";

export default class OrderRow extends React.PureComponent {
  render() {
    const { order } = this.props;
    return (
      <tr className="OrderRow" role="listitem">
        <td className="order-id">{order.id}</td>
        <td className="order-title">{order.title}</td>
        <td className="order-status">{order.status}</td>
      </tr>
    );
  }
}
