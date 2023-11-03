import { render, screen } from "@testing-library/react";
import React from "react";
import PokemonList from "../PokemonList/PokemonList";

describe("PokemonList", () => {
  test("renders PokemonList component", () => {
    const pokemonList = [
      {
        id: 1,
        name: "bulbasaur",
        url: "https://pokeapi.co/api/v2/pokemon/1/",
      },
      {
        id: 2,
        name: "ivysaur",
        url: "https://pokeapi.co/api/v2/pokemon/2/",
      },
    ];

    render(<PokemonList pokemonList={pokemonList} />);

    expect(screen.queryByText("bulbasaur")).toBeTruthy();
    expect(screen.queryByText("ivysaur")).toBeTruthy();
    expect(screen.queryByText("jimmy")).toBeFalsy();
  });
});
