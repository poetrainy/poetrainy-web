module.exports = {
  plugins: ['prettier'],
  extends: [
    'react-app',
    'plugin:@next/next/recommended',
    'next/core-web-vitals',
  ],
  rules: {
    'prettier/prettier': 'error',
  },
};
