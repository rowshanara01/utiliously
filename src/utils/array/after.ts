/**
 *
 * Returns a new array containing all elements after the specified index.
 * @param array - The source array
 * @param index - The index after which to return elements
 * @returns A new array containing the elements after the given index, or an empty array if index is out of bounds
 */

export function after<T>(array: T[], index: number): T[] {
  if (!Array.isArray(array)) {
    throw new TypeError("Expected an array as the first argument.");
  }

  if (typeof index !== "number" || isNaN(index)) {
    throw new TypeError("Expected a valid number as the second argument.");
  }

  // Handle non-integer indexes by flooring the number
  const normalizedIndex = Math.floor(index);

  if (normalizedIndex < 0) {
    return [];
  }

  // If index is larger than array length, return the entire array
  if (normalizedIndex >= array.length) {
    return [...array];
  }

  return array.slice(normalizedIndex);
}
