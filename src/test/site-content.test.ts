import { describe, expect, it } from "vitest";
import { officePrinciples } from "@/lib/site-content";

describe("Office information", () => {
  it("includes why the office, its vision, goals, and mission", () => {
    expect(officePrinciples.map(({ title }) => title)).toEqual([
      "لماذا نحن",
      "رؤيتنا",
      "هدفنا",
      "رسالتنا",
    ]);
  });
});