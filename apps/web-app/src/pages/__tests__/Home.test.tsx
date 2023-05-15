import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Home from "..";

describe("home", () => {
  it("should render", () => {
    render(<Home />);
    const main = within(screen.getByRole("main"));
    expect(main.getByText("Hello world", { selector: "h1" })).toBeDefined();
  });
});
