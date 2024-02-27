import { NextPage } from 'next';
import getPokemons from '../../actions/pokemon.action';
import Root from '@components/pages/Root';
import { POKEAPI_URL } from '@constants/env';

const RootPage: NextPage = async () => {
  const { pokemon_list, next_page } = await getPokemons(`${POKEAPI_URL}/pokemon/?limit=20&offset=20`);

  return <Root initialPokemons={pokemon_list} initialPage={next_page} />;
};

export default RootPage;
