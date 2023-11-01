import Link from "next/link";
import { MappedPokemon } from "@/types";
import Image from "next/image";

const PokemonList = ({ pokemonList }: { pokemonList: MappedPokemon[] }) => {
  return (
    <div className="flex flex-wrap">
      {pokemonList &&
        pokemonList.map(({ id, name }) => (
          <Link
            key={id}
            href={`/pokemon/${name}`}
            className="m-2 h-36 w-36 relative border border-[#3F477A] rounded-md shadow-md"
          >
            <div className="bg-[#eee] bg-center bg-no-repeat">
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                alt={name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="absolute bottom-0 w-full text-center capitalize bg-[#272822] text-[#2e51ff]">
              {name}
            </div>
          </Link>
        ))}
    </div>
  );
};

export default PokemonList;
