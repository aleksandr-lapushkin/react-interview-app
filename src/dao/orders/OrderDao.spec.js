import OrderDao from "./OrderDao";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

describe("OrdersDao", () => {
  const axiosInstance = axios.create();
  const axiosMock = new MockAdapter(axiosInstance);

  test("Fetch All orders", async () => {
    const orderDao = new OrderDao(axiosInstance);
    axiosMock
      .onGet("/api/orders")
      .reply(200, [{ id: 0, title: "test", status: "PROCESSING" }]);

    const result = await orderDao.fetchAll();

    expect(result).toEqual([{ id: 0, title: "test", status: "PROCESSING" }]);
  });
});
