import { useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { IPokemonDetailDTO } from 'interfaces/pokemon/dto/PokemonDetail.dto';
import getPokemons from 'actions/pokemons/pokemons.action';
import TUseDisclosure from 'types/useDisclosure.type';

interface IUseRootProps {
  initialPokemons: IPokemonDetailDTO[];
  initialPage: string;
}

interface IUseRoot {
  isLoading: boolean;
  pokemonList: IPokemonDetailDTO[];
  selectedPokemon: IPokemonDetailDTO | null;
  pokemonDataModal: TUseDisclosure;
  handleNextPage: () => void;
  handleViewPokemon: (pokemon: IPokemonDetailDTO) => void;
}

const useRoot = ({ initialPokemons, initialPage }: IUseRootProps): IUseRoot => {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemonList, setPokemonList] = useState<IPokemonDetailDTO[]>(initialPokemons);
  const [nextPage, setNextPage] = useState(initialPage);
  const [selectedPokemon, setSelectedPokemon] = useState<IPokemonDetailDTO | null>(null);
  const pokemonDataModal = useDisclosure();

  const handleViewPokemon = (pokemon: IPokemonDetailDTO) => {
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
