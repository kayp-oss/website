import registerFont from 'next/font/local'

export const GeistMono = registerFont({
  src: './GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const GeistSans = registerFont({
  src: './GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
