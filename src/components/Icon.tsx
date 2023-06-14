import { FC } from 'react';
import { Center, Box } from '@chakra-ui/react';

import { NAME } from '@/constants/common';

const Icon: FC = () => {
  return (
    <Center
      w={'240px'}
      h={'240px'}
      bg={'black'}
      borderRadius={'9999px'}
      overflow={'hidden'}
      pos={'relative'}
      sx={{
        '&::before': {
          content: "''",
          display: 'block',
          w: '50%',
          h: '100%',
          pos: 'absolute',
          bg: 'green',
          inset: '0 auto auto 0',
          transform: 'rotateZ(30deg)',
          transformOrigin: 'right',
        },
      }}
    >
      <Center
        w={'224px'}
        h={'224px'}
        borderRadius={'9999px'}
        overflow={'hidden'}
      >
        <Box
          as={'img'}
          src={'/img/icon.jpg'}
          w={'100%'}
          h={'100%'}
          objectFit={'cover'}
          alt={NAME}
          zIndex={5}
        />
      </Center>
    </Center>
  );
};

export default Icon;
