import { after } from "../../../utils/array/after";

describe("after", () => {
  it("should return elements after the specified index", () => {
    const array = [1, 2, 3, 4, 5];
    expect(after(array, 2)).toEqual([3, 4, 5]);
  });

  it("should return an empty array if the index is out of bounds (negative)", () => {
    const array = [1, 2, 3, 4, 5];
    expect(after(array, -1)).toEqual([]);
  });

  it("should return the entire array if the index is larger than the array length", () => {
    const array = [1, 2, 3, 4, 5];
    expect(after(array, 10)).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle non-integer indexes by flooring the number", () => {
    const array = [1, 2, 3, 4, 5];
    expect(after(array, 2.7)).toEqual([3, 4, 5]);
  });

  it("should throw a TypeError if the first argument is not an array", () => {
    expect(() => after(null as any, 2)).toThrow(TypeError);
    expect(() => after(123 as any, 2)).toThrow(TypeError);
  });

  it("should throw a TypeError if the second argument is not a valid number", () => {
    const array = [1, 2, 3, 4, 5];
    expect(() => after(array, NaN)).toThrow(TypeError);
    expect(() => after(array, "2" as any)).toThrow(TypeError);
  });
});
