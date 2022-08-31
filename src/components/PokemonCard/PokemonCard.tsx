import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import CircularProgress from "@mui/material/CircularProgress";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { capitalize } from "../../utils";
import { PokemonType } from "./components/PokemonType";
import { usePokemon } from "./hooks/usePokemon";
import styles from "./PokemonCard.module.scss";

interface IPokemonCardProps {
  apiUrl: string;
}

export const PokemonCard = ({ apiUrl }: IPokemonCardProps) => {
  const navigate = useNavigate();
  const { data, isLoading } = usePokemon(apiUrl);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleCardClick = () => {
    navigate(`/pokemon/${data?.name}`, { state: data });
  };

  const handleFavorite = useCallback(() => {
    const pokemons: string[] = JSON.parse(
      localStorage.getItem("pokemons") as string,
    );
    const isFavorited = pokemons?.includes(apiUrl);
    if (isFavorited) {
      setIsFavorite(false);
      localStorage.setItem(
        "pokemons",
        JSON.stringify(pokemons.filter((pokemon) => pokemon !== apiUrl)),
      );
    } else {
      setIsFavorite(true);
      if (pokemons) {
        localStorage.setItem("pokemons", JSON.stringify([...pokemons, apiUrl]));
      }
    }
  }, [apiUrl]);

  useEffect(() => {
    const pokemons: string[] = JSON.parse(
      localStorage.getItem("pokemons") as string,
    );
    const isFavorited = pokemons?.includes(apiUrl);
    if (isFavorited) {
      setIsFavorite(true);
    }
  }, [handleFavorite, apiUrl]);

  return (
    <div className={styles.container}>
      <div className={styles.image} onClick={handleCardClick}>
        {isLoading ? (
          <CircularProgress data-testid="loading" />
        ) : (
          <img
            data-testid="pokemon-img"
            src={
              data?.sprites.other["official-artwork"].front_default ||
              data?.sprites.front_default
            }
          />
        )}
      </div>
      <div className={styles.details}>
        <div className={styles.upperDetails}>
          <div className={styles.upperText}>
            <div className={styles.number}>
              {data?.id ? `#${data?.id}` : ""}
            </div>
            <div className={styles.name}>{capitalize(data?.name)}</div>
          </div>
          <div className={styles.favorite} onClick={handleFavorite}>
            {isFavorite ? <StarIcon /> : <StarOutlineIcon />}
          </div>
        </div>

        <div className={styles.types}>
          {data?.types.map((type, index) => (
            <PokemonType key={index} type={type.type.name} />
          ))}
        </div>
      </div>
    </div>
  );
};
