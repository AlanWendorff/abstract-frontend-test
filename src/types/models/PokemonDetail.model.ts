type TPokemonDetailModel = {
  id: number;
  name: string;
  types: string[];
  hp: number | undefined;
  attack: number | undefined;
  height: number;
  movements: number;
  weight: number;
};

export default TPokemonDetailModel;
