import { PokemonList } from "@/app/components";
// import { useApi } from "@/utils/customHooks/useApi";

const mapResults = ({ results }) => {
  return results.map(({ url, name }) => ({
    url,
    name,
    id: parseInt(url?.match(/\/(\d+)\//)?.[1] || "0"),
  }));
};

export default async function Home() {
  const getData = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=50");
    const data = await response.json();
    return mapResults(data);
  };
  const pokemonList = await getData();

  return <PokemonList pokemonList={pokemonList} />;
}
