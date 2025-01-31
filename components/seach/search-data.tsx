import React, { FC } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

type SearchDataProps = {
  numberOfCards: number;
  page: number;
  handleNextPageClick: () => void;
  handlePreviousPageClick: () => void;
};

export const SearchData: FC<SearchDataProps> = ({
  numberOfCards,
  page,
  handleNextPageClick,
  handlePreviousPageClick
}) => {
  return (
    <div className='flex justify-center'>
      <div className='w-3/4'>
        <section className='flex justify-end mt-4'>
          <button
            disabled={page === 0}
            className='m-1 bg-white border border-grey py-1 px-2 flex items-center rounded'
            onClick={handlePreviousPageClick}>
            <IoIosArrowBack className='mr-2' /> Previous
          </button>
          <button
            disabled={page === Math.ceil(numberOfCards / 60)}
            className='m-1 bg-white border border-grey py-1 px-2 flex items-center rounded'
            onClick={handleNextPageClick}>
            Next <IoIosArrowForward className='ml-2' />
          </button>
        </section>
        <span>{numberOfCards.toLocaleString()} cards were returned</span>
      </div>
    </div>
  );
};
