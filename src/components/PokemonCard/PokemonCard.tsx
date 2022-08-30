import CircularProgress from "@mui/material/CircularProgress";
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

  const handleCardClick = () => {
    navigate(`/pokemon/${data?.name}`, { state: data });
  };

  return (
    <div className={styles.container} onClick={handleCardClick}>
      <div className={styles.image}>
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
        <div className={styles.number}>{data?.id ? `#${data?.id}` : ""}</div>
        <div className={styles.name}>{capitalize(data?.name)}</div>
        <div className={styles.types}>
          {data?.types.map((type, index) => (
            <PokemonType key={index} type={type.type.name} />
          ))}
        </div>
      </div>
    </div>
  );
};
