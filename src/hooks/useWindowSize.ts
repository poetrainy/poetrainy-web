import { useLayoutEffect, useState } from 'react';

const BREAKPOINT_MD = 800;
const BREAKPOINT_SM = 480;

export const useWindowSize = () => {
  const [width, setWidth] = useState<{
    size: number;
    isSM: boolean;
    isMD: boolean;
  }>({
    size: 0,
    isSM: true,
    isMD: true,
  });
  useLayoutEffect(() => {
    const updateWidth = (): void => {
      setWidth({
        size: window.innerWidth,
        isSM: BREAKPOINT_SM > window.innerWidth,
        isMD: BREAKPOINT_MD > window.innerWidth,
      });
    };

    window.addEventListener('resize', updateWidth);
    updateWidth();

    return () => window.removeEventListener('resize', updateWidth);
  }, []);
  return width;
};
