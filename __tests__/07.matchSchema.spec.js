test("toEqual, toMatchObject, and toHaveBeenCalledWith matching a schema", () => {
  const birthday = {
    day: 18,
    month: 10,
    year: 1988,
    meta: { display: "Oct 18th, 1988" },
  };
  const schema = {
    day: expect.any(Number),
    month: expect.any(Number),
    year: expect.any(Number),
    meta: { display: expect.stringContaining("1988") },
    // there's also expect.arrayContaining, or expect.objectContaining
  };
  expect(birthday).toEqual(schema);
});
