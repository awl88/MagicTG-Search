import { CardCore, CardLayout, CardLegalities, ImageUris } from './CardHelper';
export interface Card extends CardCore {
  id: string;
  frame: string;
  layout: CardLayout;
  card_faces: CardCore[];
  legalities: CardLegalities;
}

export interface CardList {
  total_cards: number;
  has_more: boolean;
  next_page: string;
  data: Card[];
}

export interface MultifaceCard extends Card {
  card_faces: CardCore[];
}
