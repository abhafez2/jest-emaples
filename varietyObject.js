const varietyObject = {
  mixedArray: [1, [2, 3], { four: 5, six: [7, 8] }],
  regex: /do-not-try-to-regex-an-email/,
  date: new Date("1988-10-18"),
  error: new Error("some error"),
  someFunction: () => {},
  symbol: Symbol("symbol description"),
  set: new Set([1, 2, 3]),
  map: new Map([
    [{}, []],
    [[], {}],
  ]),
  // and more!
};

module.exports = { varietyObject };