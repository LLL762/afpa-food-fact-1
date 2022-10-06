import { FoodService } from "../../api-service/food-service";
import { jest, expect, test } from "@jest/globals";
import { Product } from "../../model/product";

const productJsonMapperMock = jest.createMockFromModule(
  "../../model/product-json-mapper"
);

const jsonRespValidMock = jest.createMockFromModule(
  "../../validation/json-resp-validator"
);

const subjectToTest = new FoodService(productJsonMapperMock, jsonRespValidMock);

beforeEach(() => {
  jest.clearAllMocks();
});

test("should return validation msg when validation failed", async () => {
  const expectedResult = "doesn't matter";

  jsonRespValidMock.validate = jest.fn((json) => {
    return expectedResult;
  });
  $.ajax = () => $.Deferred().resolve("78");
  $.ajax().done((data) => data);
  const actualResult = await subjectToTest.getProductByCode("Robert");

  expect(actualResult).toBe(expectedResult);
});

test("should return product when validation succeeded", async () => {
  const expectedResult = Product("Arnold");

  jsonRespValidMock.validate = jest.fn((json) => "");
  productJsonMapperMock.toProduct = jest.fn((json) => expectedResult);
  $.ajax = () => $.Deferred().resolve("78");
  $.ajax().done((data) => data);

  const actualResult = await subjectToTest.getProductByCode("Robert");

  expect(actualResult).toBe(expectedResult);
});
