import { expect, test } from "@jest/globals";
import { sayHello } from "../src/for_test/sayHello";

test("sayHello success", () => {
  expect(sayHello("Fajar")).toBe("Hello Fajar");
});

test.failing("sayHello error", () => {
  sayHello(null);
});

test("sayHello error matchers", () => {
  expect(() => sayHello(null)).toThrow();
});
