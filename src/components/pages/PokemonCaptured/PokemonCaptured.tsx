'use client';

import { FC, lazy } from 'react';
import { Container, Stack, Flex, Box } from '@chakra-ui/react';
import usePokemonCaptured from './usePokemonCaptured';
import PokemonList from '../../shared/PokemonList';
import useSelectPokemon from 'hooks/useSelectPokemon';
import Pokemon from '../../shared/Pokemon';
import useCatchPokemon from 'hooks/useCatchPokemon';
import PokemonThumbnail from '@components/shared/PokemonThumbnail';
const PokemonModal = lazy(() => import('../../shared/PokemonModal'));

const PokemonCaptured: FC = () => {
  const { selectedPokemon, DATA_MODAL, handleViewPokemon } = useSelectPokemon();
  const { isPokemonCatched, handlePokemon } = useCatchPokemon({ selectedPokemon });
  const { pokemonList, updateCapturedPokemons } = usePokemonCaptured();

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
        {selectedPokemon && (
          <Pokemon>
            <Stack spacing='5' position='relative'>
              <Box position='absolute' right='0' zIndex='99'>
                <Pokemon.CatchPokemon
                  isChecked={isPokemonCatched}
                  onChange={() => {
                    handlePokemon(selectedPokemon.id, selectedPokemon.name);
                    updateCapturedPokemons(selectedPokemon.id);
                  }}
                />
              </Box>
              <PokemonThumbnail pokemonId={selectedPokemon.id} />
              <Pokemon.Attributes
                height={selectedPokemon.height}
                movements={selectedPokemon.movements}
                types={selectedPokemon.types}
                weight={selectedPokemon.weight}
              />
            </Stack>
            <Pokemon.HealthAndAttack attack={selectedPokemon.attack} hp={selectedPokemon.hp} />
          </Pokemon>
        )}
      </PokemonModal>
    </>
  );
};

export default PokemonCaptured;
