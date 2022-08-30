import { fireEvent, render, screen } from "testUtils";

import { Home } from "./Home";
import * as hooks from "./hooks/usePokemons";

describe("Home", () => {
  it("should trigger refetch when clicking on more", () => {
    const refetchFn = jest.fn();

    jest.spyOn(hooks, "usePokemons").mockImplementation(() => ({
      refetch: refetchFn,
      pokemons: [],
      isLoading: false,
    }));
    render(<Home />);
    fireEvent.click(screen.getByTestId("load-more"));
    expect(refetchFn).toHaveBeenCalled();
  });
});
