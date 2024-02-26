export interface IPokemonDetailDTO {
  abilities: IAbility[];
  base_experience: number;
  Icries: ICries;
  forms: IForm[];
  game_indices: IIndex[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: IMfe[];
  name: string;
  order: number;
  past_abilities: any[];
  past_types: any[];
  species: ISpecies;
  sprites: ISprites;
  stats: IStat[];
  types: IType[];
  weight: number;
}

interface IAbility {
  ability: IAbility2;
  is_hidden: boolean;
  slot: number;
}

interface IAbility2 {
  name: string;
  url: string;
}

interface ICries {
  latest: string;
  legacy: string;
}

interface IForm {
  name: string;
  url: string;
}

interface IIndex {
  game_index: number;
  version: IVersion;
}

interface IVersion {
  name: string;
  url: string;
}

interface IMfe {
  move: IMove;
  version_group_details: IVersionGroupDetail[];
}

interface IMove {
  name: string;
  url: string;
}

interface IVersionGroupDetail {
  level_learned_at: number;
  move_learn_method: IMoveLearnMethod;
  version_group: IVersionGroup;
}

interface IMoveLearnMethod {
  name: string;
  url: string;
}

interface IVersionGroup {
  name: string;
  url: string;
}

interface ISpecies {
  name: string;
  url: string;
}

interface ISprites {
  back_default: string;
  back_female: any;
  back_shiny: string;
  back_shiny_female: any;
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
  other: IOther;
  versions: IVersions;
}

interface IOther {
  dream_world: IDreamWorld;
  home: Home;
  'official-artwork': IOfficialArtwork;
  showdown: IShowdown;
}

interface IDreamWorld {
  front_default: string;
  front_female: any;
}

interface Home {
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

interface IOfficialArtwork {
  front_default: string;
  front_shiny: string;
}

interface IShowdown {
  back_default: string;
  back_female: any;
  back_shiny: string;
  back_shiny_female: any;
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

interface IVersions {
  'generation-i': IGenerationI;
  'generation-ii': IGenerationIi;
  'generation-iii': IGenerationIii;
  'generation-iv': IGenerationIv;
  'generation-v': IGenerationV;
  'generation-vi': IGenerationVi;
  'generation-vii': IGenerationVii;
  'generation-viii': IGenerationViii;
}

interface IGenerationI {
  'red-blue': IRedBlue;
  yellow: IYellow;
}

interface IRedBlue {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
}

interface IYellow {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
}

interface IGenerationIi {
  crystal: ICrystal;
  gold: IGold;
  silver: ISilver;
}

interface ICrystal {
  back_default: string;
  back_shiny: string;
  back_shiny_transparent: string;
  back_transparent: string;
  front_default: string;
  front_shiny: string;
  front_shiny_transparent: string;
  front_transparent: string;
}

interface IGold {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent: string;
}

interface ISilver {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent: string;
}

interface IGenerationIii {
  emerald: IEmerald;
  'firered-leafgreen': IFireredLeafgreen;
  'ruby-sapphire': IRubySapphire;
}

interface IEmerald {
  front_default: string;
  front_shiny: string;
}

interface IFireredLeafgreen {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

interface IRubySapphire {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

interface IGenerationIv {
  'diamond-pearl': IDiamondPearl;
  'heartgold-soulsilver': IHeartgoldSoulsilver;
  platinum: IPlatinum;
}

interface IDiamondPearl {
  back_default: string;
  back_female: any;
  back_shiny: string;
  back_shiny_female: any;
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

interface IHeartgoldSoulsilver {
  back_default: string;
  back_female: any;
  back_shiny: string;
  back_shiny_female: any;
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

interface IPlatinum {
  back_default: string;
  back_female: any;
  back_shiny: string;
  back_shiny_female: any;
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

interface IGenerationV {
  'black-white': IBlackWhite;
}

interface IBlackWhite {
  animated: IAnimated;
  back_default: string;
  back_female: any;
  back_shiny: string;
  back_shiny_female: any;
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

interface IAnimated {
  back_default: string;
  back_female: any;
  back_shiny: string;
  back_shiny_female: any;
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

interface IGenerationVi {
  'omegaruby-alphasapphire': IOmegarubyAlphasapphire;
  'x-y': IXY;
}

interface IOmegarubyAlphasapphire {
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

interface IXY {
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

interface IGenerationVii {
  icons: IIcons;
  'ultra-sun-ultra-moon': IUltraSunUltraMoon;
}

interface IIcons {
  front_default: string;
  front_female: any;
}

interface IUltraSunUltraMoon {
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

interface IGenerationViii {
  icons: Icons2;
}

interface Icons2 {
  front_default: string;
  front_female: any;
}

interface IStat {
  base_stat: number;
  effort: number;
  stat: IStat2;
}

interface IStat2 {
  name: string;
  url: string;
}

export interface IType {
  slot: number;
  type: IType2;
}

interface IType2 {
  name: string;
  url: string;
}
