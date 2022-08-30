export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonsResponse {
  next: string;
  results: Pokemon[];
}
