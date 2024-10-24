import type React from 'react'

import { Fragment } from 'react'
import { AnimatedWelcome } from './animation'

export const WelcomeSection: React.FC = () => {
  return (
    <Fragment>
      <h1 aria-hidden className='sr-only'>
        KAYP - Knowledge and Automation Yielding Process
      </h1>

      <AnimatedWelcome />
    </Fragment>
  )
}
WelcomeSection.displayName = 'Welcome section'
