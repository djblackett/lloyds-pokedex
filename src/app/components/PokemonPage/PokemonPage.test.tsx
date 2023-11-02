import * as helpers from "../../../helpers";
import { Ability, Pokemon } from "@/types";

describe("PokemonPage", () => {
  test("getNormalAbility returns the normal ability", () => {
    const mockPokemon = {
      abilities: [
        {
          ability: {
            name: "overgrow",
            url: "https://pokeapi.co/api/v2/ability/65/",
          },
          is_hidden: false,
          slot: 1,
        },
      ],
    } as Pokemon;

    const ability = helpers.getNormalAbility(mockPokemon) as Ability;

    expect(ability.ability.name).toBe("overgrow");
    expect(ability.is_hidden).toBeFalsy();
  });
});
