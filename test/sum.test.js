import { it, expect, describe } from "vitest";
import sum from "../src/sum.js";

describe("sum", () => {
  it.each([
    {
      firstOperand: 1,
      secondOperand: 2,
      result: 3,
      scenario: "return 3 when given 1 and 2",
    },
  ])("should $scenario", ({ firstOperand, secondOperand, result }) => {
    expect(sum(firstOperand, secondOperand)).toBe(result);
  });
});
