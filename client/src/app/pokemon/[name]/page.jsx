import { PokemonPage } from "@/app/components";

const mapResults = ({ results }) => {
  return results.map(({ url, name }) => ({
    url,
    name,
    id: parseInt(url?.match(/\/(\d+)\//)?.[1] || "0"),
  }));
};

const page = async ({ params }) => {
  const getTheData = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=50");
    const data = await response.json();
    return mapResults(data);
  };

  const pokemonList = await getTheData();

  const pokemonId = pokemonList?.find(({ name }) => name === params.name).id;
  const previous = pokemonList?.find(({ id }) => id === pokemonId - 1);
  const next = pokemonList?.find(({ id }) => id === pokemonId + 1);

  return <PokemonPage name={params.name} previous={previous} next={next} />;
};

export default page;
