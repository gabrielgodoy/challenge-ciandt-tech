import { render, screen } from "testUtils";
import { TPokemonType } from "types";

import * as hooks from "./hooks/usePokemon";
import { PokemonCard } from "./PokemonCard";

describe("PokemonCard", () => {
  it("should render correct elements on card", () => {
    const hookResponse = {
      data: {
        id: 123,
        name: "Some Pokemon",
        abilities: [],
        weight: 12,
        types: [
          { type: { name: "fire" as TPokemonType } },
          { type: { name: "flying" as TPokemonType } },
        ],
        height: 12,
        base_experience: 50,
        stats: [],
        sprites: {
          front_default: "",
          other: { "official-artwork": { front_default: "" } },
        },
      },
      isError: false,
      isLoading: false,
    };
    jest.spyOn(hooks, "usePokemon").mockImplementation(() => hookResponse);
    render(<PokemonCard apiUrl="someUrl" />);
    expect(screen.getByTestId("pokemon-img")).toBeInTheDocument;
    expect(screen.getByText("#123")).toBeInTheDocument;
    expect(screen.getByText("Some Pokemon")).toBeInTheDocument;
    expect(screen.getByText("Fire")).toBeInTheDocument;
    expect(screen.getByText("Flying")).toBeInTheDocument;
  });

  it("should display loading if request is in progress", () => {
    const hookResponse = {
      data: undefined,
      isError: false,
      isLoading: true,
    };
    jest.spyOn(hooks, "usePokemon").mockImplementation(() => hookResponse);
    render(<PokemonCard apiUrl="someUrl" />);
    expect(screen.getByTestId("loading")).toBeInTheDocument;
  });
});
