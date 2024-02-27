type TPokemonListModel = {
  next: string;
  results: TPokemonModel[];
};

export type TPokemonModel = {
  name: string;
  url: string;
};

export default TPokemonListModel;
