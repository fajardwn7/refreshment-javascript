import { getAllProducts } from "../src/for_test/database";
import { ProductService } from "../src/for_test/product-service";
import { expect, test } from "@jest/globals";

jest.mock("../src/for_test/database", () => {
  const originalModule = jest.requireActual("../src/for_test/database");

  return {
    __esModule: true,
    ...originalModule,
    getAllProducts: jest.fn(),
  };
});

test.failing("mock modules getProductById", () => {
  ProductService.findById(1);
});

test("mock modules getAllProducts", () => {
  const products = [
    {
      id: 1,
      name: "Product Mock",
    },
    {
      id: 2,
      name: "Product Mock",
    },
  ];

  getAllProducts.mockImplementation(() => {
    return products;
  });

  expect(ProductService.findAll()).toEqual(products);
});
