import { capitalize } from "./capitalize.js";

test("capitalize string 1", () => {
  expect(capitalize("abcdef")).toBe("Abcdef");
});

test("capitalize string with space", () => {
  expect(capitalize("hello world")).toBe("Hello world");
});

test("capitalize string with numbers", () => {
  expect(capitalize("fooo 342")).toBe("Fooo 342");
});