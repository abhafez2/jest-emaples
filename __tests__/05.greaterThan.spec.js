test("toBeGreaterThan", () => {
  expect(10).toBeGreaterThan(3);
  expect(10).not.toBeGreaterThan(10);
  expect(10).toBeGreaterThanOrEqual(10);
});
