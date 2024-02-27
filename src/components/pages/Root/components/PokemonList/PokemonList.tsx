import { SimpleGrid, Box } from '@chakra-ui/react';
import PokemonCard from './components/PokemonCard';
import TPokemonDetailModel from 'types/models/PokemonDetail.model';
import { FC } from 'react';

interface IPokemonListProps {
  pokemons: TPokemonDetailModel[];
  handleViewPokemon: (pokemon: TPokemonDetailModel) => void;
}

const PokemonList: FC<IPokemonListProps> = ({ pokemons, handleViewPokemon }) => (
  <SimpleGrid spacing='5' columns={{ base: 1, md: 5 }}>
    {pokemons.map((pokemon) => (
      <Box key={pokemon.id} as='button' onClick={() => handleViewPokemon(pokemon)}>
        <PokemonCard pokemon={pokemon} />
      </Box>
    ))}
  </SimpleGrid>
);

export default PokemonList;
