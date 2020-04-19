import { useRouter } from 'next/router';
import PropLayout from '../../comps/PropLayout';

export default function Post() {
  const router = useRouter();

  return (
    <PropLayout>
      <h1>{router.query.id}</h1>
      <p>GO ZAGS!!@!@!@!@</p>
    </PropLayout>
  );
};
