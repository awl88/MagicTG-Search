import React, { FC } from 'react';
import { CardRuling } from '../../../types/CardHelper';
import { CardRulingDetails } from './RulingDeetails';

type CardRulingsProps = {
  name: string;
  rulings: CardRuling[];
};

export const CardRulings: FC<CardRulingsProps> = ({ name, rulings }) => {
  const halfPoint = Math.ceil(rulings.length / 2);
  const firstHalf = rulings.slice(0, halfPoint);
  const secondHalf = rulings.slice(halfPoint, rulings.length);
  return (
    <>
      <h1 className='p-2'>NOTES AND RULES INFORMATION FOR {name}</h1>
      <div className='w-full flex flex-row'>
        <div className='flex-1'>
          {firstHalf.map((ruling, i) => {
            return (
              <div key={i}>
                <CardRulingDetails ruling={ruling} />
              </div>
            );
          })}
        </div>
        <div className='flex-1'>
          {secondHalf.map((ruling, i) => {
            return (
              <div key={i}>
                <CardRulingDetails ruling={ruling} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
