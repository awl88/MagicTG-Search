import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import Scry from 'scryfall-sdk';

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
        <div></div>
      </main>
    </>
  );
}
