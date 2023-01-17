import { ImageUris } from './TCardHelper';
export interface TCard {
  id: string;
  name: string;
  image_uris: ImageUris;
  artist: string;
  frame: string;
  flavor_text: string;
  mana_cost: string;
  type_line: string;
  oracle_text: string;
}
