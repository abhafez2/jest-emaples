// matching Objects

test("toMatchObject", () => {
  // similar to `toEqual`, but for partial equality
  const subject = { fruits: { apple: "🍎", strawberry: "🍓" }, value: "⏱" };
  const actual =  { fruits: { apple: "🍎", strawberry: "🍓" }, value: "⏱" };
  expect(subject).toMatchObject(actual);

  const subArray = [1, 2, { three: "four", five: { six: 7 } }];
  const actArray = [1, 2, { five: { six: 7 } }];
  expect(subArray).toMatchObject(actArray);
});
