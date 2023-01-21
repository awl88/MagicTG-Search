import { CardLayout, CardLegal, CardLegalities, desiredLegalities } from '../types/CardHelper';

export const convertText = (text: string): string => {
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
    case CardLayout.DOUBLE_FACED_TOKEN:
      return true;
    default:
      return false;
  }
}