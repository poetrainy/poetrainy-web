import { FC } from 'react';
import { Flex, Text } from '@chakra-ui/react';

import { NAME } from '@/constants/common';

const Copyright: FC = () => (
  <Flex justifyContent={'center'} as={'footer'} mt={'24px'}>
    <Text as={'small'} fontFamily={'sp'} fontSize={'1.5rem'}>
      &copy; 2023 {NAME}
    </Text>
  </Flex>
);

export default Copyright;
