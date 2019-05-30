const stats = require("./stats");

describe("stats", () => {
  // 가장 큰값 가져오기.
  it("get maximum value", () => {
    expect(stats.max([1, 2, 3, 4])).toBe(4);
  });
});
