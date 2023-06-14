import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const NotFound: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, []);

  return <></>;
};

export default NotFound;
