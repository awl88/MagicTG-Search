# MagicTG Search

A card search app for Magic: The Gathering, built with Next.js and TypeScript on top of the [Scryfall API](https://scryfall.com/docs/api). Search for cards, browse the results, and open a card to see its image, text, format legality and official rulings.

I built this to practice Next.js, server-side rendering, and working with a third-party API. It is a personal project.

## Features

- **Search** using Scryfall's search syntax. Whatever you type is passed to Scryfall, so queries like `t:dragon c:red` work as well as plain card names.
- **Paged results**, 60 cards per page, with a count of how many cards matched. The app loads the remaining pages from Scryfall in the background so paging is quick.
- **Card pages** with the card image, type, mana cost, rules text, power and toughness, flavor text and artist.
- **Mana symbols in card text**, drawn from Scryfall's symbol images, and reminder text in italics.
- **Format legality** shown as Legal or Not Legal for the main constructed formats.
- **Rulings** for each card, sorted by date.
- **Double-faced cards**: a Transform button flips the card with a CSS animation.

## Tech stack

- Next.js 13 (Pages Router) with server-side rendering
- React 18 and TypeScript
- Tailwind CSS
- Axios for requests, `react-icons` for icons
- ESLint

## Running it locally

```bash
git clone https://github.com/awl88/MagicTG-Search.git
cd MagicTG-Search
npm install
npm run dev
```

Then open http://localhost:3000. No API key is needed, since Scryfall's API is public.

## How it works

- `pages/search/[search].tsx` fetches the first page of results on the server, then loads the rest in the browser.
- `pages/cards/[id].tsx` fetches a single card and its rulings on the server.
- `pages/api/` holds the functions that call Scryfall. `utils/CardHelpers.ts` converts card text, filters legalities and trims search results down to the fields the list needs.
- `components/` is split into the search box, the card display, and layout.

## What I would improve

- Add tests. There are none yet.
- Add search suggestions and filters instead of requiring Scryfall syntax.
- Cache requests and handle Scryfall's rate limits and errors.
- Render the card text without injecting HTML strings.
- Fix a few leftovers: the `seach` folder name is misspelled, and some imports use different capitalization (`card` vs `Card`).

## Credits

Card data and images come from [Scryfall](https://scryfall.com). This project is unofficial and is not affiliated with Scryfall or Wizards of the Coast. Magic: The Gathering is a trademark of Wizards of the Coast.
