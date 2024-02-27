import { IPokemonDetailDTO } from 'interfaces/dto/pokeapi/PokemonDetail.dto';
import TPokemonDetailModel from 'types/models/PokemonDetail.model';

const pokemonDetailMapper = (dto: IPokemonDetailDTO): TPokemonDetailModel => ({
  id: dto.id,
  name: dto.name,
  types: dto.types
});

export default pokemonDetailMapper;
