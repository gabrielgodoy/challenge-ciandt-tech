import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

import { PokemonCard } from "../../components/PokemonCard";
import styles from "./Home.module.scss";
import { usePokemons } from "./hooks/usePokemons";

export const Home = () => {
  const { pokemons, isLoading, refetch } = usePokemons();

  return (
    <div className={styles.container}>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <div className={styles.pokemons}>
            {pokemons?.map((pokemon, index) => (
              <PokemonCard apiUrl={pokemon.url} key={index} />
            ))}
          </div>
          <Button
            data-testid="load-more"
            onClick={() => refetch()}
            variant="contained"
          >
            Load more Pokémon
          </Button>
        </>
      )}
    </div>
  );
};
