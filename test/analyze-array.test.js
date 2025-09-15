import { it, expect, describe } from "vitest";
import analyzeArray from "../src/analyze-array.js";

describe("analyzeArray", () => {
  it("gives analysis of a non-empty array", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });
});
