import { API_POKEMON_CATCH, API_POKEMON } from '@constants/api/routes';
import EApiMethods from '@constants/enum';
import IIsCatchedPokemonDTO from 'interfaces/dto/api/IsCatchedPokemon.dto';
import { useEffect, useState } from 'react';
import TPokemonDetailModel from 'types/models/PokemonDetail.model';

interface IUseCatchPokemonReturn {
  isPokemonCatched: boolean;
  handlePokemon: (pokemonId: number, pokemonName: string) => void;
}

interface IUseCatchPokemonProps {
  pokemon: TPokemonDetailModel;
}

const useCatchPokemon = ({ pokemon }: IUseCatchPokemonProps): IUseCatchPokemonReturn => {
  const [isPokemonCatched, setIsPokemonCatched] = useState(false);

  const handlePokemon = (pokemonId: number, pokemonName: string) => {
    isPokemonCatched ? handleFreePokemon(pokemonId) : handleCatchPokemon(pokemonId, pokemonName);
  };

  const handleCatchPokemon = async (pokemonId: number, pokemonName: string) => {
    await fetch(API_POKEMON_CATCH, {
      method: EApiMethods.POST,
      body: JSON.stringify({ id: pokemonId, name: pokemonName })
    }).then(() => handleIsPokemonCatched(pokemon.id));
  };

  const handleFreePokemon = async (pokemonId: number) => {
    await fetch(`${API_POKEMON}/${pokemonId}`, {
      method: EApiMethods.DELETE
    }).then(() => handleIsPokemonCatched(pokemon.id));
  };

  const handleIsPokemonCatched = async (pokemonId: number) => {
    await fetch(`${API_POKEMON}/${pokemonId}`, {
      method: EApiMethods.GET
    }).then(async (res) => {
      const { is_pokemon_catched }: IIsCatchedPokemonDTO = await res.json();
      setIsPokemonCatched(is_pokemon_catched);
    });
  };

  useEffect(() => {
    handleIsPokemonCatched(pokemon.id);
  }, [pokemon]);

  return { isPokemonCatched, handlePokemon };
};

export default useCatchPokemon;
