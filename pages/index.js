import Link from 'next/link';
import PropLayout from '../comps/PropLayout';

const IndexThe = () => {
    
  <PropLayout>
    <p>Content via Layout</p>
  </PropLayout>

};


const Page = () => {
  <p>Content via Higher Order</p>;
};

const PostLink = props => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);


export default function Blog() {
  return (
    <PropLayout>
      <h1>Bloggy</h1>
      <ul>
	<PostLink id="Hello Next" />
	<PostLink id="Learn Next JS is dope" />
	<PostLink id="Deploy the apps" />
      </ul>
    </PropLayout>
  );
};
