import { SkillType } from '@/types/skill';

export const SKILL_MAIN = 'main';
export const SKILL_SUB = 'sub';
export const SKILL_DESIGN = 'design';
export const SKILL_SERVICE = 'service';
export const SKILL_TOOL = 'tool';

export const SKILLS = {
  main: [
    { name: 'Next.js', percentage: 60, icon: 'icon-skills-nextjs' },
    { name: 'React', percentage: 60, icon: 'icon-skills-react' },
    { name: 'TypeScript', percentage: 60, icon: 'icon-skills-typescript' },
  ],
  sub: [
    { name: 'Vue.js', percentage: 60, icon: 'icon-skills-vuejs' },
    { name: 'Nuxt.js', percentage: 60, icon: 'icon-skills-nuxtjs' },
    { name: 'Pug', percentage: 90, icon: 'icon-skills-pug' },
    { name: 'Sass', percentage: 90, icon: 'icon-skills-sass' },
  ],
  design: [
    { name: 'Illustrator', percentage: 70, icon: 'icon-skills-illustrator' },
    { name: 'Photoshop', percentage: 60, icon: 'icon-skills-photoshop' },
    { name: 'XD', percentage: 70, icon: 'icon-skills-xd' },
    { name: 'Figma', percentage: 60, icon: 'icon-skills-figma' },
  ],
  service: [
    { name: 'Github', percentage: 60, icon: 'icon-skills-github' },
    { name: 'microCMS', percentage: 60, icon: 'icon-skills-microcms' },
    { name: 'Vercel', percentage: 60, icon: 'icon-skills-vercel' },
    { name: 'Firebase', percentage: 30, icon: 'icon-skills-firebase' },
  ],
  tool: [
    { name: 'Visual Studio Cord', percentage: 80, icon: 'icon-skills-vscode' },
    { name: 'Slack', percentage: 70, icon: 'icon-skills-slack' },
    { name: 'Discord', percentage: 60, icon: 'icon-skills-discord' },
  ],
};
