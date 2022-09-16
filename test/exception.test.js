import { expect, test } from "@jest/globals";
import { callMe, MyException } from "../src/for_test/exception";

test("exception", () => {
  expect(() => callMe("Fajar")).toThrow();
  expect(() => callMe("Fajar")).toThrow(MyException);
  expect(() => callMe("Fajar")).toThrow("Ups my exceptions happens");
});

test("exception not happens", () => {
  expect(callMe("Budi")).toBe("OK");
});
