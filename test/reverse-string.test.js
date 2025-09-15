import { it, expect, describe } from "vitest";
import reverseString from "../src/reverse-string.js";

describe("reverseString", () => {
  it('given "abc" it returns "cba"', () => {
    expect(reverseString("abc")).toBe("cba");
  });
});
