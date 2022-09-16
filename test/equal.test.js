import { expect, test } from "@jest/globals";

test("test toBe", () => {
  const name = "Fajar";
  const hello = `Hello ${name}`;

  expect(hello).toBe("Hello Fajar");
});

test("test toEqual", () => {
  let person = { id: "Fajar" };
  Object.assign(person, { name: "Fajar" });

  expect(person).toEqual({ id: "Fajar", name: "Fajar" });
});
