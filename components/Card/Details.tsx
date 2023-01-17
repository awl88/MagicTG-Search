import { convertTextSymbols } from '../../utils/CardHelpers';

type DetailsProps = {
  name: string;
  mana_cost: string;
  type_line: string;
  oracle_text: string;
  flavor_text: string;
  artist: string;
};
export const Details = ({ name, mana_cost, type_line, oracle_text, flavor_text, artist }: DetailsProps) => {
  const manaCostWithSymbols = convertTextSymbols(mana_cost);
  const oracleTextWithSymbols = convertTextSymbols(oracle_text);
  return (
    <div className='w-full whitespace-pre-line -ml-8 mt-8'>
      <div className='pl-8 bg-white shadow-xl rounded border-y-4 border-y-slate-700 border-x-[1px] border-x-slate-200'>
        <div className='border-b-[1px] border-b-slate-200'>
          <h1 className='py-2 px-4'>{name} <span dangerouslySetInnerHTML={{__html: manaCostWithSymbols}}></span></h1>
        </div>
        <div className='border-b-[1px] border-b-slate-200'>
          <h2 className='py-2 px-4'>{type_line}</h2>
        </div>
        <text
          className='px-4 py-2 italic inline-block text-[14px]'
          dangerouslySetInnerHTML={{ __html: oracleTextWithSymbols }}></text>
        {flavor_text && <text className='py-2 px-4 text-sm inline-block italic'>{flavor_text}</text>}
        <div className='border-y-[1px] border-y-slate-200'>
          <text className='py-2 px-4 text-xs italic'>
            <em>Illustrated by </em>
            {artist}
          </text>
        </div>
      </div>
    </div>
  );
};
