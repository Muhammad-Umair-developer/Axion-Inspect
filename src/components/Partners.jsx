import { motion } from 'framer-motion'
import { Handshake, Trophy, Target, BadgeCheck } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'
import { reveal, stagger, inView, EASE, hoverTransition } from '../lib/motion'

const ICONS = [Handshake, Trophy, Target]

export default function Partners() {
  const { t } = useLang()
  const columns = t('partners.columns')

  return (
    <section className="scroll-mt-24 bg-surface-200 py-24 lg:py-28 overflow-hidden">
      <div className="container-px">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow">{t('partners.eyebrow')}</span>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tightest text-midnight-900 sm:text-5xl">
            {t('partners.title')}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-midnight-400">
            {t('partners.body')}
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mt-16 grid gap-8 md:grid-cols-3"
        >
          {columns.map((col, i) => {
            const Icon = ICONS[i]
            return (
              <motion.div
                key={col.title}
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
                }}
                whileHover={{ y: -8, transition: hoverTransition }}
                className="group flex cursor-pointer flex-col items-center overflow-hidden rounded-[1.5rem] border border-surface-300 bg-white p-8 text-center shadow-soft transition-colors duration-300 hover:border-accent/40"
              >
                {/* Stamp-style seal */}
                <div className="relative flex h-24 w-24 items-center justify-center">
                  <span className="absolute inset-0 rounded-full border-2 border-dashed border-accent/40" />
                  <span className="absolute inset-2 rounded-full border border-accent/25" />
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-midnight-900 text-accent transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-7 w-7" />
                  </span>
                </div>

                <h3 className="mt-6 font-display text-xl font-bold text-midnight-900">
                  {col.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-midnight-400">
                  {col.desc}
                </p>

                <ul className="mt-5 flex flex-wrap justify-center gap-2">
                  {col.tags.map((tag) => (
                    <li
                      key={tag}
                      className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-700"
                    >
                      <BadgeCheck className="h-3.5 w-3.5" />
                      {tag}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
