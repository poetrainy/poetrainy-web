import type { NextPage } from 'next';
import { Box, Center, Grid, GridItem } from '@chakra-ui/react';

import { client } from '@/libs/client';

import {
  MICROCMS_DESIGN_TYPE_MAIN,
  MICROCMS_DESIGN_TYPE_VTUBER,
} from '@/constants/microCMS';
import { MicroCMSDesignType, MicroCMSWebType } from '@/types/microCMS';

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
  const Design: () => JSX.Element = () => (
    <Grid
      as={'ul'}
      templateAreas={`"tsukinami tsukinami seijun wd3"
                      "tsukinami tsukinami seijun yoshio"
                      "tsukinami tsukinami requested-namecard yoshio"
                      "osaketate utakata requested-namecard yoshio"
                      "osaketate utakata web-study web-study"
                      "jishatecho utakata web-study web-study"`}
      gridTemplateColumns={'25vw 30vw 20vw 25vw'}
      gridTemplateRows={
        'calc(25vw / 3 * 2) calc(25vw / 3 * 4 / 3) calc(25vw / 3 * 4 / 3) calc(25vw / 3 * 4 / 3) calc(25vw / 3 * 4 / 3) calc(25vw / 3 * 4 / 2)'
      }
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
            src={`${item.image.url}?w=1000`}
            alt={item.alt}
            textStyle={'image'}
          />
        </GridItem>
      ))}
    </Grid>
  );

  const Vtuber: () => JSX.Element = () => (
    <Center
      as={'ul'}
      flexWrap={'wrap'}
      gap={'2%'}
      w={'65vw'}
      h={'65vw'}
      m={'auto'}
    >
      {microCMSVtuberData.map((item: MicroCMSDesignType) => (
        <Box as={'li'} key={item.id} w={'32%'}>
          <Box
            as={'img'}
            src={`${item.image.url}?w=800`}
            alt={item.alt}
            textStyle={'image'}
          />
        </Box>
      ))}
    </Center>
  );

  return (
    <>
      <>
        <Design />
        <Vtuber />
      </>
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

  console.log(vtuberData);

  return {
    props: {
      microCMSWebData: microCMSWebResult.contents,
      microCMSDesignData: designData,
      microCMSVtuberData: vtuberData,
    },
  };
};
