'use server';

import { IPokemonListDTO } from 'interfaces/dto/pokeapi/PokemonList.dto';
import TPokemonDetailModel from 'types/models/PokemonDetail.model';
import pokemonDetailMapper from 'utils/mappers/pokemonDetail.mapper';

const getPokemons = async (url: string) => {
  const RESPONSE = await fetch(url);
  const POKEMONS: IPokemonListDTO = await RESPONSE.json();

  const POKEMONS_DETAIL_PROMISES = POKEMONS.results.map(async ({ url }) => pokemonDetailMapper(await (await fetch(url)).json()));

  return { pokemon_list: (await Promise.all(POKEMONS_DETAIL_PROMISES)).map((res) => res as TPokemonDetailModel), next_page: POKEMONS.next };
};

export default getPokemons;
