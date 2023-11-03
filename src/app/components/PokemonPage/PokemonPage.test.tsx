import { render, screen } from "@testing-library/react";
import PokemonPage from "./PokemonPage";
import { vi } from "vitest";
import * as helpers from "@/helpers";
import data from "./data.json";
import { Pokemon } from "@/types";

describe("PokemonPage", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  test("Checks component renders correctly", async () => {
    const spy = vi.spyOn(helpers, "fetchPokemon").mockImplementation(() => {
      return Promise.resolve(data as unknown as Pokemon);
    });

    const jsx = await PokemonPage({ name: "bulbasaur" });
    render(jsx);

    const headingElement = screen.getByTestId("pokemon-name");
    expect(headingElement).toBeTruthy();
    expect(headingElement.textContent).toBe("bulbasaur");
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
