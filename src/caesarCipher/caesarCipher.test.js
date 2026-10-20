import { caesarCipher } from "./caesarCipher.js";

test("Caesar cipher 1", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
});

test("Caesar cipher 2", () => {
  expect(caesarCipher('HelloWorld', 3)).toBe("KhoorZruog");
});

test("Caesar cipher edge case 1", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("Caesar cipher edge case 2", () => {
  expect(caesarCipher("abc", -3)).toBe("xyz");
});

test("Caesar cipher edge case 3", () => {
  expect(caesarCipher("XYZ", 3)).toBe("ABC");
});

test("Caesar cipher edge case 4", () => {
  expect(caesarCipher("ABC", -3)).toBe("XYZ");
});

test("Caesar cipher non-alphabet", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("Caesar cipher overflow", () => {
  expect(caesarCipher("Hello, World!", 29)).toBe("Khoor, Zruog!");
});