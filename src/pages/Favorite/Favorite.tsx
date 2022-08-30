import { PokemonCard } from "components/PokemonCard";
import { useEffect, useState } from "react";

import styles from "./Favorite.module.scss";

export const Favorite = () => {
  const [favorites, setFavorites] = useState<string[] | null>();

  useEffect(() => {
    const pokemons: string[] = JSON.parse(
      localStorage.getItem("pokemons") as string,
    );
    setFavorites(pokemons);
  }, []);

  return (
    <>
      {favorites?.length ? (
        <div className={styles.grid}>
          {favorites?.map((favorite, index) => (
            <PokemonCard apiUrl={favorite} key={index} />
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>There are no results :(</div>
      )}
    </>
  );
};
