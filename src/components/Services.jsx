import { motion } from 'framer-motion'
import { ArrowRight, ClipboardCheck, Timer, Users } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'
import {
  reveal,
  staggerTight,
  fromLeft,
  fromRight,
  inView,
  EASE,
  hoverTransition,
} from '../lib/motion'

// Image-backed core services → alternating rows (indexes into services.items)
const ROWS = [
  { i: 2, img: '/images/inspection-audit.png' },
  { i: 3, img: '/images/ndt-testing.jpeg' },
  { i: 4, img: '/images/welding-inspection.jpeg' },
  { i: 5, img: '/images/painting-inspection.png' },
  { i: 6, img: '/images/dimensional-measurement.jpeg' },
  { i: 8, img: '/images/vendor-oversight.png' },
]

// Remaining services (no dedicated photo) → compact supporting grid
const GRID = [
  { i: 0, icon: ClipboardCheck },
  { i: 1, icon: Timer },
  { i: 7, icon: Users },
]

export default function Services() {
  const { t } = useLang()
  const items = t('services.items')
  const linkLabel = t('services.linkLabel')

  return (
    <section id="services" className="scroll-mt-24 bg-white py-24 lg:py-32">
      <div className="container-px">
        {/* Heading */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow">{t('services.eyebrow')}</span>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tightest text-midnight-900 sm:text-5xl">
            {t('services.title')}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-midnight-400">
            {t('services.body')}
          </p>
        </motion.div>

        {/* Alternating service rows */}
        <div className="mt-20 space-y-20 lg:space-y-28">
          {ROWS.map(({ i, img }, idx) => {
            const svc = items[i]
            const reversed = idx % 2 === 1
            return (
              <motion.div
                key={svc.title}
                initial="hidden"
                whileInView="show"
                viewport={inView}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                {/* Image */}
                <motion.div
                  variants={reversed ? fromRight : fromLeft}
                  className={`relative ${reversed ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-accent/15 to-transparent blur-lg" />
                  <motion.div
                    className="cursor-pointer overflow-hidden rounded-[1.75rem] shadow-card ring-1 ring-midnight-100 transition-[box-shadow] duration-300 hover:shadow-glow hover:ring-2 hover:ring-accent/60"
                    whileHover={{ y: -6, transition: hoverTransition }}
                  >
                    <motion.img
                      src={img}
                      alt={svc.title}
                      className="aspect-[16/11] w-full object-cover"
                      whileHover={{ scale: 1.05, transition: hoverTransition }}
                    />
                  </motion.div>
                </motion.div>

                {/* Text */}
                <motion.div
                  variants={reversed ? fromLeft : fromRight}
                  className={reversed ? 'lg:order-1' : 'lg:order-2'}
                >
                  <div className="flex items-center gap-3">
                    <span className="h-px w-8 bg-accent" />
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-700">
                      Service {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold tracking-tightest text-midnight-900 sm:text-3xl">
                    {svc.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-midnight-400">
                    {svc.desc}
                  </p>
                  <a href="#contact" className="link-arrow group mt-7">
                    {linkLabel}
                    <motion.span className="inline-flex" whileHover={{ x: 4 }}>
                      <ArrowRight className="h-4 w-4" />
                    </motion.span>
                  </a>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Supporting services grid */}
        <div className="mt-24">
          <motion.h3
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={inView}
            className="text-center font-display text-sm font-semibold uppercase tracking-[0.22em] text-midnight-300"
          >
            {t('services.moreTitle')}
          </motion.h3>
          <motion.div
            variants={staggerTight}
            initial="hidden"
            whileInView="show"
            viewport={inView}
            className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {GRID.map(({ i, icon: Icon }) => {
              const svc = items[i]
              return (
                <motion.article
                  key={svc.title}
                  variants={{
                    hidden: { opacity: 0, y: 28 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
                  }}
                  whileHover={{ y: -8, transition: hoverTransition }}
                  className="group cursor-pointer overflow-hidden rounded-2xl border border-midnight-700 bg-midnight-900 shadow-card transition-[border-color,box-shadow] duration-300 hover:border-accent/60 hover:shadow-glow"
                >
                  {/* Terminal title bar */}
                  <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                    <span className="ml-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
                      module
                    </span>
                  </div>
                  <div className="p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-accent ring-1 ring-white/10 transition-colors duration-300 group-hover:bg-accent group-hover:text-midnight-900">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h4 className="mt-6 font-display text-lg font-bold text-white">
                      {svc.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">
                      {svc.desc}
                    </p>
                    <div className="mt-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-accent/80">
                      <span className="h-1.5 w-1.5 animate-accent-pulse rounded-full bg-accent" />
                      active
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
