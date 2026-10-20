import { calculator } from "./calculator.js";

test("Adding two numbers 1", () => {
  expect(calculator.add(1, 1)).toBe(2);
});

test("Adding two numbers 2", () => {
  expect(calculator.add(19, 5)).toBe(24);
});

test("Subtracting two numbers 1", () => {
  expect(calculator.sub(2, 1)).toBe(1);
});

test("Subtracting two numbers 2", () => {
  expect(calculator.sub(9, 18)).toBe(-9);
});

test("Multiplying two numbers 1", () => {
  expect(calculator.mult(2, 3)).toBe(6);
});

test("Multiplying two numbers 2", () => {
  expect(calculator.mult(20, 19)).toBe(380);
});

test("Dividing two numbers 1", () => {
  expect(calculator.div(4, 2)).toBe(2);
});

test("Dividing two numbers 2", () => {
  expect(calculator.div(19, 2)).toBe(9.5);
});