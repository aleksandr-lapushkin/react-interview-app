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
