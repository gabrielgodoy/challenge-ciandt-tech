import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { TPokemonType } from "../components/PokemonType";

interface PokemonResponse {
  id: number;
  name: string;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  types: {
    type: { name: TPokemonType };
  }[];
}

export const usePokemon = (url: string) => {
  const fetchPokemon = async () => {
    const response = await axios.get<PokemonResponse>(url);
    return response.data;
  };

  const { data, error, isError, isLoading } = useQuery(
    ["pokemon", url],
    fetchPokemon,
  );

  return { data, error, isError, isLoading };
};
