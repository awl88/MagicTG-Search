import axios from 'axios';
import React from 'react';
import { CardList } from '../../types/Card';
import { CardObjectType } from '../../types/CardHelper';
import { minimizeCardListData } from '../../utils/CardHelpers';
export async function searchCards(searchText: string, page: number): Promise<CardList> {
  if (page !== 0) {
    return await axios.get<CardList>(searchText).then(res => minimizeCardListData(res.data));
  }

  return await axios
    .get<CardList>(`https://api.scryfall.com/cards/search?q=${searchText}`)
    .then(res => minimizeCardListData(res.data));
}
