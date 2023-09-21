import React, { FC } from 'react';
import { CardLegal, CardLegalities } from '../../types/CardHelper';
import { filterLegalities } from '../../utils/CardHelpers';

type CardLegalityProps = {
  legalities: CardLegalities;
};
type LegalCardProps = {
  legal: CardLegal;
};
const LegalCard: FC<LegalCardProps> = ({ legal }) => {
  const isCardLegal = legal === CardLegal.legal;
  return (
    <>
      {isCardLegal ? (
        <span className='grid text-center items-center text-[10px] text-white w-20 h-5 rounded-sm bg-green-700'>
          LEGAL
        </span>
      ) : (
        <span className='grid text-center items-center text-[10px] text-white w-20 h-5 rounded-sm bg-gray-400'>
          NOT LEGAL
        </span>
      )}
    </>
  );
};

const CardLegality: FC<CardLegalityProps> = ({ legalities }) => {
  const filteredLegalities = filterLegalities(legalities);

  return (
    <div className='pl-8 grid grid-cols-2 py-4 gap-y-[0.08rem]'>
      {Object.keys(filteredLegalities).map((legality, i) => {
        return (
          <div key={i}>
            <p className='grid grid-cols-2'>
              <LegalCard legal={legalities[legality as keyof CardLegalities] as CardLegal} />
              <span className='items-center text-xs mt-[1px] h-5'>
                {legality.charAt(0).toUpperCase() + legality.slice(1)}
              </span>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default CardLegality;