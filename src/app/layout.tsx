import type React from 'react'
import type { PropsWithChildren } from 'react'
import type { Metadata, Viewport } from 'next'

import { GeistMono, GeistSans } from '@/assets/fonts'
import { cn } from '@/utils'

import '@/assets/css/tailwind.css'

export const metadata: Metadata = {
  title: 'KAYP - Knowledge and Automation Yielding Processes',
  description: 'Knowledge and Automation Yielding Processes',
}

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  userScalable: false,
}

export const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html
      lang='en'
      className={cn(
        GeistSans.variable,
        GeistMono.variable,
        'bg-black text-white antialiased',
      )}
    >
      <body>{children}</body>
    </html>
  )
}
RootLayout.displayName = 'Root layout'

export default RootLayout
