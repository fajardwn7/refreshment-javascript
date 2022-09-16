import { expect, test } from "@jest/globals";

test("truthiness", () => {
  let value = null;
  expect(value).toBeNull();
  expect(value).toBeDefined();
  expect(value).toBeFalsy();

  value = undefined;
  expect(value).toBeUndefined();
  expect(value).toBeFalsy();

  value = "Fajar";
  expect(value).toBeTruthy();
  expect(value).toBe("Fajar");
});
