import { Primitive } from "../../types/primitive";

/**
 *
 * Generic sorting function that can handle strings, numbers, booleans, and nested objects/arrays.
 * @param array - The array of objects/arrays to sort.
 * @param path - The key or nested path to sort by (e.g., 'user.name' or 'stats[0].score').
 * @param order - The order of sorting: (default is 'asc').
 */
export function deepSort<T extends Record<string, unknown>>(
  array: T[],
  path: string,
  order: "asc" | "desc" = "asc",
  pushUndefinedToEnd = false
): T[] {
  // Helper function to resolve the nested value from an object using a string path
  const resolveValue = (
    obj: Record<string, unknown>,
    path: string
  ): Primitive | undefined => {
    // Split the path by "." and support array access using bracket notation
    const keys = path.split(/[.[\]]/).filter(Boolean);

    const resolvedValue = keys.reduce(
      (
        acc: Record<string, unknown> | undefined,
        key
      ): Record<string, unknown> | undefined =>
        acc && typeof acc === "object" && key in acc
          ? (acc[key as keyof typeof acc] as
              | Record<string, unknown>
              | undefined)
          : undefined,
      obj
    );

    return typeof resolvedValue === "string" ||
      typeof resolvedValue === "number" ||
      typeof resolvedValue === "boolean"
      ? resolvedValue
      : undefined;
  };

  // Comparison logic for sorting
  const compare = (a: Primitive, b: Primitive): number => {
    if (typeof a === "boolean" && typeof b === "boolean") {
      return Number(a) - Number(b);
    } else if (typeof a === "number" && typeof b === "number") {
      return a - b;
    } else if (typeof a === "string" && typeof b === "string") {
      return a.localeCompare(b);
    }
    return 0;
  };

  // Sort the array based on the resolved values
  return array.sort((a, b) => {
    const aValue = resolveValue(a, path);
    const bValue = resolveValue(b, path);

    if (aValue === undefined && bValue === undefined) return 0;
    if (pushUndefinedToEnd) {
      // Custom handling for undefined values: push undefined values to the end
      if (aValue === undefined) return 1;
      if (bValue === undefined) return -1;
    } else {
      // Custom handling for undefined values: push undefined values to the end for sort order asc only
      if (aValue === undefined) return order === "asc" ? 1 : -1;
      if (bValue === undefined) return order === "asc" ? -1 : 1;
    }

    const result = compare(aValue, bValue);
    return order === "asc" ? result : -result;
  });
}
