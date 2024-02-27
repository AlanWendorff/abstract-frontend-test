import { useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import TPokemonDetailModel from 'types/models/PokemonDetail.model';
import TUseDisclosure from 'types/shared/useDisclosure.type';

interface IUseSelectPokemonReturn {
  selectedPokemon: TPokemonDetailModel | null;
  DATA_MODAL: TUseDisclosure;
  handleViewPokemon: (pokemon: TPokemonDetailModel) => void;
}

const useSelectPokemon = (): IUseSelectPokemonReturn => {
  const [selectedPokemon, setSelectedPokemon] = useState<TPokemonDetailModel | null>(null);
  const DATA_MODAL = useDisclosure();

  const handleViewPokemon = (pokemon: TPokemonDetailModel) => {
    setSelectedPokemon(pokemon);
    DATA_MODAL.onOpen();
  };

  return { selectedPokemon, DATA_MODAL, handleViewPokemon };
};

export default useSelectPokemon;
