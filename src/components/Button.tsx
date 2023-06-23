import { FC } from 'react';
import { Flex } from '@chakra-ui/react';

type Props = {
  text: string;
  isLangJp?: boolean;
  onClick: () => void;
};

const Button: FC<Props> = ({ text, isLangJp, onClick }) => (
  <Flex
    as={'button'}
    onClick={() => onClick()}
    alignItems={'center'}
    w={'104px'}
    h={'40px'}
    color={'white'}
    bg={'green'}
    fontFamily={'sp'}
    p={'3px 0 0 12px'}
    transition={'opacity 0.2s'}
    opacity={1}
    _hover={{
      opacity: 0.7,
    }}
    sx={{
      ...(isLangJp
        ? {}
        : {
            fontSize: '1.8rem',
          }),
    }}
  >
    {text}
  </Flex>
);

export default Button;
