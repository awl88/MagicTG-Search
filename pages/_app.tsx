import SiteLayout from '../components/Layout/SiteLayout';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (router.pathname === '/') {
    return (
      <div className='bg-full bg-[#0e161b]'>
        <Component className='bg-[#0e161b]' {...pageProps} />
      </div>
    );
  } else {
    return (
      <SiteLayout>
        <div className='bg-full bg-blue'>
          <Component className='bg-blue' {...pageProps} />
        </div>
      </SiteLayout>
    );
  }
}
