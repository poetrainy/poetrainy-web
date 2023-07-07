import { FC } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

import { NAME } from '@/constants/common';

const Header: FC = () => (
  <Box
    as={'header'}
    w={'80vw'}
    maxW={'1000px'}
    m={'auto'}
    pos={'fixed'}
    inset={'80px 0 auto 0'}
    textStyle={'zIndexHeader'}
    mixBlendMode={'difference'}
  >
    <NextLink passHref href={'/'}>
      <Flex
        as={'a'}
        alignItems={'center'}
        gap={'16px'}
        w={'fit-content'}
        opacity={1}
        transition={'opacity 0.2s'}
        _hover={{
          opacity: 0.6,
        }}
      >
        <Box
          w={'56px'}
          h={'56px'}
          pos={'relative'}
          transform={'translate(0)'}
          zIndex={1}
        >
          <Box
            as={'img'}
            src={'/img/logo-difference.png'}
            textStyle={'imageCover'}
          />
        </Box>
        <Text
          as={'h1'}
          color={'white'}
          fontFamily={'sp'}
          fontSize={'1.8rem'}
          pos={'relative'}
          transform={'translateX(0)'}
          zIndex={1}
          sx={{
            '&::before': {
              content: `'${NAME}'`,
              pos: 'absolute',
              transform: 'translateY(0)',
              zIndex: 1,
            },
          }}
        >
          {NAME}
        </Text>
      </Flex>
    </NextLink>
  </Box>
);

export default Header;
