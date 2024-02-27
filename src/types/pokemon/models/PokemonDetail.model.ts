type TPokemonDetailModel = {
  id: number;
  name: string;
  types: TTypeModel[];
};

export type TTypeModel = {
  slot: number;
  type: TTypeModel2;
};

type TTypeModel2 = {
  name: string;
  url: string;
};

export default TPokemonDetailModel;
