import { analyzeArray } from "./analyzeArray.js";

test("test case 1", () => {
  expect(analyzeArray([1,8,4,3,2,6])).toEqual(
    {
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("test case 2", () => {
  expect(analyzeArray([1,7,4])).toEqual(
    {
    average: 4,
    min: 1,
    max: 7,
    length: 3,
  });
});

test("test case 3", () => {
  expect(analyzeArray([102,89,1,28,45])).toEqual(
    {
    average: 53,
    min: 1,
    max: 102,
    length: 5,
  });
});