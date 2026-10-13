import { Primitive } from "../../types/primitive";

describe("Primitive type", () => {
  it("should allow string values", () => {
    const value: Primitive = "Hello, World!";
    expect(typeof value).toBe("string");
  });

  it("should allow number values", () => {
    const value: Primitive = 42;
    expect(typeof value).toBe("number");
  });

  it("should allow boolean values", () => {
    const value: Primitive = true;
    expect(typeof value).toBe("boolean");
  });
});
