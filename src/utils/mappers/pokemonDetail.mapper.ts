import { IPokemonDetailDTO } from 'interfaces/dto/pokeapi/PokemonDetail.dto';
import TPokemonDetailModel from 'types/models/PokemonDetail.model';

const pokemonDetailMapper = (dto: IPokemonDetailDTO): TPokemonDetailModel => ({
  id: dto.id,
  name: dto.name,
  hp: dto.stats.find(({ stat }) => stat.name === 'hp')?.base_stat,
  attack: dto.stats.find(({ stat }) => stat.name === 'attack')?.base_stat,
  height: dto.height,
  movements: dto.moves.length,
  types: dto.types.map(({ type }) => type.name),
  weight: dto.weight
});

export default pokemonDetailMapper;
