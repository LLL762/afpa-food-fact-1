import { SearchInputValidator } from "../../validation/search-input-validator";
import { expect, test } from "@jest/globals";

const testSubject = new SearchInputValidator();

test("given valid string, validate should return empty string", () => {
  expect(testSubject.validate("48656489774", 15).size).toBe(0);
});

test("given tabb space string, validate should return blank message", () => {
  const expectedResult = new Map({});
  expect(testSubject.validate("\t\t\t")).toBe(testSubject.getBlankMsg());
});

test("given empty string, validate should return blank message", () => {
  expect(testSubject.validate("")).toBe(testSubject.getBlankMsg());
});

test("given blank string, validate should return blank message", () => {
  expect(testSubject.validate("        ")).toBe(testSubject.getBlankMsg());
});

test("given undefined, validate should return blank message", () => {
  expect(testSubject.validate(undefined)).toBe(testSubject.getBlankMsg());
});

test("given NaN string, validate should return NaN message", () => {
  expect(testSubject.validate("un7 va89lid")).toBe(testSubject.getIsNanMsg());
});

test("given too long string, validate should return max char message", () => {
  expect(testSubject.validate("9999999999999999999999999999999999999")).toBe(
    testSubject.getMaxCharMsg()
  );
});
