import { FC, useEffect, useState } from 'react';
import { NextPage } from 'next';
import { motion } from 'framer-motion';
import { Box, Center, Flex, Text, keyframes } from '@chakra-ui/react';
import NextLink from 'next/link';

import { NAME, TITLE_LIST } from '@/constants/common';
import { LINK, LINK_PHOTO, LINK_WEB } from '@/constants/link';

import { TitleListType } from '@/types/common';
import { LinksHeadlineType, LinksType } from '@/types/link';

import { useWindowSize } from '@/hooks/useJudgeSP';

const animationKeyframes = keyframes`
  0% { transform: translateY(0); }
  10% { transform: translateY(3px); }
  20% { transform: translateY(0px); }
  30% { transform: translateY(3px); }
  40% { transform: translateY(0); }
  100% { transform: translateY(0); }
`;

const animation = `${animationKeyframes} 2.5s ease-in-out infinite`;

const Home: NextPage = () => {
  const { isSP } = useWindowSize();
  const [fadeInCount, setFadeInCount] = useState<number>(0);
  const [isFadeInArray, setIsFadeInArray] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    setTimeout(() => {
      const keepIsFadeInArray = isFadeInArray.map(
        (element: boolean, i: number) => {
          if (i === fadeInCount) return true;
          return element;
        }
      );
      setIsFadeInArray(keepIsFadeInArray);
      if (fadeInCount + 1 === isFadeInArray.length) return;
      setFadeInCount(fadeInCount + 1);
    }, 300);
  }, [fadeInCount]);

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
                borderRadius={'9999px'}
                opacity={1}
                transition={'0.2s opacity'}
                _hover={{
                  opacity: 0.7,
                }}
                bg={`url('/img/${item.icon}'), ${contents.color}`}
                bgRepeat={'no-repeat'}
                bgSize={'32px 32px'}
                bgPos={'center'}
              />
            </NextLink>
          </Center>
        ))}
      </Flex>
    );
  };

  const Icon = () => (
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
        bg={'url("/img/icon.jpg") no-repeat'}
        bgSize={'contain'}
        overflow={'hidden'}
        zIndex={5}
      />
    </Center>
  );

  const Name = () => (
    <Text
      as={'h1'}
      fontSize={'5rem'}
      fontFamily={'heading'}
      lineHeight={'6rem'}
      letterSpacing={'1px'}
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
            fontWeight={'bold'}
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
    <Box as={'footer'} mt={'24px'}>
      <Text as={'small'} fontFamily={'sp'} fontSize={'1.6rem'}>
        &copy; 2023 {NAME}
      </Text>
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
      mb={'16px'}
      textAlign={'center'}
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

  return (
    <>
      {isSP ? (
        <Center minH={'95vh'} p={'56px 0 64px'}>
          <Center flexDir={'column'} gap={'12px'} w={'fit-content'} m={'auto'}>
            <Box
              textStyle={'transition'}
              sx={{
                pos: 'relative',
                ...(isFadeInArray[3] && {
                  opacity: 1,
                  transform: 'translateY(0)',
                }),
              }}
            >
              <Blob />
            </Box>
            <Box
              textStyle={'transition'}
              sx={{
                ...(isFadeInArray[1] && {
                  opacity: 1,
                  transform: 'translateY(0)',
                }),
              }}
            >
              <Links contents={LINK[LINK_WEB]} />
            </Box>
            <Box
              textStyle={'transition'}
              sx={{
                ...(isFadeInArray[0] && {
                  opacity: 1,
                  transform: 'translateY(0)',
                }),
              }}
            >
              <Icon />
            </Box>
            <Box
              textStyle={'transition'}
              sx={{
                ...(isFadeInArray[2] && {
                  opacity: 1,
                  transform: 'translateY(0)',
                }),
              }}
            >
              <Links contents={LINK[LINK_PHOTO]} />
            </Box>
            <Flex
              flexDir={'column'}
              alignItems={'center'}
              gap={'12px'}
              textStyle={'transition'}
              sx={{
                ...(isFadeInArray[3] && {
                  opacity: 1,
                  transform: 'translateY(0)',
                }),
              }}
            >
              <Name />
              <Description />
            </Flex>
            <Box
              textStyle={'transition'}
              sx={{
                ...(isFadeInArray[4] && {
                  opacity: 1,
                  transform: 'translateY(0)',
                }),
              }}
            >
              <Copy />
            </Box>
          </Center>
        </Center>
      ) : (
        <Center flexDir={'column'} gap={'16px'} minH={'100vh'} pt={'48px'}>
          <Center alignItems={'center'} gap={'32px'} w={'fit-content'}>
            <Box pos={'relative'}>
              <Box
                textStyle={'transition'}
                sx={{
                  pos: 'absolute',
                  inset: '-96px auto auto auto',
                  ...(isFadeInArray[3] && {
                    opacity: 1,
                    transform: 'translateY(0)',
                  }),
                }}
              >
                <Blob />
              </Box>
              <Box
                textStyle={'transition'}
                sx={{
                  ...(isFadeInArray[0] && {
                    opacity: 1,
                    transform: 'translateY(0)',
                  }),
                }}
              >
                <Icon />
              </Box>
            </Box>
            <Flex flexDir={'column'} gap={'32px'}>
              <Box
                textStyle={'transition'}
                sx={{
                  ...(isFadeInArray[1] && {
                    opacity: 1,
                    transform: 'translateY(0)',
                  }),
                }}
              >
                <Description />
                <Name />
              </Box>
              <Flex
                gap={'20px'}
                textStyle={'transition'}
                sx={{
                  ...(isFadeInArray[2] && {
                    opacity: 1,
                    transform: 'translateY(0)',
                  }),
                }}
              >
                <Links contents={LINK[LINK_WEB]} />
                <Links contents={LINK[LINK_PHOTO]} />
              </Flex>
            </Flex>
          </Center>
          <Box
            textStyle={'transition'}
            sx={{
              ...(isFadeInArray[4] && {
                opacity: 1,
                transform: 'translateY(0)',
              }),
            }}
          >
            <Copy />
          </Box>
        </Center>
      )}
    </>
  );
};

export default Home;
