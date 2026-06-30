import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLang } from '../i18n/LanguageContext'
import { reveal, stagger, inView, EASE } from '../lib/motion'

// Count-up number that animates once when scrolled into view
function Counter({ value, suffix, duration = 1700 }) {
  const ref = useRef(null)
  const seen = useInView(ref, { once: true, amount: 0.5 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!seen) return
    let raf
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplay(Math.round(eased * value))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [seen, value, duration])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}

export default function CorporateStructure() {
  const { t } = useLang()
  const stats = t('stats.items')

  return (
    <section className="relative overflow-hidden bg-midnight-900 py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-faint bg-[size:54px_54px] opacity-50" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />

      <div className="container-px relative z-10">
        {/* Centered 3D Axion block + intro */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="flex flex-col items-center text-center"
        >
          <motion.div
            variants={reveal}
            className="cursor-pointer overflow-hidden rounded-2xl shadow-2xl shadow-black/50 ring-1 ring-white/10"
            whileHover={{ y: -4, transition: { duration: 0.4, ease: 'easeOut' } }}
          >
            <motion.img
              src="/images/axion-logo-hero.png"
              alt={t('stats.title')}
              className="h-32 w-32 object-cover sm:h-40 sm:w-40"
              whileHover={{ scale: 1.05, transition: { duration: 0.4, ease: 'easeOut' } }}
            />
          </motion.div>
          <motion.h2
            variants={reveal}
            className="mt-8 font-display text-3xl font-bold tracking-tightest text-white sm:text-4xl"
          >
            {t('stats.title')}
          </motion.h2>
          <motion.p
            variants={reveal}
            className="mt-4 max-w-2xl text-lg leading-relaxed text-white/65"
          >
            {t('stats.body')}
          </motion.p>
        </motion.div>

        {/* Stat counters */}
        <motion.dl
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-white/10 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 28 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
              }}
              className="group bg-midnight-900 p-8 text-center transition-colors hover:bg-midnight-800"
            >
              <dt className="font-display text-5xl font-bold tracking-tightest text-white sm:text-6xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </dt>
              <div className="mx-auto mt-4 h-0.5 w-8 rounded-full bg-accent transition-all duration-300 group-hover:w-12" />
              <dd className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                {stat.label}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
