import {
  ErrorMsg,
  SearchInputValidator,
} from "../../validation/search-input-validator";
import { it, describe, expect, test } from "@jest/globals";

const testSubject = new SearchInputValidator();

describe("given blank string, validate should return a map containing only (blank_key,blank_msg)", () => {
  const expectedResult = new Map([
    [SearchInputValidator.KEY_BLANK, ErrorMsg.BLANK_MSG],
  ]);

  const testCases = ["\t\t\t", "       ", undefined, ""];

  it.each(testCases)(`test case : %s`, (input) => {
    expect(testSubject.validate(input)).toStrictEqual(expectedResult);
  });
});

test("given valid string, validate should return empty map", () => {
  expect(testSubject.validate("48656489774", 15).size).toBe(0);
});

test("given NaN string, validate should return NaN message", () => {
  const expectedResult = new Map([
    [SearchInputValidator.KEY_DIGITS, ErrorMsg.DIGITS_ONLY],
  ]);

  expect(testSubject.validate("un7 va89lid")).toStrictEqual(expectedResult);
});

test("given too long string, validate should return max char message", () => {
  const expectedResult = new Map([
    [SearchInputValidator.KEY_MAX, ErrorMsg.FUN_MAX_CHAR(15)],
  ]);

  expect(
    testSubject.validate("9999999999999999999999999999999999999", 15)
  ).toStrictEqual(expectedResult);
});
