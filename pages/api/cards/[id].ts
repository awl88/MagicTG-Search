import axios from 'axios'
import { TCard } from '../../../types/TCard'

export async function loadCard(id: string): Promise<TCard> {
  const cardResponse = await axios
    .get(`https://api.scryfall.com/cards/${id}`)
    .then((res) => res.data as TCard)

  return cardResponse;
}