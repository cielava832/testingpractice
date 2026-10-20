import { reverseStr } from "./reversestr.js";

test("Reverse string 1", () => {
  expect(reverseStr("abc")).toBe("cba");
});

test("Reverse string with space", () => {
  expect(reverseStr("abc cba")).toBe("abc cba");
});

test("Reverse string with spaces and numbers", () => {
  expect(reverseStr("abc cba 321")).toBe("123 abc cba");
});