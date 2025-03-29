import type { NextLayoutFC } from '@/types'
import type { Metadata, Viewport } from 'next'
import type React from 'react'

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

const RootLayout: NextLayoutFC = ({ children }) => {
  return (
    <html lang="en" className={cn(GeistSans.variable, GeistMono.variable, 'bg-black text-white antialiased')}>
      <body>{children}</body>
    </html>
  )
}
RootLayout.displayName = 'Root layout'

export default RootLayout
