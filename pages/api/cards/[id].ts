import axios from 'axios';
import { Card } from '../../../types/Card';
import { CardRulingFetch } from '../../../types/CardHelper';

export async function loadCard(id: string): Promise<Card> {
  const cardResponse: Card = await axios.get<Card>(`https://api.scryfall.com/cards/${id}`).then(res => res.data);

  cardResponse.card_rulings = await axios
    .get<CardRulingFetch>(`https://api.scryfall.com/cards/${id}/rulings`)
    .then(res => {
      const dataUnsorted = res.data.data;
      const dataSorted = dataUnsorted.sort((a, b) => {
        const dateA = new Date(a.published_at);
        const dateB = new Date(b.published_at);
        return dateA.getTime() - dateB.getTime();
      });
      return dataSorted;
    });

  return cardResponse as Card;
}
