import { expect, test } from "@jest/globals";

test("array simple", () => {
  const names = ["Joy", "Land"];
  expect(names).toEqual(["Joy", "Land"]);
  expect(names).toContain("Joy");
});

test("array object", () => {
  const persons = [
    {
      name: "Joy",
    },
    {
      name: "Land",
    },
  ];
  expect(persons).toContainEqual({
    name: "Land",
  });
});
