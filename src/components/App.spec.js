import React from "react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";
jest.mock("../clients", () => ({
  ordersDao: {
    fetchAll: jest.fn()
  }
}));
import { ordersDao} from "../clients";
import {render, wait} from "@testing-library/react";

describe("App", () => {
  test("Should render a loading view", () => {
    ordersDao.fetchAll = jest.fn().mockReturnValue(new Promise((a, b) => {}))

    const result = render(
        <MemoryRouter>
          <App />
        </MemoryRouter>
    );

    expect(result.getByRole('progressbar')).toBeInTheDocument()
  });

  test("Should render a view with 1 Order", async () => {
    ordersDao.fetchAll = jest.fn().mockResolvedValue([{ id: 0, title: "hello", status: "PROCESSING" }])

    const result = render(
        <MemoryRouter>
          <App />
        </MemoryRouter>
    );

    await wait(() => result.getByText("PROCESSING"))

    expect(result.getByRole("listitem")).toBeInTheDocument()
    expect(result.getByRole("listitem")).toHaveTextContent("PROCESSING")
  });

})