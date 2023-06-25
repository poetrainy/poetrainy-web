import { FC } from 'react';
import { Box, Center } from '@chakra-ui/react';

import { useWindowSize } from '@/hooks/useWindowSize';

import { MicroCMSDesignType } from '@/types/microCMS';

type Props = {
  data: MicroCMSDesignType[];
};

const Vtuber: FC<Props> = ({ data }) => {
  const { isSM } = useWindowSize();

  return (
    <Center
      as={'ul'}
      flexWrap={'wrap'}
      gap={{ base: '1vw', sm: '2%' }}
      w={{ base: '100vw', sm: '65vw' }}
      h={{ base: 'calc(100vw - 6vw)', sm: '65vw' }}
      maxW={'920px'}
      maxH={'920px'}
      m={'auto'}
      p={{ base: '0 2vw', sm: 0 }}
    >
      {data.map((item: MicroCMSDesignType) => (
        <Box
          as={'li'}
          key={item.id}
          w={{ base: 'calc((100vw - 1vw * 2 - 2vw * 2 ) / 3)', sm: '32%' }}
        >
          <Box
            as={'img'}
            src={isSM ? `${item.image.url}?w=500` : `${item.image.url}?w=800`}
            alt={item.alt}
            textStyle={'imageCover'}
          />
        </Box>
      ))}
    </Center>
  );
};

export default Vtuber;
