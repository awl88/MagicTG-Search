import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import { CardList } from '../../types/Card';
import { searchCards } from '../api';
import { CardImage } from '../../components/card/Image';
import { useRouter } from 'next/router';
import { SearchData } from '../../components/seach/search-data';

type CardSearchProps = {
  cardList: CardList;
};

const CardSearch: NextPage<CardSearchProps> = ({ cardList }) => {
  const router = useRouter();

  const handleClick = (id: string) => {
    router.push(`/cards/${id}`);
  };

  return (
    <div className='h-screen'>
      <SearchData numberOfCards={cardList.data.length}/>
      <section className='flex justify-center'>
        <div className='grid grid-cols-4 gap-2'>
          {cardList.data.map(card => (
            <div key={card.id} onClick={() => handleClick(card.id)} className='w-100px'>
              <CardImage
                src={card.card_faces ? card.card_faces[0].image_uris!.png : card.image_uris!.png}
                artist={card.artist}
                name={card.name}
                layout={card.layout}
                small
                class_name='drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] z-10'
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CardSearch;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { search } = params!;
  const cardList: CardList = await searchCards(search as string);
  return {
    props: { cardList }
  };
};
