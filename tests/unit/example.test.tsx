import { describe, expect, test } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Home from "@/app/page";
describe("test Home", () => {
  test("home", async () => {
    const Result = await Home();
    render(Result);

    const text = screen.getByLabelText("text");
    expect(text.textContent).toBe("Explore the Next.js 13 playground.");
  });
});
