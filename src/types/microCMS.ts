import {
  MICROCMS_DESIGN_TYPE_MAIN,
  MICROCMS_DESIGN_TYPE_VTUBER,
} from '@/constants/microCMS';

export type MicroCMSType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

export type MicroCMSImageType = {
  url: string;
  height: number;
  width: number;
};

export type MicroCMSDesignItemType =
  | typeof MICROCMS_DESIGN_TYPE_MAIN
  | typeof MICROCMS_DESIGN_TYPE_VTUBER;

export type MicroCMSWebType = MicroCMSType & {
  title: string;
  copy: string;
  image: MicroCMSImageType;
  url: string;
  description: string;
};

export type MicroCMSDesignType = MicroCMSType & {
  image: MicroCMSImageType;
  alt: string;
  type: MicroCMSDesignItemType[];
};
