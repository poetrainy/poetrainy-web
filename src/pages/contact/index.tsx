import { FC } from 'react';
import Script from 'next/script';
import { Box } from '@chakra-ui/react';

import HeadOgp from '@/components/HeadOgp';

const Contact: FC = () => {
  return (
    <>
      <HeadOgp
        data={{
          title: 'Contact',
          url: 'contact',
          description: 'poetrainy/月波のお問い合わせフォームです。',
        }}
      />
      <Box as={'main'}>
        <Script src={'https://sdk.form.run/js/v2/embed.js'} />
        <Box
          className="formrun-embed"
          data-formrun-form="@poetrainy"
          data-formrun-redirect="true"
        />
      </Box>
    </>
  );
};

export default Contact;
