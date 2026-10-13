import { before } from "../../../utils/array/before";

describe("before", () => {
  it("should return an empty array if the index is less than or equal to 0", () => {
    expect(before([1, 2, 3], 0)).toEqual([]);
    expect(before([1, 2, 3], -1)).toEqual([]);
  });

  it("should return the entire array if the index is larger than the array length", () => {
    expect(before([1, 2, 3], 5)).toEqual([1, 2, 3]);
  });

  it("should return elements before the specified index", () => {
    expect(before([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 3]);
    expect(before(["a", "b", "c", "d"], 2)).toEqual(["a", "b"]);
  });

  it("should handle non-integer indexes by flooring the number", () => {
    expect(before([1, 2, 3, 4, 5], 2.9)).toEqual([1, 2]);
    expect(before([1, 2, 3, 4, 5], 3.1)).toEqual([1, 2, 3]);
  });

  it("should throw a TypeError if the first argument is not an array", () => {
    expect(() => before(null as any, 2)).toThrow(TypeError);
    expect(() => before(123 as any, 2)).toThrow(TypeError);
  });

  it("should throw a TypeError if the second argument is not a valid number", () => {
    expect(() => before([1, 2, 3], NaN)).toThrow(TypeError);
    expect(() => before([1, 2, 3], "2" as any)).toThrow(TypeError);
  });
});
