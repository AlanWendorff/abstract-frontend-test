import { FC } from 'react';
import { Stack, Text, Image, HStack, Badge, AspectRatio } from '@chakra-ui/react';
import TPokemonDetailModel, { TTypeModel } from 'types/pokemon/models/PokemonDetail.model';

interface IPokemonCardProps {
  pokemon: TPokemonDetailModel;
}

const PokemonCard: FC<IPokemonCardProps> = ({ pokemon }) => (
  <Stack spacing='5' boxShadow='xl' p='5' w='full' borderRadius='xl' alignItems='center'>
    <AspectRatio w='full' ratio={1}>
      <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`} />
    </AspectRatio>
    <Text textAlign='center' textTransform='capitalize'>
      {pokemon.name}
    </Text>
    <HStack>
      {pokemon.types.map((type: TTypeModel) => (
        <Badge size='xs' key={type.slot}>
          {type.type.name}
        </Badge>
      ))}
    </HStack>
  </Stack>
);

export default PokemonCard;
