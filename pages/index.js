import Link from 'next/link';

export default function IndexThe() {
  return (
    <div>
      <Link href="/about">
        <a title="About Title">ABOUT</a>
      </Link>
     <p>Hello JS</p>
    </div>
  );
}
