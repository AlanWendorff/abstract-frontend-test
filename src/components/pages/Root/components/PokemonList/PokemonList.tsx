import { SimpleGrid, Box } from '@chakra-ui/react';
import PokemonCard from './components/PokemonCard';
import { IPokemonDetailDTO } from 'interfaces/pokemon/dto/PokemonDetail.dto';
import { FC } from 'react';

interface IPokemonListProps {
  pokemons: IPokemonDetailDTO[];
  handleViewPokemon: (pokemon: IPokemonDetailDTO) => void;
}

const PokemonList: FC<IPokemonListProps> = ({ pokemons, handleViewPokemon }) => (
  <SimpleGrid spacing='5' columns={{ base: 1, md: 5 }}>
    {pokemons.map((pokemon) => (
      <Box as='button' key={pokemon.id} onClick={() => handleViewPokemon(pokemon)}>
        <PokemonCard pokemon={pokemon} />
      </Box>
    ))}
  </SimpleGrid>
);

export default PokemonList;
