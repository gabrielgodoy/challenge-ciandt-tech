import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_URL } from "consts";
import { useState } from "react";
import { Pokemon, PokemonsResponse } from "types";

export const usePokemons = () => {
  const [nextPageUrl, setNextPageUrl] = useState<null | string>(null);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const fetchPokemons = async () => {
    const response = await axios.get<PokemonsResponse>(
      nextPageUrl || `${API_URL}/pokemon?limit=10`,
    );
    return response.data;
  };

  const { isLoading, refetch } = useQuery(["pokemons"], fetchPokemons, {
    onSuccess: (responseData) => {
      setNextPageUrl(responseData?.next);
      if (responseData?.results.length) {
        setPokemons((pokemonsState) => [
          ...pokemonsState,
          ...responseData.results,
        ]);
      }
    },
  });

  return {
    pokemons,
    isLoading,
    refetch,
  };
};
