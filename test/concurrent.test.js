import { expect, test } from "@jest/globals";
import { sayHelloAsync } from "../src/for_test/async";

test.concurrent("concurrent 1", async () => {
  await expect(sayHelloAsync("Fajar")).resolves.toBe("Hello Fajar");
});

test.concurrent("concurrent 2", async () => {
  await expect(sayHelloAsync("Fajar")).resolves.toBe("Hello Fajar");
});

test.concurrent("concurrent 3", async () => {
  await expect(sayHelloAsync("Fajar")).resolves.toBe("Hello Fajar");
});
