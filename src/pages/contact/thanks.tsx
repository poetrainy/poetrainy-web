import { FC } from 'react';
import Script from 'next/script';

import { Box } from '@chakra-ui/react';

const ContactThanks: FC = () => {
  return (
    <Box as={'main'} sx={{ '>.sf-form-cover': { display: 'none' } }}>
      お問い合わせ完了
    </Box>
  );
};

export default ContactThanks;
