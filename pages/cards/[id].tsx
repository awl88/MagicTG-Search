import type { GetServerSideProps, NextPage } from 'next';
import { CardImage } from '../../components/Card/CardImage';
import { TCard } from '../../types/TCard';
import { loadCard } from '../api/cards/[id]';
import Head from 'next/head';
import { Details } from '../../components/Card/Details';

type CardPageProps = {
  card: TCard;
};
const CardPage: NextPage<CardPageProps> = ({
  card: { name, artist, frame, flavor_text, mana_cost, image_uris, type_line, oracle_text }
}) => {
  const { small, normal, large, art_crop, png } = image_uris;
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
      <article className='w-screen f-screen mx-auto mt-8 mb-2 max-w-2xl'>
        <section className='flex flex-col'>
          <div className='flex justify-center'>
            <CardImage
              src={png}
              name={name}
              artist={artist}
              frame={frame}
              flavor_text={flavor_text}
              class_name='drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] z-10'
            />
            <Details
              name={name}
              mana_cost={mana_cost}
              type_line={type_line}
              oracle_text={oracle_text}
              flavor_text={flavor_text}
              artist={artist}
            />
          </div>
        </section>
      </article>
    </>
  );
};

export default CardPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params!;
  const card = await loadCard(id as string);
  console.log(card);
  return {
    props: { card }
  };
};
