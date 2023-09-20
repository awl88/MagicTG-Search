import type { GetServerSideProps, NextPage } from 'next';
import { Card, MultifaceCard } from '../../types/Card';
import { loadCard } from '../api/cards/[id]';
import Head from 'next/head';
import { CardDetails } from '../../components/card/Details';
import { checkIfMultifacedCard } from '../../utils/CardHelpers';
import { CardRulings } from '../../components/card/rulings/Rulings';
import { CardLayout } from '../../types/CardHelper';
import { useState } from 'react';
import { CardDisplay } from '../../components/card/Display';

const renderButton = (layout: CardLayout, handleClick: React.MouseEventHandler<HTMLButtonElement>) => {
  switch (layout) {
    case CardLayout.TRANSFORM:
      return (
        <button onClick={handleClick} className='mt-4 py-2 px-4 rounded border-2 bg-white drop-shadow'>
          Transform
        </button>
      );
    default:
      return null;
  }
};

type CardPageProps = {
  card: Card;
};

const CardPage: NextPage<CardPageProps> = ({
  card: {
    name,
    layout,
    artist,
    frame,
    flavor_text,
    mana_cost,
    power,
    toughness,
    image_uris,
    type_line,
    oracle_text,
    legalities,
    card_faces,
    card_rulings
  }
}) => {
  const isMultifacedCard = checkIfMultifacedCard(layout);
  const [cardFront, setCardFront] = useState<boolean>(true);

  const { normal, png } = !isMultifacedCard ? image_uris! : card_faces[0].image_uris!;

  const handleClick = () => {
    setCardFront(!cardFront);
  };

  return (
    <>
      <Head>
        <title>{`${name} - MagicTG Search`}</title>
        <meta name='description' content={`${name} - ${mana_cost}`} />
        <meta name='og:title' content={`${name} - MagicTG Search`} />
        <meta name='og:description' content={`${name} - ${mana_cost}`} />
        <meta name='og:image' content={normal} />
        <meta name='og:url' content={``} />
      </Head>
      <article className='w-screen mx-auto'>
        <section className='flex flex-col mt-8'>
          <div className='flex justify-center'>
            <div className=''>
              <CardDisplay
                src={png}
                name={name}
                artist={artist}
                layout={layout}
                alt_face={isMultifacedCard ? card_faces[1].image_uris!.png : ''}
                card_front={cardFront}
                class_name='drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]'
              />
              <div className='grid justify-items-center'>{renderButton(layout, handleClick)}</div>
            </div>
            <div className='w-fit'>
              <CardDetails
                name={name}
                mana_cost={mana_cost}
                power={power}
                toughness={toughness}
                type_line={type_line}
                oracle_text={oracle_text}
                flavor_text={flavor_text}
                artist={artist}
                legalities={legalities}
                card_faces={card_faces}
                multifaced={isMultifacedCard}
              />
            </div>
          </div>
        </section>
        <div className='border-b my-8 mx-12'></div>
        <section className='mx-40 mb-8'>
          <CardRulings name={name} rulings={card_rulings} />
        </section>
      </article>
    </>
  );
};

export default CardPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params!;
  const card: Card | MultifaceCard = await loadCard(id as string);
  return {
    props: { card }
  };
};
