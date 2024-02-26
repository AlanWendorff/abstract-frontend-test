'use server';

import { IPokemonDetailDTO } from 'interfaces/pokemon/dto/PokemonDetail.dto';
import { IPokemonListDTO } from 'interfaces/pokemon/dto/PokemonList.dto';

const getPokemons = async (url: string) => {
  const RESPONSE = await fetch(url);
  const POKEMONS: IPokemonListDTO = await RESPONSE.json();

  const POKEMONS_DETAIL_PROMISES = POKEMONS.results.map(async ({ url }) => (await fetch(url)).json());

  return { pokemon_list: (await Promise.all(POKEMONS_DETAIL_PROMISES)).map((res) => res as IPokemonDetailDTO), next_page: POKEMONS.next };
};

export default getPokemons;
