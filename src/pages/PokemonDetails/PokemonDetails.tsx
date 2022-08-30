import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IAbility, IPokemonDetails } from "types";
import { capitalize } from "utils";

import { PokemonType } from "./../../components/PokemonCard/components/PokemonType";
import styles from "./PokemonDetails.module.scss";

interface ILocationState {
  state: IPokemonDetails | null;
}

export const PokemonDetails = () => {
  const { state } = useLocation() as ILocationState;
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, [navigate, state]);

  console.log("state", state);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.name}>{capitalize(state?.name)}</span>{" "}
        <span className={styles.number}>#{state?.id}</span>
      </div>

      <div className={styles.body}>
        <div className={styles.leftColumn}>
          <div className={styles.image}>
            <img
              src={
                state?.sprites.other["official-artwork"].front_default ||
                state?.sprites.front_default
              }
            />
          </div>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.section}>
            <div className={styles.sectionTitle}>Weight</div>
            <div className={styles.sectionValue}>{state?.weight || "-"} Kg</div>
          </div>

          <div className={styles.section}>
            <div className={styles.sectionTitle}>Height</div>
            <div className={styles.sectionValue}>{state?.height || "-"}</div>
          </div>

          <div className={styles.section}>
            <div className={styles.sectionTitle}>Base Experience</div>
            <div className={styles.sectionValue}>
              {state?.base_experience || "-"}
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.sectionTitle}>Types</div>
            <div className={styles.types}>
              {state?.types.map((type, index) => (
                <PokemonType isLarge key={index} type={type.type.name} />
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.sectionTitle}>Abilities</div>
            <div className={styles.abilities}>
              {state?.abilities.map((ability, index) => (
                <div className={styles.ability} key={index}>
                  {capitalize(ability.ability.name)}
                  {ability.is_hidden && <span> (hidden ability)</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
