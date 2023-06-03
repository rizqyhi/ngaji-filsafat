import { expect, test } from "vitest";
import { parseDate } from "./utils";

test("should parse date correctly", () => {
  expect(parseDate("23-05-31")).toBe("2023-05-01T00:00:00.000Z");
  expect(parseDate("19-09-04")).toBe("2019-09-04T00:00:00.000Z");
  expect(parseDate("19-11-20")).toBe("2019-11-20T00:00:00.000Z");
});
