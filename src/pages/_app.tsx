import type { AppProps } from 'next/app';
import { Box, ChakraProvider } from '@chakra-ui/react';
import theme from 'src/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Box as={'main'}>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
