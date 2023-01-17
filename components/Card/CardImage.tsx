import Image from 'next/image';

type CardImageProps = {
  src: string;
  name: string;
  artist: string;
  frame: string;
  flavor_text: string | null;
  class_name?: string;
  small?: boolean;
};

export const CardImage = ({
  src,
  name,
  artist,
  frame,
  flavor_text,
  class_name,
  small
}: CardImageProps) => {
  return (
    <Image
      className={class_name}
      src={src}
      alt={`${name} - Artist: ${artist}`}
      width={small ? 146 : 336}
      height={small ? 204 : 469}
      unoptimized
    />
  );
};
