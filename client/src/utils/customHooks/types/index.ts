import { AxiosError } from "axios";

// useState
type ApiState = {
  data: Pokemon[] | null;
  error: AxiosError | null;
  isLoading: boolean;
};
// Create the base (without id)
export interface PokemonBase {
  name: string;
  url: string;
}

// Create the interface with id
interface Pokemon extends PokemonBase {
  id: number;
}

// Create the type for the list of pokemons
interface PokemonListType {
  results: Pokemon[];
}

interface ResponseResults {
  results: PokemonBase[];
}

export type { ApiState, PokemonListType, ResponseResults };
