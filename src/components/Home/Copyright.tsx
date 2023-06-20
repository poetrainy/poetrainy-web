import { FC } from 'react';
import { Box, Text } from '@chakra-ui/react';

import { NAME } from '@/constants/common';

const Copyright: FC = () => (
  <Box as={'footer'} mt={'24px'}>
    <Text as={'small'} fontFamily={'sp'} fontSize={'1.6rem'}>
      &copy; 2023 {NAME}
    </Text>
  </Box>
);

export default Copyright;
