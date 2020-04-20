import fetch from 'isomorphic-unfetch';
import PropLayout from '../../comps/PropLayout';


const Post = () => (
  //const router = useRouter();

  
    <PropLayout>
      <h1>{router.query.id}</h1>
      <p>GO ZAGS!!@!@!@!@</p>
    </PropLayout>

);

const PostData = pro => (
  <PropLayout>
    <h1>{pro.show.name}  {pro.show.id}</h1>
    <p>{pro.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
    {pro.show.image ? <img src={pro.show.image.medium} /> : null}
  </PropLayout>
);


PostData.getInitialProps = async function(context) {
  const { id } = context.query;
  const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await response.json();


  console.log(`Received the show: ${show.name} ${id} Made API call id.js`);

  return { show };

};

export default PostData;

