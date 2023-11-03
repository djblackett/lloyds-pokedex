import Link from "next/link";
import { PokemonAbility } from "@/app/components";
import {
  fetchPokemon,
  getTypes,
  getStats,
  getNormalAbility,
  getHiddenAbility,
} from "@/helpers";
import { MappedPokemon } from "@/types";

const formatName = (nameWithDash: string) => nameWithDash.replace("-", " ");

interface PokemonPageProps {
  previous?: MappedPokemon;
  next?: MappedPokemon;
  name: string;
}

const PokemonPage = async ({ previous, next, name }: PokemonPageProps) => {
  const pokemon = await fetchPokemon(name);
  const types = getTypes(pokemon);
  const stats = getStats(pokemon);

  const normalAbility = getNormalAbility(pokemon);
  const hiddenAbility = getHiddenAbility(pokemon);

  return (
    <>
      <div className="flex justify-between mb-2 text-decoration-none w-80">
        {previous && <Link href={`/pokemon/${previous?.name}`}>Previous</Link>}
        <Link href="/">Home</Link>
        {next && <Link href={`/pokemon/${next?.name}`}>Next</Link>}
      </div>
      <div className={`pokemon-page pokemon-type-${types?.type.name}`}>
        <div
          className="pokemon-image"
          style={{ backgroundImage: `url(${pokemon?.sprites.front_default})` }}
        />
        <div className="pokemon-info">
          <h2 data-testid="pokemon-name" className="pokemon-name">
            {pokemon?.name}
          </h2>
          <div className="pokemon-stats" data-testid="stats">
            <table>
              <tbody>
                {stats?.map(({ name, value }) => (
                  <tr key={name}>
                    <td className="pokemon-stats-name">{name}</td>
                    <td className="pokemon-stats-value">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="pokemon-abilities">
            {normalAbility && (
              <PokemonAbility
                abilityName={formatName(normalAbility.ability.name)}
              />
            )}
            {hiddenAbility && (
              <PokemonAbility
                abilityName={formatName(hiddenAbility.ability.name)}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonPage;
