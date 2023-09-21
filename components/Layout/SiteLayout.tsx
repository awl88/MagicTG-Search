import Link from "next/link";
import Header from './Header';
import Footer from './Footer';

const SiteLayout = ({ children }: any) => (
  <div className='flex flex-col'>
    <Header />
    <div className='flex-grow'>{children}</div>
    <Footer />
  </div>
);

export default SiteLayout;
