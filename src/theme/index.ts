import { extendTheme } from '@chakra-ui/react';

const colors = {
  white: '#FFFFFF',
  green: '#086776',
  black800: '#383838',
  black600: '#8e8e8e',
  black300: '#dedede',
  black100: '#F6F6F6',
};
const styles = {
  global: {
    html: {
      fontSize: '62.5%',
    },
    body: {
      color: 'black800',
      fontSize: '1.3rem',
      fontFamily: 'body',
      a: {
        textDecoration: 'none',
      },
      li: {
        listStyleType: 'none',
      },
      pre: {
        fontFamily: 'body',
        whiteSpace: 'pre-wrap',
      },
    },
    '::selection': {
      background: 'rgba(8, 103, 118, 0.2)',
    },
    '::-moz-selection': {
      background: 'rgba(8, 103, 118, 0.2)',
    },
  },
};
const fonts = {
  body: "'Hiragino Kaku Gothic ProN', 'Noto Sans JP', sans-serif",
  heading: "'Abril Fatface', serif",
  sp: "'League Spartan', sans-serif",
};
const breakpoints = {
  sm: '480px',
  md: '800px',
  // lg: '820px',
};
const textStyles = {
  transition: {
    opacity: 0,
    transform: 'translateY(-10px)',
    transition: 'opacity 0.3s, transform 0.3s',
  },
  transitionDesign: {
    opacity: 0,
    transform: 'scale(95%)',
    transition: 'opacity 0.3s, transform 0.3s',
  },
  image: {
    w: '100%',
    h: '100%',
    objectFit: 'cover',
  },
};

const theme = extendTheme({
  styles,
  colors,
  fonts,
  textStyles,
  breakpoints,
});

export default theme;
