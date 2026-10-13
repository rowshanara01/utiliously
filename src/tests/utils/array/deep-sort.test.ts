import { deepSort } from "../../../utils/array/deep-sort";

describe("deepSort", () => {
  it("should sort an array of objects by a string property in descending order", () => {
    const array = [
      { user: { name: "Charlie" } },
      { user: { name: "Alice" } },
      { user: { name: "Bob" } },
    ];
    const sortedArray = deepSort(array, "user.name", "desc");
    expect(sortedArray).toEqual([
      { user: { name: "Charlie" } },
      { user: { name: "Bob" } },
      { user: { name: "Alice" } },
    ]);
  });

  it("should sort an array of objects by a number property in descending order", () => {
    const array = [
      { stats: { score: 30 } },
      { stats: { score: 10 } },
      { stats: { score: 20 } },
    ];
    const sortedArray = deepSort(array, "stats.score", "desc");
    expect(sortedArray).toEqual([
      { stats: { score: 30 } },
      { stats: { score: 20 } },
      { stats: { score: 10 } },
    ]);
  });

  it("should sort an array of objects by a boolean property in ascending order", () => {
    const array = [{ active: true }, { active: false }, { active: true }];
    const sortedArray = deepSort(array, "active");
    expect(sortedArray).toEqual([
      { active: false },
      { active: true },
      { active: true },
    ]);
  });

  it("should sort an array of objects by a boolean property in descending order", () => {
    const array = [{ active: true }, { active: false }, { active: true }];
    const sortedArray = deepSort(array, "active", "desc");
    expect(sortedArray).toEqual([
      { active: true },
      { active: true },
      { active: false },
    ]);
  });

  it("should handle undefined values by pushing them to the end in ascending order", () => {
    const array = [
      { user: { name: "Charlie" } },
      { user: { name: undefined } },
      { user: { name: "Alice" } },
    ];
    const sortedArray = deepSort(array, "user.name");
    expect(sortedArray).toEqual([
      { user: { name: "Alice" } },
      { user: { name: "Charlie" } },
      { user: { name: undefined } },
    ]);
  });

  describe("deepSort", () => {
    it("should sort an array of objects by a string property in ascending order", () => {
      const array = [
        { user: { name: "Charlie" } },
        { user: { name: "Alice" } },
        { user: { name: "Bob" } },
      ];
      const sortedArray = deepSort(array, "user.name");
      expect(sortedArray).toEqual([
        { user: { name: "Alice" } },
        { user: { name: "Bob" } },
        { user: { name: "Charlie" } },
      ]);
    });

    it("should sort an array of objects by a number property in ascending order", () => {
      const array = [
        { stats: { score: 30 } },
        { stats: { score: 10 } },
        { stats: { score: 20 } },
      ];
      const sortedArray = deepSort(array, "stats.score");
      expect(sortedArray).toEqual([
        { stats: { score: 10 } },
        { stats: { score: 20 } },
        { stats: { score: 30 } },
      ]);
    });

    it("should not sort the array of objects if all all of them have save values", () => {
      const array = [
        { stats: { score: 10 } },
        { stats: { score: 10 } },
        { stats: { score: 10 } },
      ];
      const sortedArray = deepSort(array, "stats.score");
      expect(sortedArray).toEqual([
        { stats: { score: 10 } },
        { stats: { score: 10 } },
        { stats: { score: 10 } },
      ]);
    });

    it("should handle undefined values by pushing them to the end in descending order", () => {
      const array = [
        { user: { name: "Charlie" } },
        { user: { name: undefined } },
        { user: { name: "Alice" } },
      ];
      const sortedArray = deepSort(array, "user.name", "desc", true);
      expect(sortedArray).toEqual([
        { user: { name: "Charlie" } },
        { user: { name: "Alice" } },
        { user: { name: undefined } },
      ]);
    });

    it("should handle nested array access using bracket notation", () => {
      const array = [
        { stats: [{ score: 30 }] },
        { stats: [{ score: 10 }] },
        { stats: [{ score: 20 }] },
      ];
      const sortedArray = deepSort(array, "stats[0].score");
      expect(sortedArray).toEqual([
        { stats: [{ score: 10 }] },
        { stats: [{ score: 20 }] },
        { stats: [{ score: 30 }] },
      ]);
    });

    it("should handle complex nested paths", () => {
      const array = [
        { user: { profile: { details: { age: 30 } } } },
        { user: { profile: { details: { age: 10 } } } },
        { user: { profile: { details: { age: 20 } } } },
      ];
      const sortedArray = deepSort(array, "user.profile.details.age");
      expect(sortedArray).toEqual([
        { user: { profile: { details: { age: 10 } } } },
        { user: { profile: { details: { age: 20 } } } },
        { user: { profile: { details: { age: 30 } } } },
      ]);
    });
  });
});
