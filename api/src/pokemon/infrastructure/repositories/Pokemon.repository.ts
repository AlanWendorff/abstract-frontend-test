/* import httpMock from '../../../configuration/http/Http.mock';
import IPokemonRepository from '../../domain/repositories/Pokemon.repository';
import IPokemonDTO from '../../../configuration/http/dto/Pokemon.dto';
import { BASE_URL } from '../../../configuration/constants/env'; */

const pokemonRepository = () /* : IPokemonRepository  */ => ({
  getPokemon: async () => {
    /*  try {
      return await httpMock.get<IPokemonDTO>(`${BASE_URL}/pokemon`);
    } catch (error) {
      throw new Error(`Error getting user: ${error}`);
    } */
  }
});

export default pokemonRepository;
