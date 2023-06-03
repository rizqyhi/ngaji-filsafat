import { expect, test } from "vitest";
import { parseDate, extractVideoIdFromUrl } from "./utils";

test("should parse date correctly", () => {
  expect(parseDate("23-05-31")).toBe("2023-05-31T00:00:00.000Z");
  expect(parseDate("19-09-04")).toBe("2019-09-04T00:00:00.000Z");
  expect(parseDate("19-09-11")).toBe("2019-09-11T00:00:00.000Z");
  expect(parseDate("19-11-20")).toBe("2019-11-20T00:00:00.000Z");
});

test("extract YouTube video ID from URL", () => {
  const urls = {
    "https://www.youtube.com/watch?v=KRLlhLkwESE": "KRLlhLkwESE",
    "https://www.youtube.com/watch?v=_iN__7NgCwk": "_iN__7NgCwk",
    "https://www.youtube.com/watch?v=6JsjszdfzW4&list=PL4WN5OeL0n_ZABoKx4G9yM6FzlP0_zp18&index=14&t=3s":
      "6JsjszdfzW4",
    "https://www.youtube.com/watch?v=lhRPrGb6oJA&t=17s": "lhRPrGb6oJA",
    "https://www.youtube.com/watch?v=zdH9e7CnW3Q&t=5316s": "zdH9e7CnW3Q",
    "https://youtu.be/eL8opCDQLmY": "eL8opCDQLmY",
    "https://www.youtube.com/watch?v=bVxAwQfBsoY&pp=ygUSbmdhamkgZmlsc2FmYXQgMTk3":
      "bVxAwQfBsoY",
    "https://www.youtube.com/watch?v=wPJmc-En-rQ&feature=youtu.be":
      "wPJmc-En-rQ",
  };

  for (const url in urls) {
    expect(extractVideoIdFromUrl(url)).toBe(urls[url]);
  }
});
