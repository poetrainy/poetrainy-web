import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=EB+Garamond&family=League+Spartan:wght@300;600&display=swap"
            rel="stylesheet"
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="img/icon-512x512.png" />
          <meta name="theme-color" content="#fff" />
        </Head>
        <body>
          {/* <ColorModeScript /> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
