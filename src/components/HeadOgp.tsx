import { FC } from 'react';

import { NAME, SITE_TITLE_FULL, SITE_URL } from '@/constants/common';

const HeadOgp: FC = () => (
  <>
    <title>{SITE_TITLE_FULL}</title>
    <meta property={'og:title'} content={SITE_TITLE_FULL} />
    <meta property={'og:url'} content={SITE_URL} />
    <meta
      property={'og:description'}
      content={'写真を撮ることが好きな新米Webエンジニアです。'}
    />
    {/* ページの種類 */}
    <meta property={'og:type'} content={'website'} />
    {/* サイト名 */}
    <meta property={'og:site_name'} content={NAME} />
    {/* サムネイル画像の URL */}
    <meta property={'og:image'} content={`${SITE_URL}/img/icon.jpg`} />
    <meta name={'twitter:card'} content={'summary'} />
  </>
);

export default HeadOgp;
