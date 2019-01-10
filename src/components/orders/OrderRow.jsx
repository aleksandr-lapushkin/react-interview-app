import React from "react";

export default class OrderRow extends React.PureComponent {
  render() {
    const { order } = this.props;
    return (
      <tr className="OrderRow">
        <td>{order.id}</td>
        <td>{order.title}</td>
        <td>{order.status}</td>
      </tr>
    );
  }
}
