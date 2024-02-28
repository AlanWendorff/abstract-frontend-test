import { useState } from 'react';
import TPokemonDetailModel from 'types/models/PokemonDetail.model';
import getPokemons from 'actions/pokemon.action';

interface IUseRootProps {
  initialPokemons: TPokemonDetailModel[];
  initialPage: string;
}

interface IUseRoot {
  isLoading: boolean;
  pokemonList: TPokemonDetailModel[];
  handleNextPage: () => void;
}

const useRoot = ({ initialPokemons, initialPage }: IUseRootProps): IUseRoot => {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemonList, setPokemonList] = useState<TPokemonDetailModel[]>(initialPokemons);
  const [nextPage, setNextPage] = useState(initialPage);

  const handleNextPage = () => {
    setIsLoading(true);
    getPokemons(nextPage)
      .then(({ next_page, pokemon_list }) => {
        setPokemonList([...pokemonList, ...pokemon_list]);
        setNextPage(next_page);
      })
      .finally(() => setIsLoading(false));
  };

  return { isLoading, pokemonList, handleNextPage };
};

export default useRoot;
