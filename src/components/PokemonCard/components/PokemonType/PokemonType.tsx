import cx from "classnames";
import { TPokemonType } from "types";

import { capitalize } from "../../../../utils";
import styles from "./PokemonType.module.scss";

interface IPokemonTypeProps {
  type: TPokemonType;
  isLarge?: boolean;
}

export const PokemonType = ({ type, isLarge = false }: IPokemonTypeProps) => {
  return (
    <div
      className={cx(styles[type], styles.type, {
        [styles.large]: isLarge,
      })}
    >
      {capitalize(type)}
    </div>
  );
};
