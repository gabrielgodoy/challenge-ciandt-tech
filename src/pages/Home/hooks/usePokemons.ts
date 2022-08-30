import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

import { API_URL } from "../../../constants";

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonsResponse {
  next: string;
  results: Pokemon[];
}

export const usePokemons = () => {
  const [nextPageUrl, setNextPageUrl] = useState<null | string>(null);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [hasMoreResults, setHasMoreResults] = useState(true);

  const fetchPokemons = async () => {
    const response = await axios.get<PokemonsResponse>(
      nextPageUrl || `${API_URL}/pokemon?limit=10`,
    );
    return response.data;
  };

  const { data, error, isError, isLoading, refetch } = useQuery(
    ["pokemons"],
    fetchPokemons,
    {
      onSuccess: (responseData) => {
        setNextPageUrl(responseData?.next);
        if (!data?.next) {
          setHasMoreResults(false);
        }
      },
    },
  );

  useEffect(() => {
    if (data?.results.length) {
      setPokemons((pokemonsState) => [...pokemonsState, ...data.results]);
    }
  }, [data]);

  return {
    pokemons,
    hasMoreResults,
    error,
    isError,
    isLoading,
    refetch,
  };
};
