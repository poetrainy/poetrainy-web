import { useEffect, useState } from 'react';

export const useFadeIn = (index: number, second: number) => {
  const [fadeInCount, setFadeInCount] = useState<number>(-1);
  const [isFadeInArray, setIsFadeInArray] = useState<boolean[]>([]);

  useEffect(() => {
    const keepIsFadeInArray = [];
    for (let i = 0; i < index; i++) {
      keepIsFadeInArray.push(false);
    }
    setIsFadeInArray(keepIsFadeInArray);
    setFadeInCount(0);
  }, []);

  useEffect(() => {
    if (fadeInCount < 0 || fadeInCount + 1 > index) return;
    setTimeout(() => {
      const keepIsFadeInArray = isFadeInArray.map(
        (element: boolean, i: number) => {
          if (i === fadeInCount) return true;
          return element;
        }
      );
      setIsFadeInArray(keepIsFadeInArray);
      setFadeInCount(fadeInCount + 1);
    }, second);
  }, [fadeInCount]);

  return isFadeInArray;
};
