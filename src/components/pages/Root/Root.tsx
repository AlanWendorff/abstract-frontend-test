'use client';

import { FC } from 'react';
import { Container, Stack, Flex, Button } from '@chakra-ui/react';
import PokemonModal from './components/PokemonModal';
import PokemonList from './components/PokemonList';
import TPokemonDetailModel from 'types/pokemon/models/PokemonDetail.model';
import PokemonData from './components/PokemonModal/components/PokemonData';
import useRoot from './useRoot';

interface IRootProps {
  initialPokemons: TPokemonDetailModel[];
  initialPage: string;
}

const Root: FC<IRootProps> = ({ initialPokemons, initialPage }) => {
  const { isLoading, pokemonList, selectedPokemon, pokemonDataModal, handleNextPage, handleViewPokemon } = useRoot({
    initialPokemons,
    initialPage
  });

  return (
    <>
      <Flex alignItems='center' minH='100vh' justifyContent='center'>
        <Container maxW='container.lg'>
          <Stack p='5' alignItems='center' spacing='5'>
            <PokemonList handleViewPokemon={handleViewPokemon} pokemons={pokemonList} />

            <Button isLoading={isLoading} onClick={handleNextPage} aria-label='cargar más pokemon'>
              Cargas más
            </Button>
          </Stack>
        </Container>
      </Flex>

      <PokemonModal {...pokemonDataModal} selectedPokemon={selectedPokemon}>
        {selectedPokemon && <PokemonData pokemon={selectedPokemon} />}
      </PokemonModal>
    </>
  );
};

export default Root;
