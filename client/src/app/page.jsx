"use client";
import { PokemonList } from "@/app/components";
import { useApi } from "@/utils/customHooks/useApi";

const mapResults = ({ results }) => {
  return results.map(({ url, name }) => ({
    url,
    name,
    id: parseInt(url?.match(/\/(\d+)\//)?.[1] || "0"),
  }));
};

export default function Home() {
  const { data: pokemonList } = useApi(
    "https://pokeapi.co/api/v2/pokemon/?limit=50",
    mapResults
  );
  return <PokemonList pokemonList={pokemonList} />;
}
