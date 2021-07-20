import { PokemonType } from './pokemon-type';
import { Sprites } from './sprites';
import { Species } from './species';
import { Stat } from './stat';
import { Move } from './move';
import { Ability } from './ability';

export interface Pokemon {
  id: number;
  name: string;
  isDefault: boolean;
  order: number;
  weight: number;
  height: number;
  baseExperience: number;
  types: PokemonType[];
  sprites: Sprites;
  species: Species;
  stats: Stat[];
  abilities: Ability[];
  moves: Move[];
}
