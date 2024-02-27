'use client';

import { FC, lazy } from 'react';
import { Container, Stack, Flex } from '@chakra-ui/react';
import usePokemonCaptured from './usePokemonCaptured';
import PokemonList from '../../shared/PokemonList';
import useSelectPokemon from 'hooks/useSelectPokemon';
const PokemonModal = lazy(() => import('../../shared/PokemonModal'));
const PokemonData = lazy(() => import('../../shared/PokemonData'));

const PokemonCaptured: FC = () => {
  const { selectedPokemon, DATA_MODAL, handleViewPokemon } = useSelectPokemon();
  const { pokemonList } = usePokemonCaptured();

  return (
    <>
      <Flex alignItems='flex-start' minH='100vh' justifyContent='center'>
        <Container maxW='container.lg'>
          <Stack p='5' alignItems='center' spacing='5'>
            {pokemonList && <PokemonList handleViewPokemon={handleViewPokemon} pokemons={pokemonList} />}
          </Stack>
        </Container>
      </Flex>

      <PokemonModal {...DATA_MODAL} selectedPokemon={selectedPokemon}>
        {selectedPokemon && <PokemonData pokemon={selectedPokemon} />}
      </PokemonModal>
    </>
  );
};

export default PokemonCaptured;
