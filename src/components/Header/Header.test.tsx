import { render as renderTl } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "testUtils";

import { Header } from "./Header";

describe("Header", () => {
  it("should display logo and search text", () => {
    render(<Header />);
    expect(screen.getByText("PokéDex")).toBeInTheDocument;
    expect(screen.getByTestId("search")).toBeInTheDocument;
  });

  it("should display back to home when not on home route", () => {
    renderTl(
      <MemoryRouter initialEntries={["/search/some-text"]}>
        <Header />
      </MemoryRouter>,
    );
    expect(screen.getByTestId("back-to-home")).toBeInTheDocument;
  });
});
