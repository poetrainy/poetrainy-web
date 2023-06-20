import { FC } from 'react';
import { Box } from '@chakra-ui/react';

type Props = {
  size: string;
  horizontal?: boolean;
};

const OriginalSpacer: FC<Props> = ({ size, horizontal }) => (
  <Box
    sx={{
      ...(horizontal
        ? {
            width: size,
            height: 'auto',
          }
        : {
            width: 'auto',
            height: size,
          }),
    }}
  />
);

export default OriginalSpacer;
