import localFont from 'next/font/local'

export const Inter = localFont({
  src: [
    {
      path: '../fonts/Inter-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../fonts/Inter-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../fonts/Inter-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/Inter-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Inter-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Inter-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/Inter-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/Inter-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../fonts/Inter-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-Inter',
})
