interface ICatchedPokemonDTO {
  catched_pokemon: IPokemonDTO[];
}

export interface IPokemonDTO {
  id: number;
  name: string;
}

export default ICatchedPokemonDTO;
