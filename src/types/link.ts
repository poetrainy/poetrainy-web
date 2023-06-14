import { LINK_WEB, LINK_PHOTO } from '@/constants/link';

export type LinksHeadlineType = typeof LINK_WEB | typeof LINK_PHOTO;

export type LinksContentsType = {
  title: string;
  path: string;
  icon: string;
};

export type LinksType = {
  [key in LinksHeadlineType]: {
    color: string;
    contents: LinksContentsType[];
  };
};
