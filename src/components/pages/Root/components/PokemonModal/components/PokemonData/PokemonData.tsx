import { Box, AspectRatio, Image, Stack, Progress, Text, Badge, HStack, Checkbox } from '@chakra-ui/react';
import useCatchPokemon from 'hooks/useCatchPokemon';
import { FC } from 'react';
import TPokemonDetailModel from 'types/models/PokemonDetail.model';

interface IPokemonCardProps {
  pokemon: TPokemonDetailModel;
}

const PokemonData: FC<IPokemonCardProps> = ({ pokemon }) => {
  const { isPokemonCatched, handlePokemon } = useCatchPokemon({ pokemon });

  return (
    <Stack spacing='5' pb='5'>
      <Stack spacing='5' position='relative'>
        <Box position='absolute' right='0' zIndex='99'>
          <Checkbox isChecked={isPokemonCatched} onChange={() => handlePokemon(pokemon.id, pokemon.name)}>
            Catched
          </Checkbox>
        </Box>
        <AspectRatio w='full' ratio={1}>
          <Image
            objectFit='contain'
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}
          />
        </AspectRatio>
        <Stack direction='row' spacing='5'>
          <Stack>
            <Text fontSize='sm'>Weight</Text>
            <Text>20</Text>
          </Stack>
          <Stack>
            <Text fontSize='sm'>Height</Text>
            <Text>12</Text>
          </Stack>
          <Stack>
            <Text fontSize='sm'>Movimientos</Text>
            <Text>109</Text>
          </Stack>
          <Stack>
            <Text fontSize='sm'>Tipos</Text>
            <HStack>
              <Badge>Agua</Badge>
              <Badge>Agua</Badge>
            </HStack>
          </Stack>
        </Stack>
      </Stack>

      <Stack spacing='5' p='5' bg='gray.100' borderRadius='xl'>
        <Stack>
          <Text fontSize='xs'>hp</Text>
          <Progress bg='gray.300' borderRadius='full' value={80} />
        </Stack>
        <Stack>
          <Text fontSize='xs'>attack</Text>
          <Progress bg='gray.300' borderRadius='full' value={65} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PokemonData;
