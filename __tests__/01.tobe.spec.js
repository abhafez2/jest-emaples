// "To Be, or Not to Be, That Is the Question"
// William Shakespeare’s play Hamlet

test("toBe", () => {
  // similar to ===
  expect(1).toBe(1);
  expect("🚀").toBe("🚀");
  expect("👆 a string").toBe("👆 a string");
  expect(true).toBe(true);
});

it("Not to be", () => {
  expect({}).not.toBe({});
});
