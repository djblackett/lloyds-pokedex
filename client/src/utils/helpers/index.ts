interface PokemonResult {
  url: string;
  name: string;
}

interface PokemonListData {
  results: PokemonResult[];
}

interface MappedPokemon {
  url: string;
  name: string;
  id: number;
}

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
