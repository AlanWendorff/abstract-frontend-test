'use server';

import { API_POKEMON_CATCH } from '@constants/api/routes';
import EApiMethods from '@constants/enum';
import { APP_URL, POKEAPI_URL } from '@constants/env';
import ICatchedPokemonDTO from 'interfaces/dto/api/CatchedPokemon.dto';
import { IPokemonDetailDTO } from 'interfaces/dto/pokeapi/PokemonDetail.dto';
import pokemonDetailMapper from 'utils/mappers/pokemonDetail.mapper';

const getCapturedPokemons = async () => {
  const RESPONSE = await fetch(`${APP_URL}${API_POKEMON_CATCH}`, {
    method: EApiMethods.GET
  });

  const POKEMONS: ICatchedPokemonDTO = await RESPONSE.json();

  const POKEMONS_DETAIL_PROMISES = POKEMONS.catched_pokemon.map(async ({ id }) =>
    pokemonDetailMapper(await (await fetch(`${POKEAPI_URL}/pokemon/${id}`)).json())
  );

  return { pokemon_list: (await Promise.all(POKEMONS_DETAIL_PROMISES)).map((res) => res as IPokemonDetailDTO) };
};

export default getCapturedPokemons;
