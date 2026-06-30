// Shared Framer Motion variants — a single cinematic language for the whole site.
// Easing [0.16, 1, 0.3, 1] = a smooth "expo-out" for premium, decoupled motion.

export const EASE = [0.16, 1, 0.3, 1]

// Section heading / single element reveal
export const reveal = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
}

export const revealFast = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
}

// Parent container that cascades its children
export const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

export const staggerTight = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
  },
}

// Slide-in from a side (for alternating rows)
export const fromLeft = {
  hidden: { opacity: 0, x: -48 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: EASE } },
}

export const fromRight = {
  hidden: { opacity: 0, x: 48 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: EASE } },
}

// Standard in-view trigger config
export const inView = { once: true, amount: 0.25 }

// Shared hover transition for cards / images
export const hoverTransition = { duration: 0.4, ease: 'easeOut' }
