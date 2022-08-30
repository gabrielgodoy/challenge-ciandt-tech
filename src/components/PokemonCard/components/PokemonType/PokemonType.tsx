import { capitalize } from "../../../../utils";
import styles from "./PokemonType.module.scss";

export type TPokemonType =
  | "normal"
  | "fighting"
  | "flying"
  | "poison"
  | "ground"
  | "rock"
  | "bug"
  | "ghost"
  | "steel"
  | "fire"
  | "water"
  | "grass"
  | "electric"
  | "psychic"
  | "ice"
  | "dragon"
  | "dark"
  | "fairy"
  | "unknown"
  | "shadow";

interface IPokemonTypeProps {
  type: TPokemonType;
}

export const PokemonType = ({ type }: IPokemonTypeProps) => {
  return (
    <div className={`${styles[type]} ${styles.type}`}>{capitalize(type)}</div>
  );
};
