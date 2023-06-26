import { FC, useState } from 'react';
import { NextPage } from 'next';
import { motion } from 'framer-motion';
import { Box, Center, Flex, Text, keyframes } from '@chakra-ui/react';
import NextLink from 'next/link';

import Copyright from '@/components/Copyright';
import Blob from '@/components/Home/Blob';
import Icon from '@/components/Home/Icon';
import Description from '@/components/Home/Description';

import { NAME } from '@/constants/common';
import { LINKS, LINK_PHOTO, LINK_WEB } from '@/constants/link';

import { LinksHeadlineType, LinksType } from '@/types/link';

import { useWindowSize } from '@/hooks/useWindowSize';
import { useFadeIn } from '@/hooks/useFadeIn';
import OriginalSpacer from '@/components/OriginalSpacer';

const animationKeyframes = keyframes`
  0% { transform: translateY(0); }
  10% { transform: translateY(3px); }
  20% { transform: translateY(0px); }
  30% { transform: translateY(3px); }
  40% { transform: translateY(0); }
  100% { transform: translateY(0); }
`;

const animation = `${animationKeyframes} 2.5s 2.8s ease-in-out infinite`;

const Home: NextPage = () => {
  const { isMD } = useWindowSize();
  const [isClick, setIsClick] = useState<boolean>(false);
  const fadeIn = useFadeIn(5, 300);

  const getClickEvent = () => {
    setIsClick(true);
  };

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

  return (
    <>
      {isMD ? (
        <Center as={'main'} minH={'105vh'} p={'40px 0'}>
          <Center flexDir={'column'} gap={'12px'} w={'fit-content'} m={'auto'}>
            <Box
              as={motion.div}
              animation={animation}
              textStyle={'transition'}
              sx={{
                pos: 'relative',
                ...(fadeIn[3] && {
                  opacity: 1,
                  transform: 'translateY(0)',
                }),
                ...(isClick && {
                  opacity: 0,
                }),
              }}
            >
              <Blob />
            </Box>
            <Box
              textStyle={'transition'}
              sx={{
                ...(fadeIn[1] && {
                  opacity: 1,
                  transform: 'translateY(0)',
                }),
                ...(isClick && {
                  opacity: 0,
                }),
              }}
            >
              <Links contents={LINKS[LINK_WEB]} />
            </Box>
            <Box
              textStyle={'transition'}
              sx={{
                ...(fadeIn[0] && {
                  opacity: 1,
                  transform: 'translateY(0)',
                }),
              }}
            >
              <Icon isClick={isClick} onClick={getClickEvent} />
            </Box>
            <Box
              textStyle={'transition'}
              sx={{
                ...(fadeIn[2] && {
                  opacity: 1,
                  transform: 'translateY(0)',
                }),
                ...(isClick && {
                  opacity: 0,
                }),
              }}
            >
              <Links contents={LINKS[LINK_PHOTO]} />
            </Box>
            <Flex
              flexDir={'column'}
              alignItems={'center'}
              gap={'12px'}
              textStyle={'transition'}
              sx={{
                ...(fadeIn[3] && {
                  opacity: 1,
                  transform: 'translateY(0)',
                }),
                ...(isClick && {
                  opacity: 0,
                }),
              }}
            >
              <Name />
              <Description />
            </Flex>
            <OriginalSpacer size={'2px'} />
            <Box
              textStyle={'transition'}
              sx={{
                ...(fadeIn[4] && {
                  opacity: 1,
                  transform: 'translateY(0)',
                }),
                ...(isClick && {
                  opacity: 0,
                }),
              }}
            >
              <Copyright />
            </Box>
          </Center>
        </Center>
      ) : (
        <Center
          as={'main'}
          flexDir={'column'}
          gap={'16px'}
          minH={'100vh'}
          pt={'48px'}
        >
          <Center alignItems={'center'} gap={'32px'} w={'fit-content'}>
            <Box pos={'relative'}>
              <Box
                as={motion.div}
                animation={animation}
                textStyle={'transition'}
                sx={{
                  pos: 'absolute',
                  inset: '-96px auto auto auto',
                  ...(fadeIn[3] && {
                    opacity: 1,
                    transform: 'translateY(0)',
                  }),
                  ...(isClick && {
                    opacity: 0,
                  }),
                }}
              >
                <Blob />
              </Box>
              <Box
                textStyle={'transition'}
                sx={{
                  ...(fadeIn[0] && {
                    opacity: 1,
                    transform: 'translateY(0)',
                  }),
                }}
              >
                <Icon isClick={isClick} onClick={getClickEvent} />
              </Box>
            </Box>
            <Flex flexDir={'column'} gap={'32px'}>
              <Box
                textStyle={'transition'}
                sx={{
                  ...(fadeIn[1] && {
                    opacity: 1,
                    transform: 'translateY(0)',
                  }),
                  ...(isClick && {
                    opacity: 0,
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
                  ...(fadeIn[2] && {
                    opacity: 1,
                    transform: 'translateY(0)',
                  }),
                  ...(isClick && {
                    opacity: 0,
                  }),
                }}
              >
                <Links contents={LINKS[LINK_WEB]} />
                <Links contents={LINKS[LINK_PHOTO]} />
              </Flex>
            </Flex>
          </Center>
          <Box
            textStyle={'transition'}
            sx={{
              ...(fadeIn[4] && {
                opacity: 1,
                transform: 'translateY(0)',
              }),
              ...(isClick && {
                opacity: 0,
              }),
            }}
          >
            <Copyright />
          </Box>
        </Center>
      )}
    </>
  );
};

export default Home;
