import { FC, useEffect, useState } from 'react';
import { Center, keyframes } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const animationKeyframes = keyframes`
  0% { transform: scale(100%); }
  30% { transform: scale(100%); }
  45% { transform: scale(120%); }
  70% { transform: scale(120%); opacity: 1; }
  88% { transform: scale(80%); opacity: 0; }
  100% { transform: scale(80%); opacity: 0; }
`;

const animationKeyframesKeep = keyframes`
  0% { transform: scale(100%); }
`;

const animationKeep = `${animationKeyframesKeep} 0`;
const animation = `${animationKeyframes} 1s ease-in-out`;

type Props = {
  isClick: boolean;
  onClick: () => void;
};

const Icon: FC<Props> = ({ isClick, onClick }) => {
  const router = useRouter();
  const [isOpacity, setIsOpacity] = useState<boolean>(false);

  useEffect(() => {
    if (!isClick) return;
    setTimeout(() => {
      setIsOpacity(true);
      router.push('/archive');
    }, 900);
  }, [isClick]);

  return (
    <Center
      as={motion.div}
      animation={isClick ? animation : animationKeep}
      w={'240px'}
      h={'240px'}
      bg={'black800'}
      borderRadius={'9999px'}
      overflow={'hidden'}
      pos={'relative'}
      onClick={() => onClick()}
      _hover={{
        '&::after': {
          opacity: 1,
        },
      }}
      sx={{
        ...(isOpacity
          ? {
              opacity: 0,
            }
          : {
              opacity: 1,
            }),
        '&::before': {
          content: "''",
          display: 'block',
          w: '50%',
          h: '100%',
          pos: 'absolute',
          bg: 'green',
          inset: '0 auto auto 0',
          transform: 'rotateZ(30deg)',
          transformOrigin: 'right',
        },
        '&::after': {
          content: "'💻🤍'",
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          w: '224px',
          h: '224px',
          bg: '#ffffff99',
          fontSize: '3rem',
          transition: 'opacity 0.2s',
          pos: 'absolute',
          inset: '8px 8px auto auto',
          borderRadius: '9999px',
          zIndex: 2,
          textShadow: '0 0 10px #00000090',
          ...(isClick
            ? {
                opacity: 1,
              }
            : {
                opacity: 0,
              }),
        },
      }}
    >
      <Center
        w={'224px'}
        h={'224px'}
        borderRadius={'9999px'}
        bg={'url("/img/icon.jpg") no-repeat'}
        bgSize={'contain'}
        overflow={'hidden'}
        zIndex={1}
      />
    </Center>
  );
};

export default Icon;
