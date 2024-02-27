import { useEffect, useState } from 'react';
import TPokemonDetailModel from 'types/models/PokemonDetail.model';
import { API_POKEMON_CATCH } from '@constants/api/routes';
import EApiMethods from '@constants/enum';
import { APP_URL, POKEAPI_URL } from '@constants/env';
import ICatchedPokemonDTO from 'interfaces/dto/api/CatchedPokemon.dto';
import pokemonDetailMapper from 'utils/mappers/pokemonDetail.mapper';

interface IusePokemonCaptured {
  pokemonList: TPokemonDetailModel[] | null;
  updateCapturedPokemons: (pokemonId: number) => void;
}

const usePokemonCaptured = (): IusePokemonCaptured => {
  const [pokemonList, setPokemonList] = useState<TPokemonDetailModel[] | null>(null);

  const getCapturedPokemons = async () => {
    const RESPONSE = await fetch(`${APP_URL}${API_POKEMON_CATCH}`, {
      method: EApiMethods.GET
    });

    const POKEMONS: ICatchedPokemonDTO = await RESPONSE.json();
    const POKEMONS_DETAIL_PROMISES = POKEMONS.catched_pokemon.map(async ({ id }) =>
      pokemonDetailMapper(await (await fetch(`${POKEAPI_URL}/pokemon/${id}`)).json())
    );

    setPokemonList((await Promise.all(POKEMONS_DETAIL_PROMISES)).map((res) => res as TPokemonDetailModel));
  };

  const updateCapturedPokemons = (pokemonId: number) => {
    const FILTERED_POKEMON = pokemonList?.filter(({ id }) => id !== pokemonId);

    FILTERED_POKEMON && setPokemonList(FILTERED_POKEMON);
  };

  useEffect(() => {
    getCapturedPokemons();
  }, []);

  return { pokemonList, updateCapturedPokemons };
};

export default usePokemonCaptured;
