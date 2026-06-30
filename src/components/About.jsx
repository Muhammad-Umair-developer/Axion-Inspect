import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const BULLETS = [
  {
    title: 'Fully Independent Third-Party Services',
    text: 'Unbiased inspection and verification with no conflict of interest.',
  },
  {
    title: 'Internationally Certified Professionals',
    text: 'Inspectors qualified to global standards — WPQR, UT, RT, MT, PT, VT.',
  },
  {
    title: 'Rapid European Mobilization',
    text: 'On-site, anywhere in Europe, with fast deployment and coverage.',
  },
  {
    title: 'End-to-End Quality Assurance',
    text: 'Stage-wise inspection from manufacturing through pre-shipment.',
  },
]

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, x: -24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-white py-20 lg:py-28">
      <div className="container-px grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left — image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -bottom-5 -left-5 -z-10 h-full w-full rounded-3xl bg-primary/10" />
          <motion.div
            className="cursor-pointer overflow-hidden rounded-3xl shadow-card"
            whileHover={{ y: -6, transition: { duration: 0.4, ease: 'easeOut' } }}
          >
            <motion.img
              src="/images/dimensional-measurement.jpeg"
              alt="Inspector performing dimensional weld measurement"
              className="aspect-[4/3] w-full object-cover"
              whileHover={{ scale: 1.05, transition: { duration: 0.4, ease: 'easeOut' } }}
            />
          </motion.div>
          {/* Floating badge */}
          <div className="absolute -right-4 -top-4 rounded-2xl bg-navy px-5 py-4 text-white shadow-xl">
            <div className="font-display text-2xl font-bold text-accent">10+</div>
            <div className="text-xs text-white/70">Years of Expertise</div>
          </div>
        </motion.div>

        {/* Right — copy */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-eyebrow"
          >
            About Axion Inspect
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 font-display text-3xl font-extrabold leading-tight text-navy sm:text-4xl lg:text-[2.75rem]"
          >
            Delivering Precision and Reliability Across Borders
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-lg leading-relaxed text-navy-300"
          >
            Founded in 2014, AXION INSPECT SRL has grown into a trusted partner
            for industrial inspection across Europe. We deliver independent,
            standards-driven assurance that protects quality, ensures compliance,
            and keeps projects on schedule.
          </motion.p>

          {/* Bullets — staggered on scroll into view */}
          <motion.ul
            variants={list}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-8 space-y-5"
          >
            {BULLETS.map((b) => (
              <motion.li key={b.title} variants={item} className="flex gap-4">
                <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="font-display text-base font-semibold text-navy">
                    {b.title}
                  </h3>
                  <p className="mt-0.5 text-sm text-navy-300">{b.text}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
