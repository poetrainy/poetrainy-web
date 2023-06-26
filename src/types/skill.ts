import {
  SKILL_MAIN,
  SKILL_SUB,
  SKILL_DESIGN,
  SKILL_SERVICE,
  SKILL_TOOL,
} from '@/constants/skill';

export type SkillsHeadlineType =
  | typeof SKILL_MAIN
  | typeof SKILL_SUB
  | typeof SKILL_DESIGN
  | typeof SKILL_SERVICE
  | typeof SKILL_TOOL;

export type SkillsContentsType = {
  name: string;
  percentage: number;
  icon: string;
};

export type SkillType = {
  [key in SkillsHeadlineType]: SkillsContentsType[];
};
