import React, { FC } from 'react';

type SearchDataProps = {
  numberOfCards: number;
};

export const SearchData: FC<SearchDataProps> = ({ numberOfCards }) => {
  return <div className='flex justify-center'>
    <span>{numberOfCards} cards were returned</span>
  </div>;
};
