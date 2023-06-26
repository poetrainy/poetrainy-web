import { FC } from 'react';
import { Center } from '@chakra-ui/react';
import NextLink from 'next/link';

const Icon: FC = () => (
  <NextLink href={'/archive'} passHref>
    <Center
      as={'a'}
      w={'240px'}
      h={'240px'}
      bg={'black800'}
      borderRadius={'9999px'}
      overflow={'hidden'}
      pos={'relative'}
      _hover={{
        "&::after":{
          opacity: 1,
        }
      }}
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
        '&::after': {
          content: "'💻🤍'",
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          w: '224px',
          h: '224px',
          bg: '#ffffff99',
          fontSize: '3rem',
          opacity: 0,
          transition: 'opacity 0.1s',
          pos: 'absolute',
          inset: '8px 8px auto auto',
          borderRadius: '9999px',
          zIndex: 2,
          textShadow: '0 0 10px #00000090',
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
        zIndex={1}
      />
    </Center>
  </NextLink>
);

export default Icon;
