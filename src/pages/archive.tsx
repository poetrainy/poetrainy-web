import { TouchEvent, useState } from 'react';
import type { NextPage } from 'next';
import { Box, Center, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { client } from '@/libs/client';

import HeadOgp from '@/components/HeadOgp';
import Header from '@/components/Header';
import Copyright from '@/components/Copyright';
import Button from '@/components/ButtonSmall';
import OriginalSpacer from '@/components/OriginalSpacer';
import Vtuber from '@/components/Vtuber';

import {
  MICROCMS_DESIGN_TYPE_MAIN,
  MICROCMS_DESIGN_TYPE_VTUBER,
} from '@/constants/microCMS';

import { MicroCMSDesignType, MicroCMSWebType } from '@/types/microCMS';

import { useFadeIn } from '@/hooks/useFadeIn';
import { useWindowSize } from '@/hooks/useWindowSize';
import { SKILLS, SKILL_MAIN } from '@/constants/skill';
import { SkillsContentsType } from '@/types/skill';

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
  const router = useRouter();
  const { isSM, isMD } = useWindowSize();
  const fadeIn = useFadeIn(microCMSDesignData.length, 70);
  const [webCount, setWebCount] = useState<number>(0);
  const [webTouchLocation, setWebTouchLocation] = useState({
    start: 0,
    end: 0,
  });
  const [isWebModal, setIsWebModal] = useState<boolean>(false);

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

  const webModalDisplay = (index?: number) => {
    if (index && isSM) return;
    if (index) setWebCount(index);
    setIsWebModal(!isWebModal);
  };

  const webVisitSite = (url: string) => {
    window.open(url, '_blank');
  };

  const contactTransition = () => {
    router.push('/contact');
  };

  return (
    <>
      <HeadOgp
        data={{
          title: 'Archive',
          url: 'archive',
          description: '過去の制作物をまとめています。',
        }}
      />
      <Box as={'main'}>
        <Header />
        {/* 
        DesignのGrid
      */}
        <Grid
          as={'ul'}
          templateAreas={{
            base: `"tsukinami tsukinami tsukinami wd3"
                "tsukinami tsukinami tsukinami requested-namecard"
                "seijun osaketate osaketate requested-namecard"
                "seijun utakata utakata utakata"
                "web-study utakata utakata utakata"
                "jishatecho jishatecho yoshio yoshio"`,
            md: `"tsukinami tsukinami seijun wd3"
                "tsukinami tsukinami seijun yoshio"
                "tsukinami tsukinami requested-namecard yoshio"
                "osaketate utakata requested-namecard yoshio"
                "osaketate utakata web-study web-study"
                "jishatecho utakata web-study web-study"`,
            lg: `"tsukinami tsukinami seijun web-study web-study"
                "tsukinami tsukinami seijun yoshio utakata"
                "tsukinami tsukinami wd3 yoshio utakata"
                "jishatecho requested-namecard requested-namecard yoshio utakata"
                "jishatecho requested-namecard requested-namecard osaketate utakata"`,
          }}
          gridTemplateColumns={{
            base: '40vw 20vw 5vw 35vw',
            md: '25vw 30vw 20vw 25vw',
            lg: '25vw 20vw 16vw 14vw 25vw',
          }}
          gridTemplateRows={{
            base: '35vw calc(35vw / 2) 25vw 30vw 50vw 55vw',
            md: 'calc(25vw / 3 * 2) calc(25vw / 3 * 4 / 3) calc(25vw / 3 * 4 / 3) calc(25vw / 3 * 4 / 3) calc(25vw / 3 * 4 / 3) calc(25vw / 3 * 4 / 2)',
            lg: '20vw 2vw 12vw 7vw 14vw',
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
                textStyle={'imageCover'}
              />
            </GridItem>
          ))}
        </Grid>
        {/* 
        Webのモックアップ
      */}
        <Box
          w={'100vw'}
          minH={{ base: '100vh', md: '90vh' }}
          m={'auto'}
          p={{ base: '64px 0', md: 0 }}
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
            {microCMSWebData.map((item: MicroCMSWebType, i: number) => (
              <Flex
                as={'li'}
                key={item.id}
                flexDir={'column'}
                gap={'24px'}
                w={{ base: '60vw', sm: '20vw' }}
                maxW={{ sm: '240px' }}
                minW={{ sm: '200px' }}
                opacity={1}
                transition={'opacity 0.2s'}
                sx={{
                  ...(!isSM && {
                    '&:hover': {
                      opacity: 0.6,
                    },
                  }),
                }}
                onClick={() => webModalDisplay(i)}
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
          {isSM && (
            <Flex
              justifyContent={'space-between'}
              h={'40px'}
              m={'16px 0 0'}
              p={'0 20vw'}
            >
              <Button text={'View'} onClick={webModalDisplay} />
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
        </Box>
        {/* 
        Skill
      */}
        {/* <Center as={'ul'} gap={'2.5%'} flexWrap={'wrap'} w={'70vw'} m={'auto'}>
        {SKILLS[SKILL_MAIN].map((item: SkillsContentsType, i: number) => (
          <Center
            as={'li'}
            key={item.icon}
            w={'18%'}
            pt={'18%'}
            pos={'relative'}
            borderRadius={'9999px'}
          >
            <Center
              w={'75%'}
              h={'75%'}
              pos={'absolute'}
              m={'auto'}
              inset={0}
              boxShadow={'0 0 10px #00000030'}
              borderRadius={'9999px'}
            >
              <Box
                as={'img'}
                src={`/img/${item.icon}.svg`}
                w={'40%'}
                h={'40%'}
                objectFit={'contain'}
              />
            </Center>
          </Center>
        ))}
      </Center> */}
        {/* 
        VtuberのGrid
      */}
        <Vtuber data={microCMSVtuberData} />
        <OriginalSpacer size={'15vh'} />
        {/* 
        Contact
      */}
        <>
          <Text
            w={'fit-content'}
            m={{ base: '0 auto 16px', md: '0 auto 24px' }}
          >
            お問い合わせいただけると幸いです！
          </Text>
          <Box w={'80%'} m={'auto'}>
            <Button
              text={'Contact to me'}
              onClick={contactTransition}
              isLarge
            />
          </Box>
        </>
        {/* 
        Copyright
      */}
        <OriginalSpacer size={'15vh'} />
        <Copyright />
        <OriginalSpacer size={isSM ? '56px' : '120px'} />
        {/* 
        Modal
      */}
        <Flex
          flexDir={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          w={{ base: '92vw', md: '70vw' }}
          h={{ base: '74vh', md: '90vh' }}
          maxW={'880px'}
          maxH={'640px'}
          bg={'white'}
          m={'auto'}
          p={{ base: '5vw', md: '40px' }}
          boxShadow={'0 0 10px #00000030'}
          pos={'fixed'}
          inset={0}
          opacity={0}
          pointerEvents={'none'}
          transition={'opacity 0.1s'}
          textStyle={'zIndexModal'}
          sx={{
            ...(isWebModal && {
              opacity: 1,
              pointerEvents: 'auto',
            }),
          }}
        >
          <Box
            as={'ul'}
            w={'100%'}
            h={{
              base: 'calc(100% - 5vw - 40px)',
              md: '80%',
            }}
            pos={'relative'}
            overflow={{ base: 'scroll', md: 'visible' }}
            pt={{ base: '8px', md: '0' }}
          >
            {microCMSWebData.map((item, i) => (
              <Center
                key={item.id + 'modal'}
                flexDir={{ base: 'column', md: 'row' }}
                gap={{ base: '20px', md: '5%' }}
                as={'li'}
                h={'100%'}
                opacity={0}
                transition={'opacity 0.2s'}
                pos={'absolute'}
                sx={{
                  ...(i === webCount && {
                    opacity: 1,
                  }),
                }}
              >
                <Box
                  w={{ md: '40%' }}
                  h={{ base: '40vh', md: '100%' }}
                  zIndex={1}
                  pos={'relative'}
                >
                  <Box
                    as={'img'}
                    src={item.image.url}
                    alt={item.title}
                    pos={{ md: 'absolute' }}
                    inset={0}
                    m={'auto'}
                    textStyle={'imageContain'}
                  />
                </Box>
                <Box w={{ md: '55%' }} h={'100%'} pt={{ md: '40px' }}>
                  <Text
                    color={'black600'}
                    fontSize={{ base: '1.2rem', md: '1.3rem' }}
                  >
                    {item.copy}
                  </Text>
                  <OriginalSpacer size={'2px'} />
                  <Text
                    fontWeight={'bold'}
                    fontSize={{ base: '2rem', md: '2.5rem' }}
                  >
                    {item.title}
                  </Text>
                  <OriginalSpacer size={'12px'} />
                  <Text
                    h={'calc(1.8rem * 4)'}
                    fontSize={{ base: '1.2rem', md: '1.3rem' }}
                    lineHeight={{ md: '2.2rem' }}
                  >
                    {item.description}
                  </Text>
                </Box>
              </Center>
            ))}
          </Box>
          {isMD && <OriginalSpacer size={'20px'} />}
          <Box
            w={{ base: '100%', md: 'calc((100% - ( 40px * 2 )) * 0.55)' }}
            p={{ base: '0 11vw', md: '0' }}
            pos={{ base: 'static', md: 'absolute' }}
            inset={{ base: 'auto', md: 'auto 40px calc(40px + 10%) auto' }}
          >
            <Button
              text={'Go site'}
              isLarge
              onClick={() => webVisitSite(microCMSWebData[webCount].url)}
            />
          </Box>
          <Center
            as={'button'}
            onClick={() => webModalDisplay()}
            onTouchStart={() => webModalDisplay()}
            w={'40px'}
            h={'40px'}
            pos={'absolute'}
            inset={'calc(5vw + 8px) 5vw auto auto'}
            opacity={1}
            transition={'opacity 0.2s'}
            zIndex={1}
            _hover={{
              opacity: 0.6,
            }}
            sx={{
              '&::before': {
                content: '""',
                display: 'block',
                w: '1px',
                h: '50px',
                bg: 'black600',
                transform: 'rotateZ(45deg)',
              },
              '&::after': {
                content: '""',
                display: 'block',
                w: '1px',
                h: '50px',
                bg: 'black600',
                transform: 'rotateZ(-45deg)',
              },
            }}
          />
        </Flex>
        <Box
          onClick={() => webModalDisplay()}
          onTouchStart={() => webModalDisplay()}
          bg={'#0000008c'}
          pos={'fixed'}
          inset={0}
          opacity={0}
          pointerEvents={'none'}
          transition={'opacity 0.1s'}
          sx={{
            ...(isWebModal && {
              opacity: 1,
              pointerEvents: 'auto',
            }),
          }}
        />
      </Box>
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
