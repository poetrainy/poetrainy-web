import { FC } from 'react';
import { Center } from '@chakra-ui/react';

const Icon: FC = () => (
  <Center
    w={'240px'}
    h={'240px'}
    bg={'black800'}
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
      bg={'url("/img/icon.jpg") no-repeat'}
      bgSize={'contain'}
      overflow={'hidden'}
      zIndex={5}
    />
  </Center>
);

export default Icon;
