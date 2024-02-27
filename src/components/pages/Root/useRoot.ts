import { useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import TPokemonDetailModel from 'types/pokemon/models/PokemonDetail.model';
import getPokemons from 'actions/pokemons/pokemons.action';
import TUseDisclosure from 'types/shared/useDisclosure.type';

interface IUseRootProps {
  initialPokemons: TPokemonDetailModel[];
  initialPage: string;
}

interface IUseRoot {
  isLoading: boolean;
  pokemonList: TPokemonDetailModel[];
  selectedPokemon: TPokemonDetailModel | null;
  pokemonDataModal: TUseDisclosure;
  handleNextPage: () => void;
  handleViewPokemon: (pokemon: TPokemonDetailModel) => void;
}

const useRoot = ({ initialPokemons, initialPage }: IUseRootProps): IUseRoot => {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemonList, setPokemonList] = useState<TPokemonDetailModel[]>(initialPokemons);
  const [nextPage, setNextPage] = useState(initialPage);
  const [selectedPokemon, setSelectedPokemon] = useState<TPokemonDetailModel | null>(null);
  const pokemonDataModal = useDisclosure();

  const handleViewPokemon = (pokemon: TPokemonDetailModel) => {
    setSelectedPokemon(pokemon);
    pokemonDataModal.onOpen();
  };

  const handleNextPage = () => {
    setIsLoading(true);
    getPokemons(nextPage)
      .then(({ next_page, pokemon_list }) => {
        setPokemonList([...pokemonList, ...pokemon_list]);
        setNextPage(next_page);
      })
      .finally(() => setIsLoading(false));
  };

  return { isLoading, pokemonList, selectedPokemon, pokemonDataModal, handleNextPage, handleViewPokemon };
};

export default useRoot;
