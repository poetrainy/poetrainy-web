import { TouchEvent, useState } from 'react';
import type { NextPage } from 'next';
import { Box, Center, Flex, Grid, GridItem, Text } from '@chakra-ui/react';

import { client } from '@/libs/client';

import Header from '@/components/Header';
import Copyright from '@/components/Copyright';
import Button from '@/components/Button';
import OriginalSpacer from '@/components/OriginalSpacer';

import {
  MICROCMS_DESIGN_TYPE_MAIN,
  MICROCMS_DESIGN_TYPE_VTUBER,
} from '@/constants/microCMS';

import { MicroCMSDesignType, MicroCMSWebType } from '@/types/microCMS';

import { useFadeIn } from '@/hooks/useFadeIn';
import { useWindowSize } from '@/hooks/useWindowSize';

type Props = {
  microCMSWebData: MicroCMSWebType[];
  microCMSDesignData: MicroCMSDesignType[];
  microCMSVtuberData: MicroCMSDesignType[];
};

const Archive: NextPage<Props> = ({
  microCMSWebData,
  microCMSDesignData,
  microCMSVtuberData,
}) => {
  const { isSM } = useWindowSize();
  const fadeIn = useFadeIn(microCMSDesignData.length, 70);
  const [webCount, setWebCount] = useState<number>(0);
  const [webTouchLocation, setWebTouchLocation] = useState({
    start: 0,
    end: 0,
  });

  const webTouchFunc = (e: TouchEvent<HTMLDivElement>, isStart?: boolean) => {
    if (!isSM) return;

    const touchObject = e.changedTouches[0];
    const keepWebTouchLocation: number = touchObject.pageX;

    // touchStartのとき
    if (isStart)
      return setWebTouchLocation((prevWebTouchLocation) => {
        return { ...prevWebTouchLocation, start: keepWebTouchLocation };
      });

    // touchEndのとき
    setWebTouchLocation((prevWebTouchLocation) => {
      return { ...prevWebTouchLocation, end: keepWebTouchLocation };
    });
    if (webTouchLocation.start - keepWebTouchLocation > 20) {
      if (webCount === microCMSWebData.length - 1) return;
      setWebCount(webCount + 1);
    }
    if (webTouchLocation.start - keepWebTouchLocation < -20) {
      if (webCount === 0) return;
      setWebCount(webCount - 1);
    }
  };

  const webPagerClick = (i: number) => {
    setWebCount(i);
  };

  const Vtuber: () => JSX.Element = () => (
    <Center
      as={'ul'}
      flexWrap={'wrap'}
      gap={{ base: '1vw', sm: '2%' }}
      w={{ base: '100vw', sm: '65vw' }}
      h={{ base: 'calc(100vw - 6vw)', sm: '65vw' }}
      m={'auto'}
      p={{ base: '0 2vw', sm: 0 }}
    >
      {microCMSVtuberData.map((item: MicroCMSDesignType) => (
        <Box
          as={'li'}
          key={item.id}
          w={{ base: 'calc((100vw - 1vw * 2 - 2vw * 2 ) / 3)', sm: '32%' }}
        >
          <Box
            as={'img'}
            src={isSM ? `${item.image.url}?w=500` : `${item.image.url}?w=800`}
            alt={item.alt}
            textStyle={'image'}
          />
        </Box>
      ))}
    </Center>
  );

  const modalOpen = () => {
    console.log(webCount);
  };

  return (
    <>
      <Header />
      <Grid
        as={'ul'}
        templateAreas={{
          base: `"tsukinami tsukinami tsukinami wd3"
                "tsukinami tsukinami tsukinami requested-namecard"
                "seijun osaketate osaketate requested-namecard"
                "seijun utakata utakata utakata"
                "web-study utakata utakata utakata"
                "jishatecho jishatecho yoshio yoshio"`,
          sm: `"tsukinami tsukinami seijun wd3"
                "tsukinami tsukinami seijun yoshio"
                "tsukinami tsukinami requested-namecard yoshio"
                "osaketate utakata requested-namecard yoshio"
                "osaketate utakata web-study web-study"
                "jishatecho utakata web-study web-study"`,
        }}
        gridTemplateColumns={{
          base: '40vw 20vw 5vw 35vw',
          sm: '25vw 30vw 20vw 25vw',
        }}
        gridTemplateRows={{
          base: '35vw calc(35vw / 2) 25vw 30vw 50vw 55vw',
          sm: 'calc(25vw / 3 * 2) calc(25vw / 3 * 4 / 3) calc(25vw / 3 * 4 / 3) calc(25vw / 3 * 4 / 3) calc(25vw / 3 * 4 / 3) calc(25vw / 3 * 4 / 2)',
        }}
      >
        {microCMSDesignData.map((item: MicroCMSDesignType, i: number) => (
          <GridItem
            as={'li'}
            key={item.id}
            area={item.id}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            pos={'relative'}
            textStyle={'transitionDesign'}
            sx={{
              ...(fadeIn[i] && {
                opacity: 1,
                transform: 'scale(100%)',
              }),
            }}
          >
            <Box
              display={'block'}
              w={'100%'}
              h={'100%'}
              pos={'absolute'}
              inset={0}
              boxShadow={'inset 12px 12px 16px rgb(0 0 0 / 10%)'}
              zIndex={'1'}
              pointerEvents={'none'}
            />
            <Box
              as={'img'}
              src={
                isSM ? `${item.image.url}?w=800` : `${item.image.url}?w=1000`
              }
              alt={item.alt}
              textStyle={'image'}
            />
          </GridItem>
        ))}
      </Grid>
      {isSM && <OriginalSpacer size={'8vh'} />}
      <>
        <Box
          w={'100vw'}
          overflow={'hidden'}
          onTouchStart={(e) => webTouchFunc(e, true)}
          onTouchEnd={(e) => webTouchFunc(e)}
        >
          <Flex
            as={'ul'}
            gap={{ base: '15vw', sm: '48px' }}
            alignItems={'center'}
            w={'fit-content'}
            h={{ md: '120vh' }}
            maxH={{ md: '880px' }}
            m={{ sm: 'auto' }}
            p={{ sm: '0 64px' }}
            transform={{
              base: `translateX(calc(20vw - 75vw * ${webCount}))`,
              sm: 'none',
            }}
            transition={'transform 0.3s'}
          >
            {microCMSWebData.map((item, i) => (
              <Flex
                as={'li'}
                key={item.id}
                flexDir={'column'}
                gap={'24px'}
                w={{ base: '60vw', sm: '20vw' }}
                maxW={{ sm: '240px' }}
                minW={{ sm: '200px' }}
              >
                <Box as={'img'} src={item.image.url} alt={item.title} />
                <Box>
                  <Text color={'black600'} fontSize={'1.2rem'}>
                    {item.copy}
                  </Text>
                  <OriginalSpacer size={'2px'} />
                  <Flex
                    alignItems={'flex-start'}
                    h={'64px'}
                    fontWeight={'bold'}
                    fontSize={'2.2rem'}
                    letterSpacing={0.1}
                  >
                    {item.title}
                  </Flex>
                </Box>
              </Flex>
            ))}
          </Flex>
        </Box>
        {isSM && (
          <Flex
            justifyContent={'space-between'}
            h={'40px'}
            m={'16px 0 8vh'}
            p={'0 20vw'}
          >
            <Button text={'View'} onClick={modalOpen} />
            <Flex as={'ul'} gap={'8px'} justifyContent={'flex-end'}>
              {microCMSWebData.map((item, i) => (
                <Box as={'li'} key={item.id + 'web'}>
                  <Box
                    as={'button'}
                    w={'4px'}
                    h={'40px'}
                    bg={'black300'}
                    transition={'background 0.2s'}
                    _hover={{
                      cursor: 'pointer',
                    }}
                    sx={{
                      ...(i === webCount && {
                        bg: 'green',
                      }),
                    }}
                    onClick={() => webPagerClick(i)}
                  />
                </Box>
              ))}
            </Flex>
          </Flex>
        )}
      </>
      <Vtuber />
      <OriginalSpacer size={isSM ? '24px' : '48px'} />
      <Copyright />
      <OriginalSpacer size={isSM ? '56px' : '120px'} />
      <Flex
        flexDir={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        w={'calc(100vw - 10vw)'}
        h={'calc(100vh - 30vw)'}
        bg={'white'}
        m={'auto'}
        p={'5vw'}
        boxShadow={'0 0 10px #00000030'}
        pos={'fixed'}
        inset={0}
        zIndex={1}
        sx={{
          '&::before': {
            content: '""',
            display: 'block',
            w: '100vw',
            h: '100vh',
            bg: '#0000008c',
            pos: 'absolute',
            inset: '-15vw auto auto -5vw',
            zIndex: -1,
          },
          '&::after': {
            content: '""',
            display: 'block',
            w: '100%',
            h: '100%',
            bg: 'white',
            pos: 'absolute',
            inset: 0,
            zIndex: -1,
            pointerEvents: 'none',
          },
        }}
      >
        <Box
          as={'ul'}
          w={'100%'}
          h={'80%'}
          pos={'relative'}
        >
          {microCMSWebData.map((item, i) => (
            <Center
              flexDir={'column'}
              as={'li'}
              key={item.id + 'modal'}
              opacity={0}
              transition={'opacity 0.2s'}
              pos={'absolute'}
              sx={{
                ...(i === webCount && {
                  opacity: 1,
                }),
              }}
            >
              <Box h={'45vh'} zIndex={1}>
                <Box
                  as={'img'}
                  src={item.image.url}
                  alt={item.title}
                  w={'100%'}
                  h={'100%'}
                  objectFit={'contain'}
                />
              </Box>
              <OriginalSpacer size={'20px'} />
              <Text color={'black600'} fontSize={'1.2rem'}>
                {item.copy}
              </Text>
              <Text fontWeight={'bold'} fontSize={'2rem'}>
                {item.title}
              </Text>
              <OriginalSpacer size={'8px'} />
              <Text h={'calc(1.8rem * 4)'} fontSize={'1.2rem'}>
                {item.description}
              </Text>
            </Center>
          ))}
        </Box>
        <OriginalSpacer size={'20px'} />
        <Flex
          justifyContent={'space-between'}
          w={'100%'}
          h={'40px'}
          p={'0 10vw'}
        >
          <Button text={'Go site'} onClick={modalOpen} />
          <Flex as={'ul'} gap={'8px'} justifyContent={'flex-end'}>
            {microCMSWebData.map((item, i) => (
              <Box as={'li'} key={item.title}>
                <Box
                  as={'button'}
                  w={'4px'}
                  h={'40px'}
                  bg={'black300'}
                  transition={'background 0.2s'}
                  _hover={{
                    cursor: 'pointer',
                  }}
                  sx={{
                    ...(i === webCount && {
                      bg: 'green',
                    }),
                  }}
                  onClick={() => webPagerClick(i)}
                />
              </Box>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Archive;

export const getStaticProps = async () => {
  const microCMSWebResult = await client.get({
    endpoint: 'web',
    queries: {
      offset: 0,
      limit: 100,
    },
  });
  const microCMSDesignResult = await client.get({
    endpoint: 'design',
    queries: {
      offset: 0,
      limit: 100,
    },
  });

  const designData = microCMSDesignResult.contents.filter(
    (item: MicroCMSDesignType) => item.type[0] === MICROCMS_DESIGN_TYPE_MAIN
  );

  const vtuberData = microCMSDesignResult.contents
    .filter(
      (item: MicroCMSDesignType) => item.type[0] === MICROCMS_DESIGN_TYPE_VTUBER
    )
    .reverse();

  return {
    props: {
      microCMSWebData: microCMSWebResult.contents.reverse(),
      microCMSDesignData: designData,
      microCMSVtuberData: vtuberData,
    },
  };
};
