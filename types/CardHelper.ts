export interface ImageUris {
  small?: string;
  normal?: string;
  large?: string;
  art_crop?: string;
  png: string;
}

export interface CardCore {
  name: string;
  mana_cost: string;
  type_line: string;
  oracle_text: string;
  power?: string;
  toughness?:string;
  flavor_text?: string;
  artist: string;
  image_uris?: ImageUris;
  card_rulings: CardRuling[];

}

export enum CardLegal {
  legal = "legal",
  not_legal = "not_legal"
}

export enum CardLayout {
  NORMAL = "normal",
  SPLIT = "split",
  FLIP = "flip",
  TRANSFORM = "transform",
  MODAL_DFC = "modal_dfc",
  MELD = "meld",
  LEVELER = "leveler",
  CLASS = "class",
  SAGA = "saga",
  ADVENTURE = "adventure",
  PLANAR = "planar",
  SCHEME = "scheme",
  VANGAURD = "vanguard",
  TOKEN = "token",
  DOUBLE_FACED_TOKEN = "double_faced_token",
  EMBLEM = "emblem",
  AUGMENT = "augment",
  HOST = "host",
  ART_SERIES = "art_series",
  REVERSIBLE_CARD = "reversible_card"
}

export interface CardLegalities {
  standard: CardLegal;
  // future: CardLegal;
  historic: CardLegal;
  // gladiator: CardLegal;
  pioneer: CardLegal;
  explorer: CardLegal;
  modern: CardLegal;
  legacy: CardLegal;
  pauper: CardLegal;
  vintage: CardLegal;
  penny: CardLegal;
  commander: CardLegal;
  brawl: CardLegal;
  // historicbrawl: CardLegal;
  alchemy: CardLegal;
  // paupercommander: CardLegal;
  // duel: CardLegal;
  // oldschool: CardLegal;
  // premodern: CardLegal
}

export const desiredLegalities: string[] = [
  "standard",
  // "future"
  "historic",
  // "gladiator",
  "pioneer",
  "explorer",
  "modern",
  "legacy",
  "pauper",
  "vintage",
  "penny",
  "commander",
  "brawl",
  // "historicbrawl",
  "alchemy",
  // "paupercommander",
  // "duel",
  // "oldschool",
  // "premodern"
]

export interface CardRuling {
  published_at: string;
  comment: string;
}

export interface CardRulingFetch {
  data: CardRuling[]; 
}

export enum CardObjectType {
  CARD = "card",
  LIST = "list",
  SET = "set"
}