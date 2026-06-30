import { motion } from 'framer-motion'
import { Award, BadgeCheck, ShieldCheck, FileBadge, Stamp, Globe2 } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'
import { reveal, staggerTight, inView, EASE, hoverTransition } from '../lib/motion'

const ICONS = [Award, ShieldCheck, Globe2, BadgeCheck, Stamp, FileBadge]

export default function Certifications() {
  const { t } = useLang()
  const items = t('certifications.items')

  return (
    <section className="scroll-mt-24 bg-white py-24 lg:py-28">
      <div className="container-px">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow">{t('certifications.eyebrow')}</span>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tightest text-midnight-900 sm:text-5xl">
            {t('certifications.title')}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-midnight-400">
            {t('certifications.body')}
          </p>
        </motion.div>

        <motion.div
          variants={staggerTight}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
        >
          {items.map((cert, i) => {
            const Icon = ICONS[i]
            return (
              <motion.div
                key={cert.code}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
                }}
                whileHover={{ y: -6, transition: hoverTransition }}
                className="group flex cursor-pointer flex-col items-center overflow-hidden rounded-2xl border border-surface-300 bg-surface-100 p-6 text-center transition-colors duration-300 hover:border-accent/40"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-midnight-900 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-midnight-900">
                  <Icon className="h-7 w-7" />
                </div>
                <div className="mt-4 font-display text-base font-bold text-midnight-900">
                  {cert.code}
                </div>
                <div className="mt-1 text-xs leading-snug text-midnight-400">
                  {cert.label}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
