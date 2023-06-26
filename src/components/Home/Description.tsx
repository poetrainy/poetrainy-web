import { FC } from 'react';
import { Flex, Text } from '@chakra-ui/react';

import { TITLE_LIST } from '@/constants/common';

import { TitleListType } from '@/types/common';

const Description: FC = () => (
  <Flex gap={'6px'}>
    {TITLE_LIST.map((item: TitleListType, i: number) => (
      <>
        <Text
          key={item.title + item.color}
          color={'white'}
          bg={item.color}
          p={'2px 4px 0 4px'}
          fontSize={'1.5rem'}
          fontFamily={'sp'}
          fontWeight={'bold'}
          letterSpacing={'-0.3px'}
        >
          {item.title}
        </Text>
        {i === 0 && (
          <Text as={'span'} pt={'2px'}>
            /
          </Text>
        )}
      </>
    ))}
  </Flex>
);

export default Description;
