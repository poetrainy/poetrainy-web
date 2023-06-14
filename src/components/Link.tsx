import { FC } from 'react';
import { Center } from '@chakra-ui/layout';
import NextLink from 'next/link';

import { LinksContentsType } from '@/types/link';

type Props = {
  color: string;
  contents: LinksContentsType;
};

const Links: FC<Props> = ({ color, contents }) => {
  return (
    <Center
      as={'li'}
      key={contents.title}
      w={'80px'}
      h={'80px'}
      bg={color}
      borderRadius={'9999px'}
    >
      <NextLink href={contents.path} passHref>
        <Center as={'img'} src={`/img/${contents.icon}`} alt={contents.title} />
      </NextLink>
    </Center>
  );
};

export default Links;
