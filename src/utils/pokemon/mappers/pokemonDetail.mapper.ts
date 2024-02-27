import { IPokemonDetailDTO } from 'interfaces/pokemon/dto/PokemonDetail.dto';
import TPokemonDetailModel from 'types/pokemon/models/PokemonDetail.model';

const pokemonDetailMapper = (dto: IPokemonDetailDTO): TPokemonDetailModel => ({
  id: dto.id,
  name: dto.name,
  types: dto.types
});

export default pokemonDetailMapper;
