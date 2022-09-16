import { getBalance } from "../src/for_test/async";
import { expect, test } from "@jest/globals";

test("mock async function", async () => {
  const from = jest.fn();
  from.mockResolvedValueOnce(1000);

  await expect(getBalance("Fajar", from)).resolves.toEqual({
    name: "Fajar",
    balance: 1000,
  });

  expect(from.mock.calls.length).toBe(1);
  await expect(from.mock.results[0].value).resolves.toBe(1000);
});

test.failing("mock async function rejected", async () => {
  const from = jest.fn();
  from.mockRejectedValueOnce(new Error("Ups"));

  await getBalance("Fajar", from);
});

test("mock async function error matchers", async () => {
  const from = jest.fn();
  from.mockRejectedValueOnce("Rejected");

  await expect(getBalance("Fajar", from)).rejects.toBe("Rejected");
});
