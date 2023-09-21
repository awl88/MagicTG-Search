import React, { FC } from 'react';
import { CardRuling } from '../../../types/CardHelper';

type CardRulingDetailsProp = {
  ruling: CardRuling;
};

const CardRulingDetails: FC<CardRulingDetailsProp> = ({ ruling }) => {
  return (
    <div className='flex flex-col text-sm p-2'>
      <span>{ruling.comment}</span>
      <span className='text-slate-600 italic'>{`(${ruling.published_at})`}</span>
    </div>
  );
};

export default CardRulingDetails;