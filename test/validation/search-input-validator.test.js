import { SearchInputValidator } from "../../src/validation/search-input-validator";
import { describe, expect, test } from "@jest/globals";

const testSubject = SearchInputValidator();

test("should return blank message when input is empty", () => {
  expect(testSubject.validate("", 15)).toBe(testSubject.getBlankMsg());
});
