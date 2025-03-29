import type { NextPageFC } from '@/types'

import type React from 'react'
import { WelcomeSection } from '@/sections'

const Homepage: NextPageFC = () => {
  return (
    <main className="grid min-h-dvh place-content-center">
      <WelcomeSection />
    </main>
  )
}
Homepage.displayName = 'Home page'

export default Homepage
