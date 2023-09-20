import { useRouter } from 'next/router';
import React from 'react';

export const Search = () => {
  const router = useRouter();
  const [search, setSearch] = React.useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };

  return (
    <div className=''>
      <form className='flex flex-col justify-center' onSubmit={handleSubmit}>
        <input
          className='border border-black h-16 w-[32rem] bg-slate-600 text-5xl text-slate-100 px-2 rounded drop-shadow'
          type='text'
          onChange={e => handleChange(e)}></input>
        <button
          className='bg-slate-600 text-slate-900 text-5xl h-16 w-60 mt-8 mx-auto rounded drop-shadow'
          type='submit'>
          Search
        </button>
      </form>
    </div>
  );
};
