module.exports = {
  content: ['./src/**/*.{html,js,vue}'],
  theme: {
    extend: {

      fontFamily: {
        body: ['Barlow'],

      },
      transitionDuration: {
        0: '0ms',
        2000: '2000ms',
        600: '600ms',
        900: '900ms',
        1200: '1200ms',
      },
    },
  },
  plugins: [],
};
