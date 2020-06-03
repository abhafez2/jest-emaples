test("toBeFalsy/Truthy", () => {
  expect(false).toBeFalsy();
  expect(true).toBeTruthy();
  expect(null).toBeFalsy();
  expect(undefined).toBeFalsy();
  expect(1).toBeTruthy();
  expect(0).toBeFalsy();
});
test("We Can Use NOT ⚠⚠⚠", () => {
  expect(true).not.toBeFalsy();
  expect(false).not.toBeTruthy();
  expect(null).not.toBeTruthy();
  expect(undefined).not.toBeTruthy();
  expect(1).not.toBeFalsy();
});
