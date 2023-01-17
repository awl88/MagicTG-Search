export const convertTextSymbols = (text: string) => {
  var matches = text.match(/{(.)(\/(.))?}/g);

    if (matches) {
      matches.forEach(function (symbol: string) {
        const key  = symbol.slice(1, -1);

        text = text.replace(
          symbol,
          `<img style="display:inline-block;width:15px;height:15px;" src=https://svgs.scryfall.io/card-symbols/${key}.svg>`
        );
      });
    }

    return text;
}