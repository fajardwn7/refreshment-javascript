import { expect, test } from "@jest/globals";
import { sayHelloAsync } from "../src/for_test/async";

test("test async function", async () => {
  const result = await sayHelloAsync("Joy");
  expect(result).toBe("Hello Joy");
});

test("test async matchers", async () => {
  await expect(sayHelloAsync("Joy")).resolves.toBe("Hello Joy");
  await expect(sayHelloAsync()).rejects.toBe("Name is empty");
});
