import React from "react";
import OrderList from "./OrderList";
import OrderRow from "./OrderRow";
import { Orders } from "../../model";
import { render } from "@testing-library/react";

describe("OrderList", () => {
  test("OrderList is empty", () => {
    // Render a checkbox with label in the document
    const result = render(<OrderList orders={[]} />);
    expect(result.getByText("No data")).toBeInTheDocument();
  });
});

// test("OrderList has 2 entries", () => {
//   // Render a checkbox with label in the document
//   const orders = [
//     { id: 123, title: "hello world", status: Orders.Status.PROCESSING },
//     { id: 1234, title: "hello world 2", status: Orders.Status.SUBMITTED }
//   ];
//   const list = shallow(<OrderList orders={orders} />);

//   const rows = list.find("tbody").find(OrderRow);
//   expect(rows.length).toEqual(2);
//   expect(rows.at(0).key()).toEqual("123");
//   expect(rows.at(0).prop("order")).toEqual(orders[0]);
//   expect(rows.at(1).key()).toEqual("1234");
//   expect(rows.at(1).prop("order")).toEqual(orders[1]);
// });
