import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const STATS = [
  { value: 27, suffix: '+', label: 'Countries Covered' },
  { value: 30, suffix: '+', label: 'Certified Professionals' },
  { value: 8, suffix: '', label: 'Industries Served' },
  { value: 100, suffix: '%', label: 'Independent Assurance' },
]

// Count-up number that animates once when scrolled into view
function Counter({ value, suffix, duration = 1600 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf
    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      // easeOutCubic for a natural deceleration
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * value))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, duration])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const cardFade = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function CorporateStructure() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 lg:py-28">
      {/* Subtle decorative grid + glows */}
      <div className="pointer-events-none absolute inset-0 bg-hero-grid bg-[size:48px_48px] opacity-30" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />

      <div className="container-px relative z-10">
        {/* Centered 3D Axion block logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center"
        >
          <motion.div
            className="cursor-pointer overflow-hidden rounded-2xl shadow-2xl shadow-black/40"
            whileHover={{ y: -4, transition: { duration: 0.4, ease: 'easeOut' } }}
          >
            <motion.img
              src="/images/axion-logo-hero.png"
              alt="Axion Inspect SRL — Anywhere in Europe"
              className="h-32 w-32 object-cover sm:h-40 sm:w-40"
              whileHover={{ scale: 1.05, transition: { duration: 0.4, ease: 'easeOut' } }}
            />
          </motion.div>
          <h2 className="mt-7 font-display text-3xl font-extrabold text-white sm:text-4xl">
            AXION INSPECT <span className="text-primary">SRL</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/70">
            An independent European inspection authority built on precision
            engineering, uncompromising integrity, and a reach that spans the
            continent — wherever quality and compliance matter most.
          </p>
        </motion.div>

        {/* Stat counters */}
        <motion.dl
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4"
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={cardFade}
              whileHover={{ y: -6, scale: 1.03, transition: { duration: 0.4, ease: 'easeOut' } }}
              className="cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-colors hover:border-primary/40"
            >
              <dt className="font-display text-4xl font-bold text-accent sm:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </dt>
              <dd className="mt-2 text-sm font-medium text-white/70">
                {stat.label}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
