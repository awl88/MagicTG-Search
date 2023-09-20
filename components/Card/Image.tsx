import Image from 'next/image';
import { FC } from 'react';
import { CardLayout } from '../../types/CardHelper';

type CardImageProps = {
  src: string;
  name: string;
  artist: string;
  class_name?: string;
  layout: CardLayout;
  small?: boolean;
  alt_face?: string;
};

export const CardImage: FC<CardImageProps> = ({ src, name, artist, class_name, small }) => {
  return (
    <div className={`relative ${small ? 'h-[341px] w-[245px]' : 'h-[469px] w-[336px]'}`}>
      <Image
        className={class_name}
        src={src}
        alt={`${name} - Artist: ${artist}`}
        fill
        style={{ objectFit: 'cover' }}
        sizes='(max-width: 336px) 100vw, 245px'
      />
    </div>
  );
};
