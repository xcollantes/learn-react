import Link from 'next/link';
import Header from '../comps/Header';

export default function IndexThe() {
  return (
    <div>
      <Header />
      <Link href="/about">
        <a>ABOUT</a>
      </Link>
     <p>Hello JS</p>
    </div>
  );
}
