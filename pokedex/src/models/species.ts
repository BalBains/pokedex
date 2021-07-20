import { LinkingResource } from './linking-resource';

export interface Species {
  baseHappiness: number;
  captureRate: number;
  color: LinkingResource;
  eggGroups: LinkingResource[];
  evolutionChainId: number;
  evolvesFromSpecies: LinkingResource;
  flavorText: string;
  genus: string;
  shape: LinkingResource;
}
