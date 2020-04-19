import Link from 'next/link';
import PropLayout from '../comps/PropLayout';
import fetch from 'isomorphic-unfetch';


const PostLink = props => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

// 
// export default function Blog() {
//   return (
//     <PropLayout>
//       <h1>Bloggy</h1>
//       <ul>
// 	<PostLink id="Hello Next" />
// 	<PostLink id="Learn Next JS is dope" />
// 	<PostLink id="Deploy the apps" />
//       </ul>
//     </PropLayout>
//   );
// }

const Index = props => (
  <PropLayout>
    <h1>Batmans</h1>
    <ul>
      {props.shows.map(
        show => (
          <li key={show.id}>
            <Link href="/p/[id]" as={`/p/${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        )
      )}
    </ul>
  </PropLayout>
);

Index.getInitialProps = async function() {
  const response = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await response.json();

  console.log(`Show data recieved. Count: ${data.length}`);
  console.log({data});
  console.log( {shows: data.map(entry => entry.show)} );
  return { shows: data.map(entry => entry.show ) 
  };

};

export default Index;
