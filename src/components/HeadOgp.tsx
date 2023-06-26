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
      content={`${SITE_URL}${data ? `/${data.url}` : ''}`}
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
    <meta property={'og:image'} content={`${SITE_URL}/img/icon.jpg`} />
    <meta name={'twitter:card'} content={'summary'} />
  </>
);

export default HeadOgp;
