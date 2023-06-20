import { FC } from 'react';
import { Center } from '@chakra-ui/react';

const Blob: FC = () => (
  <Center
    bg={'black100'}
    p={'12px 40px'}
    borderRadius={'9999px'}
    lineHeight={'2rem'}
    mb={'16px'}
    textAlign={'center'}
    pos={'relative'}
    sx={{
      '&::after': {
        content: '""',
        display: 'block',
        w: '16px',
        h: '16px',
        background: 'url("/img/parts-triangle.svg") no-repeat',
        backgroundSize: 'contain',
        pos: 'absolute',
        inset: 'auto auto -16px auto',
      },
    }}
  >
    写真を撮ることが好きな
    <br />
    新米Webエンジニアです｡
  </Center>
);

export default Blob;
