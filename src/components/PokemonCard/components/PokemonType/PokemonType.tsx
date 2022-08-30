import { TPokemonType } from "types";

import { capitalize } from "../../../../utils";
import styles from "./PokemonType.module.scss";

interface IPokemonTypeProps {
  type: TPokemonType;
}

export const PokemonType = ({ type }: IPokemonTypeProps) => {
  return (
    <div className={`${styles[type]} ${styles.type}`}>{capitalize(type)}</div>
  );
};
