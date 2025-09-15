import { it, expect, describe } from "vitest";
import capitalize from "../src/capitalize.js";

describe("capitalize", () => {
  it('given a string "alfred" it returns "Alfred"', () => {
    expect(capitalize("alfred")).toBe("Alfred");
  });

  it("given an empty string it returns the empty string", () => {
    expect(capitalize("")).toBe("");
  });
});
