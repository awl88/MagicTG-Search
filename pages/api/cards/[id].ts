import axios from 'axios';
import { Card } from '../../../types/Card';
import { CardLayout } from '../../../types/CardHelper';

export async function loadCard(id: string): Promise<Card> {
  const cardResponse: Card = await axios.get<Card>(`https://api.scryfall.com/cards/${id}`).then(res => res.data);

  return cardResponse as Card;
}
