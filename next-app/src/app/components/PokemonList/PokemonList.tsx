import Link from "next/link";
import { MappedPokemon } from "@/types";

const PokemonList = ({ pokemonList }: { pokemonList: MappedPokemon[] }) => {
  return (
    <div className="flex flex-wrap">
      {pokemonList &&
        pokemonList.map(({ id, name }) => (
          <Link
            key={id}
            href={`/pokemon/${name}`}
            className="list-item"
            style={{
              // eslint-disable-next-line max-len
              backgroundImage: `url(${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`})`,
            }}
          >
            <div className="list-item-name">{name}</div>
          </Link>
        ))}
    </div>
  );
};

export default PokemonList;
