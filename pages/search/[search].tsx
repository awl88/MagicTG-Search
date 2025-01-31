import { GetServerSideProps, NextPage } from 'next';
import React, { useEffect } from 'react';
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
  const [cardListData, setCardListData] = React.useState<Card[]>([]);

  useEffect(() => {
    setCardListData(first60Cards);
  }, [cardList]);

  useEffect(() => {
    (async () => {
      let more = cardList.has_more;
      let nextPage = cardList.next_page;

      while (more) {
        const next = await searchCards(nextPage, 1);
        cardList.data.push(...next.data);
        more = next.has_more;
        nextPage = next.next_page;
      }
    })();
  }, [cardList]);

  const handleClick = (id: string) => {
    router.push(`/cards/${id}`);
  };

  const handleNextPageClick = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    setCardListData(cardList.data.slice(nextPage * 60, nextPage * 60 + 60));
  };

  const handlePreviousPageClick = () => {
    const previousPage = currentPage - 1;
    setCurrentPage(previousPage);
    setCardListData(cardList.data.slice(previousPage * 60, previousPage * 60 + 60));
    console.log(currentPage)  
    console.log('previous page')
  };

  return (
    <div>
      <SearchData
        numberOfCards={cardList.total_cards}
        page={currentPage}
        handleNextPageClick={handleNextPageClick}
        handlePreviousPageClick={handlePreviousPageClick}
      />
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
      <section className='flex justify-center mt-4'>nezt page</section>
    </div>
  );
};

export default CardSearch;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { search } = params!;
  const cardList: CardList = await searchCards(search as string, 0);

  return {
    props: { cardList }
  };
};
