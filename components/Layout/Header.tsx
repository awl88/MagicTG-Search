import React, { FC } from 'react';
import { GrSearch } from 'react-icons/gr';
import MagicLogo from '../../public/img/magic_logo.png';
import Image from 'next/image';
import router from 'next/router';

type HeaderProps = {};

const Header: FC<HeaderProps> = ({}) => {
  const [search, setSearch] = React.useState<string>('');

  const handleClick = () => {
    router.push(`/`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };

  return (
    <div className='w-full h-16 bg-gray-300'>
      <div className='flex justify-center'>
        <div className='w-1/2 h-16'>
          <div className='ml-2 mt-2 text-xl flex flex-row'>
            <Image
              src={MagicLogo}
              alt='Home'
              width={48}
              height={48}
              className='mr-4 cursor-pointer'
              onClick={handleClick}
            />
            <GrSearch className='mt-3 mr-2' size={24} />
            <form onSubmit={handleSubmit}>
              <input
                type='text'
                placeholder='Search'
                className='mt-2 bg-gray-300 focus:outline-none'
                onChange={handleChange}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
