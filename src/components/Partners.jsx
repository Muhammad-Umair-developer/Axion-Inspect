import { motion } from 'framer-motion'
import { Handshake, Trophy, Target, BadgeCheck } from 'lucide-react'

const COLUMNS = [
  {
    icon: Handshake,
    title: 'Strategic Partnerships',
    desc: 'Trusted collaborations with leading EPC contractors, fabricators and OEMs across the European industrial sector.',
    tags: ['EPC Contractors', 'Fabricators', 'OEMs'],
  },
  {
    icon: Trophy,
    title: 'Industry Recognition',
    desc: 'Recognised for excellence and integrity in independent third-party inspection, expediting and quality assurance.',
    tags: ['Quality Excellence', 'Proven Track Record', 'Client Trust'],
  },
  {
    icon: Target,
    title: 'Partners & Strategy',
    desc: 'Inspection programmes aligned to each client’s compliance, safety and delivery objectives — anywhere in Europe.',
    tags: ['Compliance-Driven', 'Risk-Aligned', 'On-Time Delivery'],
  },
]

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const col = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Partners() {
  return (
    <section className="scroll-mt-24 bg-white py-20 lg:py-24">
      <div className="container-px">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="section-eyebrow">Partners &amp; Strategy</span>
          <h2 className="mt-5 font-display text-3xl font-extrabold text-navy sm:text-4xl">
            Partners &amp; Recognition
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-navy-300">
            Built on strong industry relationships and a strategy centred on
            independence, integrity and measurable results.
          </p>
        </motion.div>

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid gap-8 md:grid-cols-3"
        >
          {COLUMNS.map(({ icon: Icon, title, desc, tags }) => (
            <motion.div
              key={title}
              variants={col}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.4, ease: 'easeOut' } }}
              className="group flex cursor-pointer flex-col items-center overflow-hidden rounded-2xl border border-navy-50 bg-white p-8 text-center shadow-card transition-[border-color,box-shadow] duration-300 hover:border-primary/30 hover:shadow-card-hover"
            >
              {/* Stamp-style seal badge */}
              <div className="relative flex h-24 w-24 items-center justify-center">
                <span className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30" />
                <span className="absolute inset-2 rounded-full border border-primary/20" />
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-7 w-7" />
                </span>
              </div>

              <h3 className="mt-6 font-display text-xl font-bold text-navy">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-300">{desc}</p>

              <ul className="mt-5 flex flex-wrap justify-center gap-2">
                {tags.map((tag) => (
                  <li
                    key={tag}
                    className="inline-flex items-center gap-1 rounded-full bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                  >
                    <BadgeCheck className="h-3.5 w-3.5" />
                    {tag}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
