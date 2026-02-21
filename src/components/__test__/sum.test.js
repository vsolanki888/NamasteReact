import sum from "../sum";

test("should add two numbers correctly", () => {
  const result = sum(2, 3);
  expect(result).toBe(5);
});
