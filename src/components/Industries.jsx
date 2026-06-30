import { motion } from 'framer-motion'
import {
  Fuel,
  Zap,
  FlaskConical,
  Wind,
  Building2,
  Factory,
  Ship,
  Plane,
} from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'
import { reveal, staggerTight, inView, EASE, hoverTransition } from '../lib/motion'

const ICONS = [Fuel, Zap, FlaskConical, Wind, Building2, Factory, Ship, Plane]

export default function Industries() {
  const { t } = useLang()
  const items = t('industries.items')

  return (
    <section id="industries" className="scroll-mt-24 bg-surface-200 py-24 lg:py-28 overflow-hidden">
      <div className="container-px">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow">{t('industries.eyebrow')}</span>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tightest text-midnight-900 sm:text-5xl">
            {t('industries.title')}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-midnight-400">
            {t('industries.body')}
          </p>
        </motion.div>

        <motion.div
          variants={staggerTight}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {items.map((item, i) => {
            const Icon = ICONS[i]
            return (
              <motion.div
                key={item.name}
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
                }}
                whileHover={{ y: -8, transition: hoverTransition }}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-surface-300 bg-white p-7 shadow-soft transition-colors duration-300 hover:border-accent/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-midnight-900 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-midnight-900">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-lg font-bold text-midnight-900">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-midnight-400">
                  {item.desc}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
