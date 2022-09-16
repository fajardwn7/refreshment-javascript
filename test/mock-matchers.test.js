import { calculate } from "../src/for_test/sum";
import { expect, test } from "@jest/globals";

test("test mock matchers", () => {
  const callback = jest.fn();

  calculate([10, 10, 10], callback);
  calculate([10, 10, 10, 10, 10], callback);

  expect(callback).toHaveBeenCalled();
  expect(callback).toHaveBeenCalledTimes(2);
  expect(callback).toHaveBeenCalledWith(30);
  expect(callback).toHaveBeenCalledWith(50);
});
