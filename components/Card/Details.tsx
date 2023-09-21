import { FC } from 'react';
import { CardCore, CardLegalities } from '../../types/CardHelper';
import CardLegality from './Legality';
import CardCoreDetails from './CoreDetails';

type CardDetailsProps = {
  name: string;
  mana_cost: string;
  power?: string;
  toughness?: string;
  type_line: string;
  oracle_text: string;
  flavor_text?: string;
  artist: string;
  legalities: CardLegalities;
  card_faces?: CardCore[];
  multifaced: boolean;
};
const CardDetails: FC<CardDetailsProps> = ({
  name,
  mana_cost,
  power,
  toughness,
  type_line,
  oracle_text,
  flavor_text,
  artist,
  legalities,
  card_faces,
  multifaced
}) => {
  const cardFront = multifaced ? card_faces![0] : undefined;
  const cardBack = multifaced ? card_faces![1] : undefined;

  console.log(`card_faces: ${card_faces}`)

  return (
    <div className='w-96 whitespace-pre-line -ml-4 mt-8'>
      <div className='bg-white shadow-xl rounded border-y-4 border-y-slate-700 border-x-[1px] border-x-slate-200 min-h-[30rem]'>
        {!multifaced ? (
          <CardCoreDetails
            name={name}
            mana_cost={mana_cost}
            type_line={type_line}
            oracle_text={oracle_text}
            flavor_text={flavor_text}
            power={power}
            toughness={toughness}
          />
        ) : (
          <>
            <CardCoreDetails
              name={cardFront!.name}
              mana_cost={cardFront!.mana_cost}
              type_line={cardFront!.type_line}
              oracle_text={cardFront!.oracle_text}
              flavor_text={cardFront!.flavor_text}
              power={cardFront!.power}
              toughness={cardFront!.toughness}
            />
            <CardCoreDetails
              name={cardBack!.name}
              mana_cost={cardBack!.mana_cost}
              type_line={cardBack!.type_line}
              oracle_text={cardBack!.oracle_text}
              flavor_text={cardBack!.flavor_text}
              power={cardBack!.power}
              toughness={cardBack!.toughness}
            />
          </>
        )}
        <div className='pl-8 border-b-[1px] border-y-slate-200'>
          <span className='py-2 pr-4 text-xs italic'>
            <em>Illustrated by </em>
            {artist}
          </span>
        </div>
        <CardLegality legalities={legalities} />
      </div>
    </div>
  );
};

export default CardDetails;