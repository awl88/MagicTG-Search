import type { GetServerSideProps, NextPage } from 'next';
import { CardImage } from '../../components/Card/Image';
import { Card, MultifaceCard } from '../../types/Card';
import { loadCard } from '../api/cards/[id]';
import Head from 'next/head';
import { CardDetails } from '../../components/Card/Details';
import { checkIfMultifacedCard } from '../../utils/CardHelpers';
import { CardRulings } from '../../components/Card/rulings/Rulings';

interface CardPageProps {
  card: Card;
}

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

  const { small, normal, large, art_crop, png } = !isMultifacedCard ? image_uris! : card_faces[0].image_uris!;

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
        <section className='flex flex-col'>
          <div className='flex justify-center'>
            <div className=''>
              <CardImage
                src={png}
                name={name}
                artist={artist}
                layout={layout}
                alt_face={isMultifacedCard ? card_faces[1].image_uris!.png : ''}
                class_name='drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] z-10'
              />
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
  console.log(params);
  const { id } = params!;
  const card: Card | MultifaceCard = await loadCard(id as string);
  console.log(card);
  return {
    props: { card }
  };
};
