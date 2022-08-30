export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonsResponse {
  next: string;
  results: Pokemon[];
}

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

export interface IStat {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface IAbility {
  ability: {
    name: string;
  };
  is_hidden: boolean;
}

export interface IPokemonDetails {
  id: number;
  name: string;
  abilities: IAbility[];
  weight: number;
  height: number;
  base_experience: number;
  sprites: {
    front_default: string;
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  types: {
    type: { name: TPokemonType };
  }[];
  stats: IStat[];
}
