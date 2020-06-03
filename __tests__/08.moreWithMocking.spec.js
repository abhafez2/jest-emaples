test("toHaveBeenCalledWith", () => {
  const mockFn = jest.fn();
  mockFn("abc", { oneTwoThree: 123 });
  // NOTE: uses toEqual (not toBe) on each arg
  expect(mockFn).toHaveBeenCalledWith("abc", { oneTwoThree: 123 });
});

test("mock functions", () => {
  const myFn = jest.fn();
  myFn("first", { second: "val" });

  const calls = myFn.mock.calls;
  const firstCall = calls[0];
  const firstArg = firstCall[0];
  const secondArg = firstCall[1];

  // const [[firstArg, secondArg]] = myFn.mock.calls // TODO: uncomment this

  expect(firstArg).toBe("first");
  expect(secondArg).toEqual({ second: "val" });
});
