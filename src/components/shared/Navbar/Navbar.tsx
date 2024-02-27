import { FC } from 'react';
import APP_LOGO from '@images/shared/logo.png';
import { AspectRatio, Flex, Image, Link, Text } from '@chakra-ui/react';
import { POKEMON_CAPTURED, ROOT } from '@constants/routes';

const Navbar: FC = () => (
  <Flex as='nav' align='center' justify='center' w='100%' mb={8} p='0.5rem 1rem' bg='#fcc400'>
    <Flex w='100%' maxWidth='900' justify='space-between'>
      <Link href={ROOT}>
        <AspectRatio w='full' minW='50' ratio={1}>
          <Image objectFit='contain' w='100%' src={APP_LOGO.src} alt='app logo' />
        </AspectRatio>
      </Link>

      <Flex gap='1rem' align='center' fontWeight='bold' fontSize='.9rem'>
        <Link href={ROOT}>
          <Text textTransform='uppercase' display='block'>
            Todos los pokemon
          </Text>
        </Link>
        <Link href={POKEMON_CAPTURED}>
          <Text textTransform='uppercase' display='block'>
            Mis Pokemon
          </Text>
        </Link>
      </Flex>
    </Flex>
  </Flex>
);

export default Navbar;
