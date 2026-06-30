import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'
import { reveal, revealFast, stagger, inView, hoverTransition } from '../lib/motion'

export default function About() {
  const { t } = useLang()
  const points = t('about.points')

  return (
    <section id="about" className="scroll-mt-24 bg-white py-24 lg:py-32">
      <div className="container-px grid gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Left — typography hook + image */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={inView}
        >
          <motion.span variants={reveal} className="eyebrow">
            {t('about.eyebrow')}
          </motion.span>
          <motion.h2
            variants={reveal}
            className="mt-6 max-w-md font-display text-4xl font-bold leading-[1.05] tracking-tightest text-midnight-900 sm:text-5xl"
          >
            {t('about.hook')}
          </motion.h2>

          <motion.div variants={reveal} className="relative mt-10 max-w-lg">
            <motion.div
              className="cursor-pointer overflow-hidden rounded-[1.75rem] shadow-card ring-1 ring-midnight-100"
              whileHover={{ y: -6, transition: hoverTransition }}
            >
              <motion.img
                src="/images/industrial-facility.jpeg"
                alt="Night-time industrial facility skyline across Europe"
                className="aspect-[16/10] w-full object-cover"
                whileHover={{ scale: 1.05, transition: hoverTransition }}
              />
            </motion.div>
            <div className="absolute -right-4 -top-4 rounded-2xl bg-midnight-900 px-5 py-4 shadow-xl">
              <div className="font-display text-2xl font-bold text-accent">
                {t('about.badgeValue')}
              </div>
              <div className="text-xs text-white/70">{t('about.badgeLabel')}</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right — Who We Are / What We Do */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="grid gap-8 self-center sm:grid-cols-2"
        >
          {/* Who We Are */}
          <motion.div
            variants={revealFast}
            className="rounded-2xl border border-surface-300 bg-surface-100 p-7"
          >
            <div className="h-1 w-10 rounded-full bg-accent" />
            <h3 className="mt-5 font-display text-xl font-bold text-midnight-900">
              {t('about.whoTitle')}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-midnight-400">
              {t('about.body')}
            </p>
          </motion.div>

          {/* What We Do */}
          <motion.div
            variants={revealFast}
            className="rounded-2xl border border-surface-300 bg-surface-100 p-7"
          >
            <div className="h-1 w-10 rounded-full bg-accent" />
            <h3 className="mt-5 font-display text-xl font-bold text-midnight-900">
              {t('about.whatTitle')}
            </h3>
            <ul className="mt-4 space-y-3">
              {points.map((p) => (
                <li key={p.title} className="flex gap-3">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent-700">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="text-sm font-medium text-midnight-700">
                    {p.title}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
