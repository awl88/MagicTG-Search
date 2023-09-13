import SiteLayout from '../components/Layout/SiteLayout';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import router from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  if (router.pathname === '/') {
    return <Component {...pageProps} />;
  } else {
    return (
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    );
  }
}
