import { expect, test } from "@jest/globals";
import { printHello } from "../src/for_test/console";

test("print console hello", () => {
  console.log = jest.fn();
  printHello("Jeki");

  expect(console.log).toHaveBeenCalledWith("Hello, Jeki!");
});
