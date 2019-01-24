import React from "react";
import { shallow } from "enzyme";
import OrderList from "./OrderList";
import OrderRow from "./OrderRow";
import { Orders } from "../../model";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

test("OrderList is empty", () => {
  // Render a checkbox with label in the document
  const list = shallow(<OrderList orders={[]} />);

  const rows = list.find("tbody").find("tr");
  expect(rows.length).toEqual(1);
  expect(rows.text()).toEqual("No data");
});

test("OrderList has 2 entries", () => {
  // Render a checkbox with label in the document
  const orders = [
    { id: 123, title: "hello world", status: Orders.Status.PROCESSING },
    { id: 1234, title: "hello world 2", status: Orders.Status.SUBMITTED }
  ];
  const list = shallow(<OrderList orders={orders} />);

  const rows = list.find("tbody").find(OrderRow);
  expect(rows.length).toEqual(2);
  expect(rows.at(0).key()).toEqual("123");
  expect(rows.at(0).prop("order")).toEqual(orders[0]);
  expect(rows.at(1).key()).toEqual("1234");
  expect(rows.at(1).prop("order")).toEqual(orders[1]);
});
