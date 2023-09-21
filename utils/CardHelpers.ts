import { CardList } from '../types/Card';
import { CardLayout, CardLegal, CardLegalities, desiredLegalities } from '../types/CardHelper';

export const convertText = (text: string): string => {


  console.log(text);
  let symbolMatches = text.match(/{(\w*|∞)(\/(\w))?(\/(\w))?}/g);

  if (symbolMatches) {
    symbolMatches.forEach((symbol: string) => {
      const key = symbol.slice(1, -1).replace(/\//g, '').replace(/∞/g, 'INFINITY');

      text = text.replace(
        symbol,
        `<img style="display:inline-block;width:15px;height:15px;" src=https://svgs.scryfall.io/card-symbols/${key}.svg>`
      );
    });
  }

  let helperTextMatches = text.match(/\((.*)\)/g);

  if (helperTextMatches) {
    helperTextMatches.forEach((helperText: string) => {
      text = text.replace(helperText, `<i>${helperText}</i>`);
    });
  }

  return text;
};

export const filterLegalities = (legalities: CardLegalities): CardLegalities => {
  return Object.keys(legalities)
    .filter(legality => desiredLegalities.includes(legality))
    .reduce((cur, key) => {
      return Object.assign(cur, { [key]: legalities[key as keyof CardLegalities] });
    }, {} as CardLegalities);
};

export const checkIfMultifacedCard = (layout: CardLayout): boolean => {
  switch (layout) {
    case CardLayout.TRANSFORM:
    case CardLayout.SPLIT:
    case CardLayout.FLIP:
    case CardLayout.MODAL_DFC:
    case CardLayout.ADVENTURE:
    case CardLayout.DOUBLE_FACED_TOKEN:
      return true;
    default:
      return false;
  }
};

export const minimizeCardListData = (cardList: CardList): any => {
  const cardListData = cardList.data.map(card => {
    const { id, name, image_uris, card_faces, layout } = card;

    let imageUris;
    let cardfaces;

    const minimizeImageUris = (image_uris: any) => {
      if (!image_uris) return null;

      return {
        png: image_uris.png,
      }
    }

    if (card_faces) {
      cardfaces = [
        {
          name: card_faces[0].name,
          image_uris: minimizeImageUris(card_faces[0].image_uris),
          mana_cost: card_faces[0].mana_cost,
        },
        {
          name: card_faces[1].name,
          image_uris: minimizeImageUris(card_faces[1].image_uris),
          mana_cost: card_faces[1].mana_cost,
        }
      ]
    }

    return { 
      id,
      name,
      image_uris: minimizeImageUris(image_uris),
      card_faces: cardfaces || null,
      layout
    }
  })

  return {
    object: cardList.object,
    total_cards: cardList.total_cards,
    has_more: cardList.has_more,
    next_page: cardList.next_page || null,
    page: cardList.page || null,
    data: cardListData
  }
}