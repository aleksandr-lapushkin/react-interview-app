import React from "react";
import { Orders } from "../../model";
import { render } from "@testing-library/react";
import Order from "./Order";
import {StaticRouter} from "react-router";


describe("Order", () => {
  test("Snapshot matches empty form", () => {
    const result = render(<StaticRouter><Order/></StaticRouter>)
    expect(result.container).toMatchSnapshot()
  })
})
