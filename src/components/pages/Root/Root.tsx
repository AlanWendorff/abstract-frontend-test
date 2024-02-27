'use client';

import { FC, lazy } from 'react';
import { Container, Stack, Flex, Button, Box } from '@chakra-ui/react';
import PokemonList from '../../shared/PokemonList';
import TPokemonDetailModel from 'types/models/PokemonDetail.model';
import useRoot from './useRoot';
import useSelectPokemon from 'hooks/useSelectPokemon';
import Pokemon from '../../shared/Pokemon';
import useCatchPokemon from 'hooks/useCatchPokemon';
import PokemonThumbnail from '@components/shared/PokemonThumbnail';
const PokemonModal = lazy(() => import('../../shared/PokemonModal'));

interface IRootProps {
  initialPokemons: TPokemonDetailModel[];
  initialPage: string;
}

const Root: FC<IRootProps> = ({ initialPokemons, initialPage }) => {
  const { selectedPokemon, DATA_MODAL, handleViewPokemon } = useSelectPokemon();
  const { isPokemonCatched, handlePokemon } = useCatchPokemon({ selectedPokemon });
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
        {selectedPokemon && (
          <Pokemon>
            <Stack spacing='5' position='relative'>
              <Box position='absolute' right='0' zIndex='99'>
                <Pokemon.CatchPokemon
                  isChecked={isPokemonCatched}
                  onChange={() => {
                    handlePokemon(selectedPokemon.id, selectedPokemon.name);
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

export default Root;
