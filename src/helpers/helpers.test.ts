import * as helpers from "./index";
import { Ability, Pokemon } from "@/types";

describe("PokemonPage", () => {
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
  const mockPokemonTwo = {
    abilities: [
      {
        ability: {
          name: "Solar Power",
          url: "https://pokeapi.co/api/v2/ability/65/",
        },
        is_hidden: true,
        slot: 1,
      },
    ],
  } as Pokemon;

  test("getNormalAbility returns the normal ability", () => {
    const ability = helpers.getNormalAbility(mockPokemon) as Ability;

    expect(ability.ability.name).toBe("overgrow");
    expect(ability.is_hidden).toBeFalsy();
  });

  test("getHiddenAbility returns the hidden ability", () => {
    const ability = helpers.getHiddenAbility(mockPokemonTwo) as Ability;

    expect(ability.ability.name).toBe("Solar Power");
    expect(ability.is_hidden).toBeTruthy();
  });
});
