import { FC } from 'react';
import { Stack, Text, HStack, Badge } from '@chakra-ui/react';
import TPokemonDetailModel from 'types/models/PokemonDetail.model';
import PokemonThumbnail from '@components/shared/PokemonThumbnail';

interface IPokemonCardProps {
  pokemon: TPokemonDetailModel;
}

const PokemonCard: FC<IPokemonCardProps> = ({ pokemon }) => (
  <Stack spacing='5' boxShadow='xl' p='5' w='full' borderRadius='xl' alignItems='center'>
    <PokemonThumbnail pokemonId={pokemon.id} />
    <Text textAlign='center' textTransform='capitalize'>
      {pokemon.name}
    </Text>
    <HStack>
      {pokemon.types.map((type) => (
        <Badge size='xs' key={type}>
          {type}
        </Badge>
      ))}
    </HStack>
  </Stack>
);

export default PokemonCard;
