'use client'

import type React from 'react'
import type { Variants, Transition } from 'framer-motion'

import { motion } from 'framer-motion'
import { cn } from '@/utils'

const wobbleConfig: Transition = {
  type: 'spring',
  stiffness: 125,
}

const titlesVariants: Variants = {
  hidden: {
    y: 50,
    opacity: 0,
    filter: 'blur(4px)',
  },
  visible: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: wobbleConfig,
  },
}

export const AnimatedWelcome: React.FC = () => {
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      transition={{ staggerChildren: 0.1 }}
    >
      <motion.p
        variants={titlesVariants}
        className={cn('max-w-xl text-balance text-xl font-thin lg:font-light')}
      >
        KAYP
      </motion.p>
      <motion.p
        variants={titlesVariants}
        className={cn('max-w-xl text-balance text-4xl font-bold lg:font-black')}
      >
        Knowledge and Automation Yielding Process
      </motion.p>
    </motion.div>
  )
}
AnimatedWelcome.displayName = 'Animated welcome section titles'
