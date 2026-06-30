import { motion } from 'framer-motion'
import {
  ClipboardList,
  CalendarClock,
  HardHat,
  FileCheck2,
  ShieldCheck,
} from 'lucide-react'

// Row 1 — the four-step excellence process
const STEPS = [
  {
    icon: ClipboardList,
    title: 'Requirement Analysis',
    desc: 'We review specifications, codes and client expectations to define a precise inspection scope.',
  },
  {
    icon: CalendarClock,
    title: 'Inspection Planning',
    desc: 'An Inspection & Test Plan (ITP) is prepared with clear hold points and a mobilization schedule.',
  },
  {
    icon: HardHat,
    title: 'On-Site Execution',
    desc: 'Certified inspectors perform stage-wise inspection, witnessing and non-destructive testing.',
  },
  {
    icon: FileCheck2,
    title: 'Reporting & Certification',
    desc: 'Detailed reports, compliance records and certificates are delivered for full traceability.',
  },
]

// Row 2 — verification stages arranged around the central hub
const STAGES = [
  'Document Review',
  'Material Check',
  'In-Process Inspection',
  'Witness Testing',
  'Final Verification',
  'Reporting & Sign-off',
]

// Pre-computed positions around a circle (viewBox/percentage units, center 50/50)
const NODE_POS = [
  { left: '50%', top: '5%' },
  { left: '89%', top: '27%' },
  { left: '89%', top: '73%' },
  { left: '50%', top: '95%' },
  { left: '11%', top: '73%' },
  { left: '11%', top: '27%' },
]

const row = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const fade = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function HowWeWork() {
  return (
    <section className="scroll-mt-24 bg-white py-20 lg:py-28">
      <div className="container-px">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="section-eyebrow">How We Work</span>
          <h2 className="mt-5 font-display text-3xl font-extrabold text-navy sm:text-4xl lg:text-5xl">
            A Proven Inspection Workflow
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-navy-300">
            A structured, transparent process that delivers consistent,
            audit-ready results on every engagement.
          </p>
        </motion.div>

        {/* ── Row 1: illustration left, process text right ── */}
        <div className="mt-16 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="cursor-pointer overflow-hidden rounded-3xl bg-primary/5 p-6 shadow-card sm:p-8"
            whileHover={{ y: -6, transition: { duration: 0.4, ease: 'easeOut' } }}
          >
            <motion.img
              src="/images/inspection-audit.png"
              alt="Inspection and audit excellence illustration"
              className="w-full rounded-2xl"
              whileHover={{ scale: 1.05, transition: { duration: 0.4, ease: 'easeOut' } }}
            />
          </motion.div>

          <motion.div
            variants={row}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3
              variants={fade}
              className="font-display text-2xl font-bold text-navy sm:text-3xl"
            >
              Inspection &amp; Audit Excellence
            </motion.h3>
            <motion.p variants={fade} className="mt-3 text-navy-300">
              From first review to final certification, every engagement follows
              a disciplined four-step path designed for full traceability.
            </motion.p>

            <ul className="mt-7 space-y-5">
              {STEPS.map(({ icon: Icon, title, desc }, i) => (
                <motion.li key={title} variants={fade} className="flex gap-4">
                  <span className="relative flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                    <Icon className="h-5 w-5" />
                    <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-navy">
                      {i + 1}
                    </span>
                  </span>
                  <div>
                    <h4 className="font-display text-base font-semibold text-navy">
                      {title}
                    </h4>
                    <p className="mt-0.5 text-sm text-navy-300">{desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* ── Row 2: orange central-hub verification diagram ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24 rounded-3xl bg-orange-50 px-6 py-14 sm:px-10"
        >
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-orange-600">
              Quality Assurance
            </span>
            <h3 className="mt-4 font-display text-2xl font-bold text-navy sm:text-3xl">
              Pre-Aligned Verification Process
            </h3>
            <p className="mt-3 text-navy-300">
              Every checkpoint feeds a single, centrally coordinated verification
              loop — keeping inspection, testing and reporting in lockstep.
            </p>
          </div>

          {/* Mobile: simple numbered list */}
          <ol className="mx-auto mt-10 grid max-w-md gap-3 md:hidden">
            {STAGES.map((stage, i) => (
              <li
                key={stage}
                className="flex items-center gap-3 rounded-xl border border-orange-200 bg-white p-3"
              >
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                  {i + 1}
                </span>
                <span className="font-medium text-navy">{stage}</span>
              </li>
            ))}
          </ol>

          {/* Desktop: circular hub diagram */}
          <div className="relative mx-auto mt-12 hidden aspect-square w-full max-w-xl md:block">
            {/* Connector lines + dashed ring */}
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
                stroke="#fb923c"
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
                  stroke="#fdba74"
                  strokeWidth="0.5"
                />
              ))}
            </svg>

            {/* Central hub */}
            <div className="absolute left-1/2 top-1/2 z-10 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-orange-500 text-center text-white shadow-xl shadow-orange-500/30">
              <ShieldCheck className="h-8 w-8" />
              <span className="mt-1 px-2 font-display text-sm font-bold leading-tight">
                Central Verification
              </span>
            </div>

            {/* Surrounding stage nodes */}
            {STAGES.map((stage, i) => (
              <div
                key={stage}
                className="absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
                style={{ left: NODE_POS[i].left, top: NODE_POS[i].top }}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-orange-400 bg-white font-display text-lg font-bold text-orange-600 shadow-md">
                  {i + 1}
                </span>
                <span className="mt-2 w-24 text-center text-xs font-semibold text-navy">
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
