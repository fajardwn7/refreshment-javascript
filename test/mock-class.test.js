import { UserRepository } from "../src/for_test/user-repository";
import { UserService } from "../src/for_test/user-service";
import { jest, expect, test } from "@jest/globals";

jest.mock("../src/for_test/user-repository");

const repository = new UserRepository();
const service = new UserService(repository);

test("test mock user save", () => {
  const user = {
    id: 1,
    name: "Fajar",
  };

  service.save(user);

  expect(repository.save).toHaveBeenCalled();
  expect(repository.save).toHaveBeenCalledWith(user);
});

test("test mock class findById", () => {
  const user = {
    id: 1,
    name: "Fajar",
  };

  repository.findById.mockReturnValueOnce(user);

  expect(service.findById(1)).toEqual(user);
  expect(repository.findById).toHaveBeenCalled();
  expect(repository.findById).toHaveBeenCalledWith(1);
});

test("test mock class findAll", () => {
  const users = [
    {
      id: 1,
      name: "Fajar",
    },
    {
      id: 2,
      name: "Fajar",
    },
  ];

  repository.findAll.mockReturnValueOnce(users);

  expect(service.findAll()).toEqual(users);
  expect(repository.findAll).toHaveBeenCalled();
});
