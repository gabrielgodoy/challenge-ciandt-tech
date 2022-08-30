import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

import { PokemonCard } from "../../components/PokemonCard";
import { usePokemons } from "./hooks/usePokemons";

export const Home = () => {
  const { pokemons, isLoading, refetch } = usePokemons();

  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          {pokemons?.map((pokemon, index) => (
            <PokemonCard apiUrl={pokemon.url} key={index} name={pokemon.name} />
          ))}
          <Button onClick={() => refetch()} variant="contained">
            Load more Pokémon
          </Button>
        </>
      )}
    </>
  );
};
