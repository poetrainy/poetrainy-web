import { COLOR_BLACK, COLOR_GREEN } from '@/constants/common';

import { LinksType } from '@/types/link';

export const LINK_WEB = 'web';
export const LINK_PHOTO = 'photo';

export const LINKS: LinksType = {
  web: {
    color: COLOR_GREEN,
    contents: [
      {
        title: 'github',
        path: 'https://github.com/poetrainy',
        icon: 'icon-link-github.svg',
      },
      {
        title: 'zenn',
        path: 'https://zenn.dev/1023_310/',
        icon: 'icon-link-zenn.svg',
      },
    ],
  },
  photo: {
    color: COLOR_BLACK,
    contents: [
      {
        title: 'portforio',
        path: 'https://www.philosophia000.xyz/2022',
        icon: 'icon-link-philosophia.svg',
      },
      {
        title: 'instagram',
        path: 'https://www.instagram.com/p0.xyz/',
        icon: 'icon-link-instagram.svg',
      },
    ],
  },
};
