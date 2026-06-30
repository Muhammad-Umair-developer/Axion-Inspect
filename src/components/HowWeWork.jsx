import { motion } from 'framer-motion'
import { ClipboardList, CalendarClock, HardHat, FileCheck2 } from 'lucide-react'

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

const row = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
}

const step = {
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="section-eyebrow">How We Work</span>
          <h2 className="mt-5 font-display text-3xl font-extrabold text-navy sm:text-4xl lg:text-5xl">
            Inspection &amp; Audit Excellence
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-navy-300">
            A structured, transparent process that delivers consistent, audit-ready
            results on every engagement.
          </p>
        </motion.div>

        <motion.div
          variants={row}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
        >
          {/* Connector line on desktop */}
          <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:block" />

          {STEPS.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={title} variants={step} className="relative text-center">
              <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/30">
                <Icon className="h-7 w-7" />
                <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-accent font-display text-sm font-bold text-navy">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-6 font-display text-lg font-bold text-navy">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-300">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
