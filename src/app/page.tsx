import { PokemonList } from "@/app/components";
import { fetchAndMapPokemonList } from "@/helpers";

export default async function page() {
  const pokemonList = await fetchAndMapPokemonList();
  return <PokemonList pokemonList={pokemonList} />;
}
