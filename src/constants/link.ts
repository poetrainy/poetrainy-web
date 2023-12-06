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
        path: 'https://zenn.dev/poetrainy',
        icon: 'icon-link-zenn.svg',
      },
    ],
  },
  photo: {
    color: COLOR_BLACK,
    contents: [
      {
        title: 'portfolio',
        path: 'https://philosophia000.vercel.app/',
        icon: 'icon-link-philosophia.svg',
      },
    ],
  },
};
