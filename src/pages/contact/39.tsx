import { FC } from 'react';
import { useRouter } from 'next/router';
import { Box, Text } from '@chakra-ui/react';

import Header from '@/components/Header';
import OriginalSpacer from '@/components/OriginalSpacer';
import Copyright from '@/components/Copyright';
import ButtonSmall from '@/components/ButtonSmall';
import HeadOgp from '@/components/HeadOgp';

const Contact39: FC = () => {
  const router = useRouter();

  const modalOpen = () => {
    router.push('/archive');
  };

  return (
    <>
      <HeadOgp
        data={{
          title: 'Thank you!',
          url: 'contact/39',
          description: 'お問い合わせが完了しました。',
        }}
      />
      <Box as={'main'}>
        <Header />
        <OriginalSpacer size={`${144 + 40}px`} />
        <Box w={'80vw'} maxW={'1000px'} m={'auto'}>
          <Text as={'h2'} fontSize={'1.8rem'}>
            お問い合わせ完了
          </Text>
          <OriginalSpacer size={'12px'} />
          <Text lineHeight={'2.3rem'}>
            この度はportrainy/月波にお問い合わせをいただきありがとうございます。
            <br />
            折り返しご連絡差し上げますまで暫くお待ちください。
          </Text>
          <OriginalSpacer size={'24px'} />
          <ButtonSmall text={'戻る'} onClick={modalOpen} />
        </Box>
        <OriginalSpacer size={'40px'} />
        <Copyright />
      </Box>
    </>
  );
};

export default Contact39;
