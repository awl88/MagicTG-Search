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
    <div>
      <Image
        className={class_name}
        src={src}
        alt={`${name} - Artist: ${artist}`}
        width={small ? 245 : 336}
        height={small ? 341 : 469}
      />
    </div>
  );
};
