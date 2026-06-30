import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'
import { reveal, stagger, inView, hoverTransition } from '../lib/motion'

export default function IndustrialBanner() {
  const { t } = useLang()

  return (
    <section className="relative w-full overflow-hidden bg-midnight-900">
      {/* Minimal texture + accent glows */}
      <div className="pointer-events-none absolute inset-0 bg-grid-faint bg-[size:54px_54px] opacity-60" />
      <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={inView}
        className="container-px relative z-10 py-24 lg:py-32"
      >
        <div className="max-w-4xl">
          <motion.span variants={reveal} className="eyebrow-light">
            <Sparkles className="h-4 w-4" />
            {t('impact.eyebrow')}
          </motion.span>

          <motion.h2
            variants={reveal}
            className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tightest text-white sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            {t('impact.titleLead')}{' '}
            <span className="text-gradient">{t('impact.titleHighlightA')}</span>
            <br className="hidden sm:block" /> {t('impact.titleMid')}{' '}
            <span className="text-gradient">{t('impact.titleHighlightB')}</span>
          </motion.h2>

          <motion.p
            variants={reveal}
            className="mt-7 max-w-2xl text-lg leading-relaxed text-white/70"
          >
            {t('impact.body')}
          </motion.p>

          <motion.div variants={reveal} className="mt-10 flex flex-col sm:flex-row items-start gap-4">
            <motion.a
              href="#contact"
              className="btn-primary"
              whileHover={{ y: -3 }}
              transition={hoverTransition}
            >
              {t('impact.ctaPrimary')} <ArrowRight className="h-4 w-4" />
            </motion.a>
            <a href="#services" className="btn-ghost-light">
              {t('impact.ctaSecondary')}
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
