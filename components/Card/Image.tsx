import Image from 'next/image';
import { FC, useState } from 'react';
import { CardCore, CardLayout } from '../../types/CardHelper';

type CardImageProps = {
  src: string;
  name: string;
  artist: string;
  class_name?: string;
  layout: CardLayout;
  small?: boolean;
  alt_face?: string;
};

const renderButton = (layout: CardLayout, handleClick: React.MouseEventHandler<HTMLButtonElement>) => {
  switch (layout) {
    case CardLayout.TRANSFORM:
      return (
        <button onClick={handleClick} className='mt-4 py-2 px-4 rounded-md border-2'>
          Transform
        </button>
      );
    default:
      return null;
  }
};

export const CardImage: FC<CardImageProps> = ({ src, name, artist, class_name, layout, small, alt_face }) => {
  const [cardFront, setCardFront] = useState<boolean>(true);

  const handleClick = () => {
    setCardFront(!cardFront);
  };

  return (
    <div className='group w-[336px] h-[469px] [perspective:1000px]'>
      <div className={`relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] ${!cardFront && '[transform:rotateY(180deg)]'}`}>
        <div className='absolute inset-0'>
          <Image
            className={'h-full w-full object-cover'}
            src={src}
            alt={`${name} - Artist: ${artist}`}
            width={small ? 146 : 336}
            height={small ? 204 : 469}
            priority={true}
            unoptimized
          />
        </div>
        <div className='absolute inset-0 h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden]'>
          <Image
            className={class_name + ' rotate-y-180'}
            src={alt_face!}
            alt={`${name} - Artist: ${artist}`}
            width={small ? 146 : 336}
            height={small ? 204 : 469}
            priority={true}
            unoptimized
          />
        </div>
      </div>
      <div className='grid justify-items-center'>{renderButton(layout, handleClick)}</div>
    </div>
  );
};
