import { FC } from 'react';
import { NextPage } from 'next';
import { motion } from 'framer-motion';
import { Box, Center, Flex, Text, keyframes } from '@chakra-ui/react';
import NextLink from 'next/link';

import Icon from '@/components/Icon';

import { NAME, TITLE_LIST } from '@/constants/common';
import { LINK, LINK_PHOTO, LINK_WEB } from '@/constants/link';

import { TitleListType } from '@/types/common';
import { LinksHeadlineType, LinksType } from '@/types/link';

const animationKeyframes = keyframes`
  0% { transform: translateY(0); }
  15% { transform: translateY(4px); }
  30% { transform: translateY(0px); }
  45% { transform: translateY(4px); }
  60% { transform: translateY(0); }
  100% { transform: translateY(0); }
`;

const animation = `${animationKeyframes} 2s ease-in-out infinite`;

const Home: NextPage = () => {
  const Links: FC<{
    contents: LinksType[LinksHeadlineType];
  }> = ({ contents }) => {
    return (
      <Flex as={'ul'} gap={'8px'}>
        {contents.contents.map((item) => (
          <Center as={'li'} key={item.title}>
            <NextLink href={item.path} passHref>
              <Center
                as={'a'}
                target={'_blank'}
                w={'72px'}
                h={'72px'}
                bg={contents.color}
                borderRadius={'9999px'}
                opacity={1}
                transition={'0.2s opacity'}
                _hover={{
                  opacity: 0.7,
                }}
              >
                <Box as={'span'} display={'block'} w={'32px'} h={'32px'}>
                  <Box
                    as={'img'}
                    src={`/img/${item.icon}`}
                    alt={item.title}
                    w={'100%'}
                    h={'100%'}
                  />
                </Box>
              </Center>
            </NextLink>
          </Center>
        ))}
      </Flex>
    );
  };

  const Name = () => (
    <Text
      as={'h1'}
      fontSize={'4rem'}
      fontFamily={'heading'}
      lineHeight={'5rem'}
    >
      {NAME}
    </Text>
  );

  const Description = () => (
    <Flex gap={'6px'}>
      {TITLE_LIST.map((item: TitleListType, i: number) => (
        <>
          <Text
            key={item.title + i}
            color={'white'}
            bg={item.color}
            p={'2px 4px 0 4px'}
            fontSize={'1.5rem'}
            fontFamily={'sp'}
            letterSpacing={'-0.3px'}
          >
            {item.title}
          </Text>
          {i === 0 && (
            <Text as={'span'} pt={'2px'}>
              /
            </Text>
          )}
        </>
      ))}
    </Flex>
  );

  const Copy = () => (
    <Box as={'footer'} mt={'40px'}>
      <Text as={'small'}>&copy; {NAME}</Text>
    </Box>
  );

  const Blob = () => (
    <Center
      as={motion.div}
      animation={animation}
      bg={'lightGray'}
      p={'12px 40px'}
      borderRadius={'9999px'}
      lineHeight={'2rem'}
      pos={'relative'}
      mb={'16px'}
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
      写真を撮ることが大好きな
      <br />
      新米Webエンジニアです。
    </Center>
  );

  return (
    <Center minH={'95vh'} p={'64px 0'}>
      <Center flexDir={'column'} gap={'12px'} w={'fit-content'} m={'auto'}>
        <Blob />
        <Links contents={LINK[LINK_WEB]} />
        <Icon />
        <Links contents={LINK[LINK_PHOTO]} />
        <Flex flexDir={'column'} alignItems={'center'} gap={'12px'}>
          <Name />
          <Description />
        </Flex>
      </Center>
    </Center>
  );
};

export default Home;
