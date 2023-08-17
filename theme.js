const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const spacing = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 15, 16, 18, 20, 22, 24, 25, 26, 28,
  30, 32, 34, 35, 36, 38, 40, 45, 50, 55, 60, 64, 65, 70, 72, 75, 80, 84, 85,
  90, 95, 96, 100
];

// https://uicolors.app/edit?sv1=primary:50-ecebff/100-dedbff/200-c7c2ff/300-a899ff/400-937aff/500-7e61ff/600-6a4ce1/700-5b33c7/800-3e238b/900-251452/950-11082b;slate:50-f4f4fb/100-e7e7f4/200-d9d9ed/300-c4c4e3/400-aeaed6/500-9692c4/600-8178b0/700-655b95/800-4b4276/900-332b5a/950-1d1641;blue:50-f0f8fe/100-deeefb/200-c4e3f9/300-9cd1f4/400-6db6ed/500-549ee7/600-367dda/700-2d69c8/800-2b56a2/900-274a81/950-1c2e4f;yellow:50-fff9eb/100-ffefc6/200-ffdc88/300-ffcb60/400-ffac20/500-f98907/600-dd6302/700-b74306/800-94320c/900-7a2b0d/950-461402;red:50-fff1f3/100-ffe3e6/200-ffccd4/300-ffa1b1/400-ff708a/500-f93a63/600-e7174e/700-c30d41/800-a30e3d/900-8b103b/950-4e031b

export const theme = {
  borderColor: ({ theme }) => ({
    ...theme('colors'),
    DEFAULT: theme('colors.slate.100', 'currentColor'),
  }),
  colors: {
    none: colors.none,
    inherit: colors.inherit,
    current: colors.current,
    transparent: colors.transparent,
    black: colors.black,
    cyan: colors.cyan,
    fuschia: colors.fuschia,
    green: colors.emerald,
    orange: colors.orange,
    white: colors.white,
    yellow: colors.amber,
    primary: {
      50: '#ecebff',
      100: '#dedbff',
      200: '#c7c2ff',
      300: '#a899ff',
      400: '#937aff',
      500: '#7e61ff',
      600: '#6a4ce1',
      700: '#5b33c7',
      800: '#3e238b',
      900: '#251452',
      950: '#11082b'
    },
    slate: {
      50: '#f4f4fb',
      100: '#e7e7f4',
      200: '#d9d9ed',
      300: '#c4c4e3',
      400: '#aeaed6',
      500: '#9692c4',
      600: '#8178b0',
      700: '#655b95',
      800: '#4b4276',
      900: '#332b5a',
      950: '#1d1641'
    },
    blue: {
      50: '#f0f8fe',
      100: '#deeefb',
      200: '#c4e3f9',
      300: '#9cd1f4',
      400: '#6db6ed',
      500: '#549ee7',
      600: '#367dda',
      700: '#2d69c8',
      800: '#2b56a2',
      900: '#274a81',
      950: '#1c2e4f'
    },
    red: {
      50: '#fff1f3',
      100: '#ffe3e6',
      200: '#ffccd4',
      300: '#ffa1b1',
      400: '#ff708a',
      500: '#f93a63',
      600: '#e7174e',
      700: '#c30d41',
      800: '#a30e3d',
      900: '#8b103b',
      950: '#4e031b'
    }
  },
  fontSize: {
    '2xs': ['0.625rem', { lineHeight: '1.3' }], // 10px
    xs: ['0.75rem', { lineHeight: '1.4' }], // 12px
    sm: ['0.875rem', { lineHeight: '1.5' }], // 14px
    base: ['1rem', { lineHeight: '1.6' }], // 16px
    lg: ['1.125rem', { lineHeight: '1.6' }], // 18px
    xl: ['1.25rem', { lineHeight: '1.5' }], // 20px
    '2xl': ['1.5rem', { lineHeight: '1.4' }], // 24px
    '3xl': ['1.875rem', { lineHeight: '1.3' }], // 30px
    '4xl': ['2.25rem', { lineHeight: '1.2' }], // 36px
    '5xl': ['3rem', { lineHeight: '1.2' }], // 48px
    '6xl': ['4rem', { lineHeight: '1.2' }], // 64px
    '7xl': ['5rem', { lineHeight: '1.1' }], // 80px
    '8xl': ['6rem', { lineHeight: '1.1' }] // 96px
  },
  extend: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      code: [
        'Roboto Mono', 'Consolas', 'Bitstream Vera Sans Mono', 'Andale Mono',
        'Monaco', 'DejaVu Sans Mono', 'Lucida Console'
      ]
    },
    opacity: {
      '15': '.15',
      '35': '.35',
      '45': '.45',
      '55': '.55',
      '65': '.65',
      '85': '.85'
    },
    screens: {
      '2xs': '375px',
      xs: '414px'
    },
    spacing: {
      ...Object.fromEntries(
        spacing.map((num, index) => {
          return [`${num}px`, `${num / 16}rem`];
        })
      )
    },
    transitionTimingFunction: {
      'ease-in-squish': 'cubic-bezier(.5,-.3,.1,1.5);'
    },
  },
}
