import { AspectRatio, AspectRatioProps, Image } from '@chakra-ui/react';
import { POKEAPI_SPRITES_URL } from '@constants/env';
import { FC } from 'react';

interface IThumbnailProps extends AspectRatioProps {
  pokemonId: number;
}

const PokemonThumbnail: FC<IThumbnailProps> = ({ pokemonId }) => (
  <AspectRatio w='full' ratio={1}>
    <Image objectFit='contain' src={`${POKEAPI_SPRITES_URL}/${pokemonId}.png`} alt='pokemon thumbnail' />
  </AspectRatio>
);

export default PokemonThumbnail;
