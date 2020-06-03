test("toEqual", () => {
  // like `lodash.isEqual`: https://lodash.com/docs/4.17.4#isEqual
  const subject = { fruits: { apple: "🍎", strawberry: "🍓" }, value: "⏱" };
  const actual =  { fruits: { apple: "🍎", strawberry: "🍓" }, value: "⏱" };
  expect(subject).toEqual(actual);

  const subArray = [1, 2, { three: "four", five: { six: 7 } }];
  const actArray = [1, 2, { three: "four", five: { six: 7 } }];
  expect(subArray).toEqual(actArray);
});
