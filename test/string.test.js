import { expect, test } from "@jest/globals";

test("string", () => {
  const name = "Joy Lander";

  expect(name).toBe("Joy Lander");
  expect(name).toMatch(/and/);
});
