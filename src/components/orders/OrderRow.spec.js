import React from "react";
import OrderRow from "./OrderRow";
import { Orders } from "../../model";
import { render } from "@testing-library/react";

test("OrderRow has appropriate values", async () => {
  // Render a checkbox with label in the document
  const result = render(
    <OrderRow
      order={{ id: 0, title: "hello", status: Orders.Status.PROCESSING }}
    />
  );

  expect(result.getByText("PROCESSING")).toBeInTheDocument();
  expect(result.getByText("hello")).toBeInTheDocument();
});
