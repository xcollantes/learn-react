import { useRouter } from 'next/router';
import PropLayout from '../comps/PropLayout';

const MyPage = () => {
  const router = useRouter();
  return (
    <PropLayout>
      <h1>{router.query.title}</h1>
      <p>This is the content of the blog.</p>
    </PropLayout>
  );
};

export default MyPage;
