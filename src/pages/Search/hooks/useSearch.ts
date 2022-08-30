import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_URL } from "consts";
import { PokemonsResponse } from "types";

export const useSearch = (search: string) => {
  const fetchAllPokemons = async () => {
    const response = await axios.get<PokemonsResponse>(
      `${API_URL}/pokemon?limit=10000`,
    );
    return response.data;
  };

  const { data } = useQuery(["search"], fetchAllPokemons);

  return {
    data: data?.results.filter((result) =>
      result.name.includes(search.toLowerCase()),
    ),
  };
};
