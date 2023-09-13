import Link from "next/link";
import Header from './Header';

const SiteLayout = ({ children }: any) => (
  <div>
    <Header />
    <div>{children}</div>
  </div>
);

export default SiteLayout;
