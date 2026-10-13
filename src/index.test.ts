import * as index from "./index";
import * as utils from "./utils";
import * as types from "./types";

describe("index module", () => {
  it("should export everything from utils", () => {
    for (const key in utils) {
      expect(index).toHaveProperty(key);
    }
  });

  it("should export everything from types", () => {
    for (const key in types) {
      expect(index).toHaveProperty(key);
    }
  });
});
