import styles from "./PokemonCard.module.scss";

interface IPokemonCardProps {
  apiUrl: string;
  name: string;
}

export const PokemonCard = ({ apiUrl, name }: IPokemonCardProps) => {
  return <div className={styles.container}>{name}</div>;
};
