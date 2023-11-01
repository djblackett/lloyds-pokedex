import { PokemonListData, MappedPokemon, Pokemon } from "@/types";

const mapPokemonList = ({ results }: PokemonListData): MappedPokemon[] => {
  return results.map(({ url, name }) => ({
    url,
    name,
    id: parseInt(url?.match(/\/(\d+)\//)?.[1] || "0"),
  }));
};

export const fetchAndMapPokemonList = async (): Promise<MappedPokemon[]> => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=50");
  const data: PokemonListData = await response.json();
  return mapPokemonList(data);
};

export const findPokemonId = (pokemonList: MappedPokemon[], name: string) => {
  const pokemon = pokemonList.find((pokemon) => pokemon.name === name);
  return pokemon ? pokemon.id : null;
};

export const findPreviousAndNextPokemon = (
  pokemonList: MappedPokemon[],
  name: string
) => {
  const pokemonId = findPokemonId(pokemonList, name);
  if (!pokemonId) return { previous: undefined, next: undefined };
  const previous = pokemonList?.find((pokemon) => pokemon.id === pokemonId - 1);
  const next = pokemonList?.find((pokemon) => pokemon.id === pokemonId + 1);
  return { previous, next };
};

export const fetchPokemon = async (name: string) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data: Pokemon = await response.json();

  return data;
};

export const getTypes = (pokemon: Pokemon) => {
  return pokemon?.types?.find((type) => type.slot === 1);
};

const formatName = (nameWithDash: string) => nameWithDash.replace("-", " ");

export const getStats = (pokemon: Pokemon) => {
  return pokemon?.stats
    ?.map((stat) => ({
      name: formatName(stat.stat.name),
      value: stat.base_stat,
    }))
    .reverse();
};

export const getNormalAbility = (pokemon: Pokemon) => {
  return pokemon?.abilities?.find((ability) => !ability.is_hidden);
};

export const getHiddenAbility = (pokemon: Pokemon) => {
  return pokemon?.abilities?.find((ability) => ability.is_hidden === true);
};
