import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { PokemonDetails } from "types";

export const usePokemon = (url: string) => {
  const fetchPokemon = async () => {
    const response = await axios.get<PokemonDetails>(url);
    return response.data;
  };

  const { data, error, isError, isLoading } = useQuery(
    ["pokemon", url],
    fetchPokemon,
  );

  return { data, error, isError, isLoading };
};
