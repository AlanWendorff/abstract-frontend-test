'use client';

import { FC, lazy } from 'react';
import { Container, Stack, Flex, Button } from '@chakra-ui/react';
import PokemonList from '../../shared/PokemonList';
import TPokemonDetailModel from 'types/models/PokemonDetail.model';
import useRoot from './useRoot';
import useSelectPokemon from 'hooks/useSelectPokemon';
const PokemonModal = lazy(() => import('../../shared/PokemonModal'));
const PokemonData = lazy(() => import('../../shared/PokemonData'));

interface IRootProps {
  initialPokemons: TPokemonDetailModel[];
  initialPage: string;
}

const Root: FC<IRootProps> = ({ initialPokemons, initialPage }) => {
  const { selectedPokemon, DATA_MODAL, handleViewPokemon } = useSelectPokemon();
  const { isLoading, pokemonList, handleNextPage } = useRoot({
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

      <PokemonModal {...DATA_MODAL} selectedPokemon={selectedPokemon}>
        {selectedPokemon && <PokemonData pokemon={selectedPokemon} />}
      </PokemonModal>
    </>
  );
};

export default Root;
