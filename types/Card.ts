import { CardCore, CardLayout, CardLegalities, CardObjectType, ImageUris } from './CardHelper';
export interface Card extends CardCore {
  id: string;
  frame: string;
  layout: CardLayout;
  card_faces: CardCore[];
  legalities: CardLegalities;
}

export interface CardList {
  object: CardObjectType;
  total_cards: number;
  has_more: boolean;
  next_page: string;
  page: number;
  data: Card[];
}

export interface MultifaceCard extends Card {
  card_faces: CardCore[];
}
