import { FC } from 'react';
import { Flex } from '@chakra-ui/react';

type Props = {
  text: string;
  isLarge?: boolean;
  onClick: () => void;
};

const ButtonSmall: FC<Props> = ({ text, isLarge, onClick }) => (
  <Flex
    as={'button'}
    onClick={() => onClick()}
    alignItems={'center'}
    w={isLarge ? '100%' : '104px'}
    h={isLarge ? '72px' : '40px'}
    color={'white'}
    bg={'green'}
    fontFamily={'sp'}
    p={isLarge ? '3px 0 0' : '3px 0 0 12px'}
    transition={'opacity 0.2s'}
    pos={'relative'}
    opacity={1}
    _hover={{
      opacity: 0.7,
    }}
    sx={{
      ...(isLarge
        ? {
            pl: '5%',
            maxW: '600px',
            m: 'auto',
            fontSize: '2rem',
            '&::before': {
              content: '""',
              display: 'block',
              w: '80px',
              h: '24px',
              bg: 'url("/img/bunner-arrow.svg") no-repeat',
              bgSize: 'contain',
              bgPosition: 'center',
              opacity: 0.7,
              pos: 'absolute',
              inset: 'auto 10% auto auto',
            },
          }
        : {
            fontSize: '1.6rem',
          }),
    }}
  >
    {text}
  </Flex>
);

export default ButtonSmall;
