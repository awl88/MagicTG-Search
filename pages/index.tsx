import Head from 'next/head';
import { Inter } from '@next/font/google';
import { Search } from '../components/seach/search';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>MagicTG Search</title>
        <meta name='description' content='A place to search and find Magic The Gathering cards.' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <div className='w-full h-screen flex pt-64 bg-gradient-to-t from-[#0e161b] to-[#314d5e]'>
          <div className='flex mx-auto flex-col'>
            <h1 className='text-4xl mx-auto my-10 text-slate-300 text-4xl drop-shadow'>
              Magic: The Gathering card search
            </h1>
            <Search />
          </div>
        </div>
      </main>
    </>
  );
}
