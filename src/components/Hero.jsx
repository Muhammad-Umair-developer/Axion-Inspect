import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Phone } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { reveal, stagger, EASE, hoverTransition } from '../lib/motion'

// Per-word masked slide-up — each word rises from behind an overflow-hidden mask
const wordContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
}
const wordChild = {
  hidden: { y: '115%' },
  show: { y: 0, transition: { duration: 0.7, ease: EASE } },
}

function Word({ children, className = '' }) {
  return (
    <span className="inline-block overflow-hidden align-bottom">
      <motion.span variants={wordChild} className={`inline-block ${className}`}>
        {children}
      </motion.span>
    </span>
  )
}

export default function Hero() {
  const { t } = useLanguage()
  const leadWords = t('hero.titleLead').split(' ')
  const tailWords = t('hero.titleTail').split(' ')

  return (
    <section id="home" className="relative overflow-hidden bg-cool-fade pt-20">
      {/* Decorative accent glows */}
      <div className="pointer-events-none absolute -right-32 -top-16 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-midnight-200/40 blur-3xl" />

      <div className="container-px grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2 lg:gap-12 lg:py-28">
        {/* Left — copy */}
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.span variants={reveal} className="eyebrow">
            <ShieldCheck className="h-4 w-4" />
            {t('hero.eyebrow')}
          </motion.span>

          {/* Word-staggered headline */}
          <motion.h1
            variants={wordContainer}
            className="mt-7 flex flex-wrap font-display text-5xl font-bold leading-[1.02] tracking-tightest text-midnight-900 sm:text-6xl xl:text-7xl"
          >
            {leadWords.map((w, i) => (
              <Word key={`l${i}`} className="mr-[0.25em]">
                {w}
              </Word>
            ))}
            <span className="relative mr-[0.25em] inline-block overflow-visible">
              <Word className="text-gradient">{t('hero.titleHighlight')}</Word>
              <motion.span
                className="absolute -bottom-1 left-0 h-1 rounded-full bg-accent"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.9 }}
              />
            </span>
            <span className="w-full" />
            {tailWords.map((w, i) => (
              <Word key={`t${i}`} className="mr-[0.25em]">
                {w}
              </Word>
            ))}
          </motion.h1>

          <motion.p
            variants={reveal}
            className="mt-7 max-w-xl text-lg leading-relaxed text-midnight-400"
          >
            {t('hero.body')}
          </motion.p>

          <motion.div variants={reveal} className="mt-9 flex flex-wrap gap-4">
            <motion.a
              href="#contact"
              className="btn-primary group"
              whileHover={{ y: -3 }}
              transition={hoverTransition}
            >
              {t('hero.ctaPrimary')}
              <motion.span className="inline-flex" whileHover={{ x: 4 }}>
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </motion.a>
            <a href="#contact" className="btn-ghost">
              <Phone className="h-4 w-4" /> {t('hero.ctaSecondary')}
            </a>
          </motion.div>
        </motion.div>

        {/* Right — graphic */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
          className="relative"
        >
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-accent/20 to-transparent blur-xl" />
          <div className="absolute inset-0 -z-10 translate-x-5 translate-y-5 rounded-[2rem] bg-midnight-800/5" />
          <motion.div
            className="cursor-pointer overflow-hidden rounded-[2rem] shadow-card ring-1 ring-midnight-100"
            whileHover={{ y: -6, transition: hoverTransition }}
          >
            <motion.img
              src="/images/hero-inspection.webp"
              alt={t('hero.imageAlt')}
              className="w-full"
              whileHover={{ scale: 1.05, transition: hoverTransition }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
