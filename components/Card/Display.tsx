import Image from 'next/image';
import { FC } from 'react';
import { CardLayout } from '../../types/CardHelper';
import { CardImage } from './Image';

type CardDisplayProps = {
  src: string;
  name: string;
  artist: string;
  class_name?: string;
  layout: CardLayout;
  small?: boolean;
  alt_face?: string;
  card_front?: boolean;
};

export const CardDisplay: FC<CardDisplayProps> = ({
  src,
  name,
  artist,
  class_name,
  layout,
  small,
  alt_face,
  card_front
}) => {
  return (
    <div className='group w-[336px] h-[469px] [perspective:1000px]'>
      <div
        className={`relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] ${
          !card_front && '[transform:rotateY(180deg)]'
        }`}>
        <div className='absolute inset-0'>
          <CardImage
            class_name={class_name + ' object-cover'}
            src={src}
            name={name}
            artist={artist}
            layout={layout}
          />
        </div>
        {layout === CardLayout.TRANSFORM && alt_face && (
          <div className='absolute inset-0 h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden]'>
            <CardImage
              class_name={class_name + ' rotate-y-180'}
              src={alt_face}
              name={name}
              artist={artist}
              layout={layout}
            />
          </div>
        )}
      </div>
    </div>
  );
};
