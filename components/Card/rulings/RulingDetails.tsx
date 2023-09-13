import React, { FC } from 'react';
import { CardRuling } from '../../../types/CardHelper';

type CardRulingDetailsProp = {
  ruling: CardRuling;
};

export const CardRulingDetails: FC<CardRulingDetailsProp> = ({ ruling }) => {
  return (
    <div className='flex flex-col text-sm p-2'>
      <text>{ruling.comment}</text>
      <text className='text-slate-600 italic'>{`(${ruling.published_at})`}</text>
    </div>
  );
};
