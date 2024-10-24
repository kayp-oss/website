import type React from 'react'

import { WelcomeSection } from '@/sections'

export const Home: React.FC = () => {
  return (
    <main className='grid min-h-dvh place-content-center'>
      <WelcomeSection />
    </main>
  )
}
Home.displayName = 'Home page'

export default Home
