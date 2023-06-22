import { FC } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

import { NAME } from '@/constants/common';

const Header: FC = () => (
  <Flex
    as={'header'}
    alignItems={'center'}
    gap={'16px'}
    w={'80vw'}
    maxW={'1000px'}
    m={'auto'}
    pos={'fixed'}
    inset={'80px 0 auto 0'}
    textStyle={'zIndexHeader'}
    mixBlendMode={'difference'}
  >
    {/* <Box
      w={'64px'}
      h={'64px'}
      borderRadius={'9999px'}
      overflow={'hidden'}
      boxShadow={'0 0 10px #00000030'}
      pos={'relative'}
      transform={'translate(0)'}
      zIndex={1}
    >
      <Box as={'img'} src={'/img/icon.jpg'} textStyle={'image'} />
    </Box> */}
    <Text
      as={'h1'}
      color={'white'}
      fontFamily={'sp'}
      fontSize={'1.8rem'}
      // mixBlendMode={'difference'}
      pos={'relative'}
      transform={'translateX(0)'}
      zIndex={1}
      sx={{
        '&::before': {
          content: `'${NAME}'`,
          // mixBlendMode: 'difference',
          pos: 'absolute',
          bg: 'tomato',
          transform: 'translateY(0)',
          zIndex: 1,
        },
      }}
    >
      {/* {NAME} */}
    </Text>
  </Flex>
);

export default Header;
