import { CardCore, CardLayout, CardLegalities, ImageUris } from './CardHelper';
export interface Card extends CardCore {
  id: string;
  frame: string;
  layout: CardLayout;
  card_faces: CardCore[];
  legalities: CardLegalities;
}

export interface MultifaceCard extends Card {
  card_faces: CardCore[];
}
