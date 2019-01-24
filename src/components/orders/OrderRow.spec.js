import React from "react";
import { shallow } from "enzyme";
import OrderRow from "./OrderRow";
import { Orders } from "../../model";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

test("OrderRow has appropriate values", () => {
  // Render a checkbox with label in the document
  const order = shallow(
    <OrderRow
      order={{ id: 0, title: "hello", status: Orders.Status.PROCESSING }}
    />
  );

  expect(order.find(".order-id").text()).toEqual("0");
  expect(order.find(".order-title").text()).toEqual("hello");
  expect(order.find(".order-status").text()).toEqual("PROCESSING");
});
