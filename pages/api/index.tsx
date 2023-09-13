import axios from 'axios';
import React from 'react'
import { CardList } from '../../types/Card';
export async function searchCards(searchText: string): Promise<CardList> {
  return await axios.get<CardList>(`https://api.scryfall.com/cards/search?q=${searchText}`).then(res => res.data);
}
