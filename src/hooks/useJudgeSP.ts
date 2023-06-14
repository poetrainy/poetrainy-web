import { useLayoutEffect, useState } from 'react';

const BREAKPOINT = 800;

export const useWindowSize = () => {
  const [width, setWidth] = useState<{ size: number; isSP: boolean }>({
    size: 0,
    isSP: true,
  });
  useLayoutEffect(() => {
    const updateWidth = (): void => {
      setWidth({
        size: window.innerWidth,
        isSP: BREAKPOINT > window.innerWidth,
      });
    };

    window.addEventListener('resize', updateWidth);
    updateWidth();

    return () => window.removeEventListener('resize', updateWidth);
  }, []);
  return width;
};
