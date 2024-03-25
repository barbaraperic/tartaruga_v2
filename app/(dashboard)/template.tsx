'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { inView } from 'framer-motion'

const variants = {
  hidden: {
    scaleX: 0,
    transition: {
      ease: 'easeOut',
      duration: 3,
    },
  },
  enter: {
    scaleX: 1,
  },
}

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <motion.div
        layout
        initial="hidden"
        animate="enter"
        variants={variants}
        transition={{
          layout: { duration: 0.3, type: 'spring' },
        }}
      >
        {children}
      </motion.div>
      <AnimatePresence initial={false} mode="wait"></AnimatePresence>
    </div>
  )
}
