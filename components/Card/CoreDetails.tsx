import React, { FC } from 'react';
import { CardCore } from '../../types/CardHelper';
import { convertText } from '../../utils/CardHelpers';

type CardCoreDetailsProps = {
  name: string;
  mana_cost: string;
  type_line: string;
  oracle_text: string;
  flavor_text?: string;
  power?: string;
  toughness?: string;
  card_faces?: CardCore[];
};

const CardCoreDetails: FC<CardCoreDetailsProps> = ({
  name,
  mana_cost,
  type_line,
  oracle_text,
  flavor_text,
  power,
  toughness
}) => {
  const manaCostWithSymbols = convertText(mana_cost);
  const oracleTextWithSymbols = convertText(oracle_text);

  return (
    <>
      <div className='pl-8 border-b-[1px] border-b-slate-200'>
        <h1 className='py-2 pr-4'>
          {name} <span dangerouslySetInnerHTML={{ __html: manaCostWithSymbols }}></span>
        </h1>
      </div>
      <div className='pl-8 border-b-[1px] border-b-slate-200'>
        <h2 className='py-2 pr-4'>{type_line}</h2>
      </div>
      <span
        className='pl-8 pr-4 py-2 inline-block text-[14px]'
        dangerouslySetInnerHTML={{ __html: oracleTextWithSymbols }}></span>
      {flavor_text && <span className='pl-8  py-2 pr-4 text-sm inline-block italic'>{flavor_text}</span>}
      {power && toughness && (
        <div className='pl-8 py-2 border-y-[1px] border-y-slate-200'>
          <span className='pr-4 text-lg'>
            {power}/{toughness}
          </span>
        </div>
      )}
    </>
  );
};

export default CardCoreDetails;