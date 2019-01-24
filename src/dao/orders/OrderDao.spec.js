import OrderDao from "./OrderDao";

test("Fetch All orders", async () => {
  const axiosMock = {};
  const orderDao = new OrderDao(axiosMock);
  const mockGet = jest.fn(() => {
    return Promise.resolve({
      status: 201,
      data: [{id: 0, title: "test", status: "PROCESSING" }]
    });
  });
  axiosMock.get = mockGet;

  const result = await orderDao.fetchAll();

  expect(result).toEqual([{id: 0, title: "test", status: "PROCESSING" }]);
  expect(mockGet.mock.calls.length).toBe(1);
});
