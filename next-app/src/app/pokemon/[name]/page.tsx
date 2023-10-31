import { PokemonPage } from "@/app/components";
import { fetchAndMapPokemonList, findPreviousAndNextPokemon } from "@/helpers";

interface Params {
  params: {
    name: string;
  };
}

const page = async ({ params }: Params) => {
  const { name } = params;
  const pokemonList = await fetchAndMapPokemonList();
  const { previous, next } = findPreviousAndNextPokemon(pokemonList, name);

  return <PokemonPage name={name} previous={previous} next={next} />;
};

export default page;
