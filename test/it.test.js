import { sumAll } from "../src/for_test/sum"
import { describe, expect, it } from "@jest/globals";

describe("when call sumAll()", () => {
  it("should get 30 with parameter [10, 10, 10]", () => {
    expect(sumAll([10, 10, 10])).toBe(30);
  });
  it("should get 50 with parameter [10, 10, 10, 10, 10]", () => {
    expect(sumAll([10, 10, 10, 10, 10])).toBe(50);
  });
});
