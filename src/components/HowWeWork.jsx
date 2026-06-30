import { motion } from 'framer-motion'
import {
  ClipboardList,
  CalendarClock,
  HardHat,
  FileCheck2,
  ShieldCheck,
} from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'
import {
  reveal,
  revealFast,
  stagger,
  fromLeft,
  inView,
  EASE,
  hoverTransition,
} from '../lib/motion'

const STEP_ICONS = [ClipboardList, CalendarClock, HardHat, FileCheck2]

// Pre-computed positions around a circle (percentage units, center 50/50)
const NODE_POS = [
  { left: '50%', top: '5%' },
  { left: '89%', top: '27%' },
  { left: '89%', top: '73%' },
  { left: '50%', top: '95%' },
  { left: '11%', top: '73%' },
  { left: '11%', top: '27%' },
]

export default function HowWeWork() {
  const { t } = useLang()
  const steps = t('howWeWork.steps')
  const stages = t('howWeWork.stages')

  return (
    <section className="scroll-mt-24 bg-surface-100 py-24 lg:py-32">
      <div className="container-px">
        {/* Heading */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow">{t('howWeWork.eyebrow')}</span>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tightest text-midnight-900 sm:text-5xl">
            {t('howWeWork.title')}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-midnight-400">
            {t('howWeWork.body')}
          </p>
        </motion.div>

        {/* ── Row 1: illustration left, process text right ── */}
        <div className="mt-20 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={fromLeft}
            initial="hidden"
            whileInView="show"
            viewport={inView}
            className="cursor-pointer overflow-hidden rounded-[1.75rem] bg-white p-6 shadow-card ring-1 ring-midnight-100 sm:p-8"
            whileHover={{ y: -6, transition: hoverTransition }}
          >
            <motion.img
              src="/images/inspection-audit.png"
              alt={t('howWeWork.illustrationAlt')}
              className="w-full rounded-2xl"
              whileHover={{ scale: 1.05, transition: hoverTransition }}
            />
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={inView}
          >
            <motion.h3
              variants={revealFast}
              className="font-display text-2xl font-bold tracking-tightest text-midnight-900 sm:text-3xl"
            >
              {t('howWeWork.row1Title')}
            </motion.h3>
            <motion.p variants={revealFast} className="mt-3 text-midnight-400">
              {t('howWeWork.row1Body')}
            </motion.p>

            <ul className="mt-7 space-y-5">
              {steps.map((step, i) => {
                const Icon = STEP_ICONS[i]
                return (
                  <motion.li key={step.title} variants={revealFast} className="flex gap-4">
                    <span className="relative flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-midnight-900 text-accent">
                      <Icon className="h-5 w-5" />
                      <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-midnight-900">
                        {i + 1}
                      </span>
                    </span>
                    <div>
                      <h4 className="font-display text-base font-semibold text-midnight-900">
                        {step.title}
                      </h4>
                      <p className="mt-0.5 text-sm text-midnight-400">{step.desc}</p>
                    </div>
                  </motion.li>
                )
              })}
            </ul>
          </motion.div>
        </div>

        {/* ── Row 2: central-hub verification diagram ── */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mt-24 rounded-[2rem] bg-midnight-900 px-6 py-16 sm:px-10"
        >
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow-light">{t('howWeWork.row2Eyebrow')}</span>
            <h3 className="mt-4 font-display text-2xl font-bold tracking-tightest text-white sm:text-3xl">
              {t('howWeWork.row2Title')}
            </h3>
            <p className="mt-3 text-white/65">{t('howWeWork.row2Body')}</p>
          </div>

          {/* Mobile: numbered list */}
          <ol className="mx-auto mt-10 grid max-w-md gap-3 md:hidden">
            {stages.map((stage, i) => (
              <li
                key={stage}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3"
              >
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-midnight-900">
                  {i + 1}
                </span>
                <span className="font-medium text-white">{stage}</span>
              </li>
            ))}
          </ol>

          {/* Desktop: circular hub */}
          <div className="relative mx-auto mt-12 hidden aspect-square w-full max-w-xl md:block">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full"
            >
              <circle
                cx="50"
                cy="50"
                r="44"
                fill="none"
                stroke="#00E0C6"
                strokeOpacity="0.45"
                strokeWidth="0.4"
                strokeDasharray="2 2"
              />
              {NODE_POS.map((p, i) => (
                <line
                  key={i}
                  x1="50"
                  y1="50"
                  x2={parseFloat(p.left)}
                  y2={parseFloat(p.top)}
                  stroke="#00E0C6"
                  strokeOpacity="0.3"
                  strokeWidth="0.5"
                />
              ))}
            </svg>

            <div className="absolute left-1/2 top-1/2 z-10 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-accent text-center text-midnight-900 shadow-glow">
              <ShieldCheck className="h-8 w-8" />
              <span className="mt-1 px-2 font-display text-sm font-bold leading-tight">
                {t('howWeWork.hubLabel')}
              </span>
            </div>

            {stages.map((stage, i) => (
              <div
                key={stage}
                className="absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
                style={{ left: NODE_POS[i].left, top: NODE_POS[i].top }}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent/50 bg-midnight-800 font-display text-lg font-bold text-accent shadow-md">
                  {i + 1}
                </span>
                <span className="mt-2 w-24 text-center text-xs font-semibold text-white/80">
                  {stage}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
