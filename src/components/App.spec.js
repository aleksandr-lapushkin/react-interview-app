import React from "react";
import { mount } from "enzyme";
import Loader from "./Loader";
import OrderList from "./orders/OrderList";
import App from "./App";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter } from "react-router-dom";

jest.mock("../dao", () => {
  OrderDao: {
    fetchAll: () => new Promise();
  }
});

configure({ adapter: new Adapter() });

test("Should render a loading view", () => {
  const orderDaoMock = {
    fetchAll: () => {
      return new Promise(() => {}, () => {});
    }
  };
  const app = mount(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(app.find(Loader).length).toEqual(1);
  app.unmount();
});

test("Should render a view with 1 Order", async () => {
  //Set reference to ok callback to invoke it manually later
  let resolveReference;
  const promise = new Promise((ok, fail) => {
    resolveReference = ok;
  });

  const orderDaoMock = {
    fetchAll: () => {
      console.log("fetching");
      return promise;
    }
  };

  const app = mount(
    <MemoryRouter>
      <App orderDao={orderDaoMock} />
    </MemoryRouter>
  );

  //Verify that initial state is correct
  expect(app.find(App).state("loaded")).toEqual(false);
  expect(app.find(OrderList).length).toEqual(0);
  expect(app.find(Loader).length).toEqual(1);

  //Trigger update and await
  await resolveReference([{ id: 0, title: "hello", status: "PROCESSING" }]);

  //Verify changes happened
  expect(
    app
      .update()
      .find(App)
      .state("loaded")
  ).toEqual(true);
  expect(app.find(OrderList).length).toEqual(1);
  expect(app.find(Loader).length).toEqual(0);
  app.unmount();
});
