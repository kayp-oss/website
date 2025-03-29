'use client'

import type { Transition, Variants } from 'framer-motion'
import type React from 'react'

import { cn } from '@/utils'
import { motion } from 'framer-motion'

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
      layout
      initial="hidden"
      animate="visible"
      className="container space-y-2"
      transition={{ staggerChildren: 0.069 }}
    >
      <motion.p
        variants={titlesVariants}
        className={cn(`text-lg font-thin text-balance text-orange-200 lg:font-light`)}
      >
        KAYP -
      </motion.p>

      <motion.p
        variants={titlesVariants}
        className={cn('text-4xl font-bold text-balance text-orange-500 lg:font-black')}
      >
        Knowledge and Automation Yielding Process
      </motion.p>

      <motion.p
        variants={titlesVariants}
        className={cn(`font-mono font-thin text-balance text-orange-50 lg:font-light`)}
      >
        We are a team of skilled software architects and developers dedicated to creating high-quality, open-source
        solutions. Our mission is to empower businesses and individuals with innovative tools and platforms that drive
        efficiency and growth.
      </motion.p>
    </motion.div>
  )
}
AnimatedWelcome.displayName = 'Animated welcome section titles'
