import Link from "next/link";

const PokemonList = ({ pokemonList }) => {
  return (
    <div className="list-container">
      {pokemonList &&
        pokemonList.map(({ id, name }) => (
          <Link
            key={id}
            href={`/pokemon/${name}`}
            className="list-item"
            style={{
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
