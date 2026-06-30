import { motion } from 'framer-motion'
import { Award, BadgeCheck, ShieldCheck, FileBadge, Stamp, Globe2 } from 'lucide-react'

const CERTS = [
  { icon: Award, code: 'ISO 9001', label: 'Quality Management' },
  { icon: ShieldCheck, code: 'ISO 45001', label: 'Occupational Health & Safety' },
  { icon: Globe2, code: 'ISO 14001', label: 'Environmental Management' },
  { icon: BadgeCheck, code: 'EN ISO 9712', label: 'NDT Personnel Certification' },
  { icon: Stamp, code: 'PED 2014/68/EU', label: 'Pressure Equipment Directive' },
  { icon: FileBadge, code: 'API / ASNT', label: 'Industry Accreditation' },
]

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const badge = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Certifications() {
  return (
    <section className="scroll-mt-24 bg-navy-50/40 py-20 lg:py-24">
      <div className="container-px">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="section-eyebrow">Accredited &amp; Compliant</span>
          <h2 className="mt-5 font-display text-3xl font-extrabold text-navy sm:text-4xl">
            Technical Certifications &amp; Standards
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-navy-300">
            Our work is backed by internationally recognised certifications and
            full regulatory compliance.
          </p>
        </motion.div>

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
        >
          {CERTS.map(({ icon: Icon, code, label }) => (
            <motion.div
              key={code}
              variants={badge}
              whileHover={{ y: -6, scale: 1.03, transition: { duration: 0.4, ease: 'easeOut' } }}
              className="group flex cursor-pointer flex-col items-center overflow-hidden rounded-2xl border border-navy-50 bg-white p-6 text-center shadow-card transition-[border-color,box-shadow] duration-300 hover:border-primary/30 hover:shadow-card-hover"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                <Icon className="h-7 w-7" />
              </div>
              <div className="mt-4 font-display text-base font-bold text-navy">
                {code}
              </div>
              <div className="mt-1 text-xs leading-snug text-navy-300">{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
