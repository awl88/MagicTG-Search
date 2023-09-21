import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import { Card, CardList } from '../../types/Card';
import { searchCards } from '../api';
import CardImage from '../../components/card/Image';
import { useRouter } from 'next/router';
import { SearchData } from '../../components/seach/search-data';
import { checkIfMultifacedCard } from '../../utils/CardHelpers';
import { CardLayout } from '../../types/CardHelper';

type CardSearchProps = {
  cardList: CardList;
};

const CardSearch: NextPage<CardSearchProps> = ({ cardList }) => {
  const first60Cards = cardList.data.slice(0, 60);

  const router = useRouter();
  const [currentPage, setCurrentPage] = React.useState<number>(0);
  const [cardListData, setCardListData] = React.useState<Card[]>(first60Cards);

  React.useEffect(() => {
    setCardListData(first60Cards);
  }, [cardList, currentPage]);

  const handleClick = (id: string) => {
    router.push(`/cards/${id}`);
  };

  return (
    <div>
      <SearchData numberOfCards={cardList.total_cards} />
      <section className='flex justify-center'>
        <div className='grid grid-cols-4 gap-2'>
          {cardListData.map(card => (
            <div key={card.id} onClick={() => handleClick(card.id)} className='w-100px'>
              <CardImage
                src={
                  card.layout === CardLayout.TRANSFORM ||
                  card.layout === CardLayout.SAGA ||
                  card.layout === CardLayout.MODAL_DFC
                    ? card.card_faces[0].image_uris!.png
                    : card.image_uris!.png
                }
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
  const cardList: CardList = await searchCards(search as string, 0);

  if (cardList.has_more) {
    const nextPage = await searchCards(cardList.next_page, 1);
    cardList.data.push(...nextPage.data);
  }
  return {
    props: { cardList }
  };
};
