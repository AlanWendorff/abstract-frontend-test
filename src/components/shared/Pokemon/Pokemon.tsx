import { FC, ReactNode } from 'react';
import { Stack, Progress, Text, Badge, HStack, Checkbox, CheckboxProps } from '@chakra-ui/react';

interface IPokemonCardProps {
  children: ReactNode;
}

interface IHealthAndAttackProps {
  hp: number | undefined;
  attack: number | undefined;
}

interface ICatchPokemonProps extends CheckboxProps {}

interface IAttributesProps {
  weight: number;
  height: number;
  movements: number;
  types: string[];
}

const Pokemon = ({ children }: IPokemonCardProps) => (
  <Stack spacing='5' pb='5'>
    {children}
  </Stack>
);

const Attributes: FC<IAttributesProps> = ({ weight, height, movements, types }) => (
  <Stack direction='row' spacing='5'>
    <Stack>
      <Text fontSize='sm'>Peso</Text>
      <Text>{weight}</Text>
    </Stack>
    <Stack>
      <Text fontSize='sm'>Altura</Text>
      <Text>{height}</Text>
    </Stack>
    <Stack>
      <Text fontSize='sm'>Movimientos</Text>
      <Text>{movements}</Text>
    </Stack>
    <Stack>
      <Text fontSize='sm'>Tipos</Text>
      <HStack>
        {types.map((type) => (
          <Badge key='type'>{type}</Badge>
        ))}
      </HStack>
    </Stack>
  </Stack>
);

const CatchPokemon: FC<ICatchPokemonProps> = ({ ...rest }) => <Checkbox {...rest}>Catched</Checkbox>;

const HealthAndAttack: FC<IHealthAndAttackProps> = ({ hp, attack }) => (
  <Stack spacing='5' p='5' bg='gray.100' borderRadius='xl'>
    <Stack>
      <Text fontSize='xs'>hp</Text>
      <Progress bg='gray.300' borderRadius='full' value={hp} />
    </Stack>
    <Stack>
      <Text fontSize='xs'>attack</Text>
      <Progress bg='gray.300' borderRadius='full' value={attack} />
    </Stack>
  </Stack>
);

Pokemon.Attributes = Attributes;
Pokemon.CatchPokemon = CatchPokemon;
Pokemon.HealthAndAttack = HealthAndAttack;

export default Pokemon;
