import { PokemonCard } from "components/PokemonCard";
import { useParams } from "react-router-dom";

import { useSearch } from "./hooks/useSearch";
import styles from "./Search.module.scss";

export const Search = () => {
  const params = useParams();

  const { data } = useSearch(params.id as string);

  return (
    <div>
      Search results for &quot;<strong>{params.id}</strong>&quot;
      {data && data.length > 0 ? (
        <div className={styles.pokemons}>
          {data?.map((pokemon, index) => (
            <PokemonCard apiUrl={pokemon.url} key={index} />
          ))}
        </div>
      ) : (
        <div className={styles.noResults}>There are no results :(</div>
      )}
    </div>
  );
};
