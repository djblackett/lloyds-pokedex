import Link from "next/link";
import { PokemonAbility } from "@/app/components";
import { fetchPokemon } from "@/utils/helpers";

const formatName = (nameWithDash) => nameWithDash.replace("-", " ");

const PokemonPage = async ({ previous, next, name }) => {
  const pokemon = await fetchPokemon(name);

  const types = pokemon?.types?.find((type) => type.slot === 1);

  const stats = pokemon?.stats
    .map((stat) => ({
      name: formatName(stat.stat.name),
      value: stat.base_stat,
    }))
    .reverse();
  const normalAbility = pokemon?.abilities.find(
    (ability) => !ability.is_hidden
  );
  const hiddenAbility = pokemon?.abilities.find(
    (ability) => ability.is_hidden === true
  );
  /* eslint-disable no-console */
  console.log("hiddenAbility=", hiddenAbility);
  /* eslint-disable no-console */
  return (
    <>
      <div className="links">
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
          <div className="pokemon-name">{pokemon?.name}</div>
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
