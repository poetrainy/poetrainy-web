import { FC } from 'react';

import { NAME, SITE_TITLE_FULL, SITE_URL } from '@/constants/common';

type Props = {
  data?: {
    title: string;
    url: string;
    description: string;
  };
};

const HeadOgp: FC<Props> = ({ data }) => (
  <>
    <title>{`${data ? `${data.title}｜` : ''}${SITE_TITLE_FULL}`}</title>
    <meta
      property={'og:title'}
      content={`${data ? `${data.title}｜` : ''}${SITE_TITLE_FULL}`}
    />
    <meta
      property={'og:url'}
      content={`${SITE_URL}${data ? `${data.url}` : ''}`}
    />
    <meta
      property={'og:description'}
      content={`${
        data
          ? data.description
          : '写真を撮ることが好きな新米Webエンジニアです。'
      }`}
    />
    {/* ページの種類 */}
    <meta property={'og:type'} content={'website'} />
    {/* サイト名 */}
    <meta property={'og:site_name'} content={NAME} />
    {/* サムネイル画像の URL */}
    <meta property={'og:image'} content={`${SITE_URL}img/icon.jpg`} />
    <meta name={'twitter:card'} content={'summary'} />
    <meta name="apple-mobile-web-app-title" content={NAME} />
    <meta
      name="msapplication-square70x70logo"
      content={`${SITE_URL}/img/site-tile-70x70.png`}
    />
    <meta
      name="msapplication-square150x150logo"
      content={`${SITE_URL}/img/site-tile-150x150.png`}
    />
    <meta
      name="msapplication-wide310x150logo"
      content={`${SITE_URL}/img/site-tile-310x150.png`}
    />
    <meta
      name="msapplication-square310x310logo"
      content={`${SITE_URL}/img/site-tile-310x310.png`}
    />
    <meta name="msapplication-TileColor" content="#0078d7" />
    <link
      rel="shortcut icon"
      type="image/vnd.microsoft.icon"
      href="/favicon.ico"
    />
    <link rel="icon" type="image/vnd.microsoft.icon" href="/favicon.ico" />
    <link
      rel="apple-touch-icon"
      sizes="57x57"
      href={`${SITE_URL}/img/apple-touch-icon-57x57.png`}
    />
    <link
      rel="apple-touch-icon"
      sizes="60x60"
      href={`${SITE_URL}/img/apple-touch-icon-60x60.png`}
    />
    <link
      rel="apple-touch-icon"
      sizes="72x72"
      href={`${SITE_URL}/img/apple-touch-icon-72x72.png`}
    />
    <link
      rel="apple-touch-icon"
      sizes="76x76"
      href={`${SITE_URL}/img/apple-touch-icon-76x76.png`}
    />
    <link
      rel="apple-touch-icon"
      sizes="114x114"
      href={`${SITE_URL}/img/apple-touch-icon-114x114.png`}
    />
    <link
      rel="apple-touch-icon"
      sizes="120x120"
      href={`${SITE_URL}/img/apple-touch-icon-120x120.png`}
    />
    <link
      rel="apple-touch-icon"
      sizes="144x144"
      href={`${SITE_URL}/img/apple-touch-icon-144x144.png`}
    />
    <link
      rel="apple-touch-icon"
      sizes="152x152"
      href={`${SITE_URL}/img/apple-touch-icon-152x152.png`}
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href={`${SITE_URL}/img/apple-touch-icon-180x180.png`}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="36x36"
      href={`${SITE_URL}/img/android-chrome-36x36.png`}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="48x48"
      href={`${SITE_URL}/img/android-chrome-48x48.png`}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="72x72"
      href={`${SITE_URL}/img/android-chrome-72x72.png`}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="96x96"
      href={`${SITE_URL}/img/android-chrome-96x96.png`}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="128x128"
      href={`${SITE_URL}/img/android-chrome-128x128.png`}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="144x144"
      href={`${SITE_URL}/img/android-chrome-144x144.png`}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="152x152"
      href={`${SITE_URL}/img/android-chrome-152x152.png`}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="192x192"
      href={`${SITE_URL}/img/android-chrome-192x192.png`}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="256x256"
      href={`${SITE_URL}/img/android-chrome-256x256.png`}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="384x384"
      href={`${SITE_URL}/img/android-chrome-384x384.png`}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="512x512"
      href={`${SITE_URL}/img/android-chrome-512x512.png`}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="36x36"
      href={`${SITE_URL}/img/icon-36x36.png`}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="48x48"
      href={`${SITE_URL}/img/icon-48x48.png`}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="72x72"
      href={`${SITE_URL}/img/icon-72x72.png`}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="96x96"
      href={`${SITE_URL}/img/icon-96x96.png`}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="128x128"
      href={`${SITE_URL}/img/icon-128x128.png`}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="144x144"
      href={`${SITE_URL}/img/icon-144x144.png`}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="152x152"
      href={`${SITE_URL}/img/icon-152x152.png`}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="160x160"
      href={`${SITE_URL}/img/icon-160x160.png`}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="192x192"
      href={`${SITE_URL}/img/icon-192x192.png`}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="196x196"
      href={`${SITE_URL}/img/icon-196x196.png`}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="256x256"
      href={`${SITE_URL}/img/icon-256x256.png`}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="384x384"
      href={`${SITE_URL}/img/icon-384x384.png`}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="512x512"
      href={`${SITE_URL}/img/icon-512x512.png`}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href={`${SITE_URL}/img/icon-16x16.png`}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="24x24"
      href={`${SITE_URL}/img/icon-24x24.png`}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href={`${SITE_URL}/img/icon-32x32.png`}
    />
    <link rel="manifest" href={`${SITE_URL}/manifest.json`} />
  </>
);

export default HeadOgp;
