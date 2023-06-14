import { TitleListType } from '@/types/common';

export const NAME: string = 'poetrainy';

export const COLOR_GREEN: string = '#086776';
export const COLOR_BLACK: string = '#383838';

export const TITLE_WEB: string = 'Front end developer';
export const TITLE_PHOTO: string = 'Amateur Photographer';
export const TITLE_LIST: TitleListType[] = [
  {
    title: TITLE_WEB,
    color: COLOR_GREEN,
  },
  {
    title: TITLE_PHOTO,
    color: COLOR_BLACK,
  },
];

export const SITE_DESCRIPTION: string = `${TITLE_WEB} / ${TITLE_PHOTO}`;
export const SITE_TITLE_FULL: string = `${NAME} - ${SITE_DESCRIPTION}`;
export const SITE_URL: string = 'https://portrainy.vercel.app/';
