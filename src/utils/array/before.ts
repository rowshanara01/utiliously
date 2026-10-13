/**
 * Returns a new array containing all elements before the specified index.
 *
 * @param arr - The source array
 * @param index - The index before which to return elements
 * @returns A new array containing the elements before the given index, or an empty array if index is out of bounds
 */

export function before<T>(arr: T[], index: number): T[] {
  if (!Array.isArray(arr)) {
    throw new TypeError("Expected an array as the first argument.");
  }

  if (typeof index !== "number" || isNaN(index)) {
    throw new TypeError("Expected a valid number as the second argument.");
  }

  // Handle non-integer indexes by flooring the number
  const normalizedIndex = Math.floor(index);

  // If index is less than or equal to 0, return an empty array
  if (normalizedIndex <= 0) {
    return [];
  }

  // If index is larger than array length, return the entire array
  if (normalizedIndex >= arr.length) {
    return [...arr];
  }

  return arr.slice(0, normalizedIndex);
}
