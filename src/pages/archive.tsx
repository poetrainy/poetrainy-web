import type { NextPage } from 'next';
import { Box, Center, Flex, Grid, GridItem, Text } from '@chakra-ui/react';

import { client } from '@/libs/client';

import {
  MICROCMS_DESIGN_TYPE_MAIN,
  MICROCMS_DESIGN_TYPE_VTUBER,
} from '@/constants/microCMS';
import { NAME } from '@/constants/common';

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

  const Header: () => JSX.Element = () => (
    <Flex as={'header'}>
      <Box w={'64px'} h={'64px'} borderRadius={'9999px'} overflow={'hidden'}>
        <Box as={'img'} src={'/img/icon.jpg'} textStyle={'image'} />
      </Box>
      <Text as={'h1'}>{NAME}</Text>
    </Flex>
  );

  const Vtuber: () => JSX.Element = () => (
    <Center
      as={'ul'}
      flexWrap={'wrap'}
      gap={{ base: '2vw', sm: '2%' }}
      w={{ base: '100vw', sm: '65vw' }}
      h={{ base: 'calc(100vw - 8vw)', sm: '65vw' }}
      m={'auto'}
      p={{ base: '0 4vw' }}
    >
      {microCMSVtuberData.map((item: MicroCMSDesignType) => (
        <Box
          as={'li'}
          key={item.id}
          w={{ base: 'calc((100vw - 2vw * 2 - 4vw * 2 ) / 3)', sm: '32%' }}
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

  return (
    <>
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
      <Box w={'100vw'} overflow={'hidden'}>
        <Flex
          as={'ul'}
          gap={'0 10vw'}
          alignItems={'center'}
          w={'fit-content'}
          h={'80vh'}
          p={'0 5vw'}
        >
          {microCMSWebData.map((item, i) => (
            <Box as={'li'} key={item.id} w={'60vw'}>
              <Box as={'img'} src={item.image.url} alt={item.title} />
            </Box>
          ))}
        </Flex>
      </Box>
      <Vtuber />
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
