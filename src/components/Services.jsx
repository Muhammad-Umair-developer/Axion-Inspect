import { motion } from 'framer-motion'
import {
  ClipboardCheck,
  Timer,
  Gauge,
  ScanLine,
  Flame,
  Paintbrush,
  PackageCheck,
  Users,
  Network,
} from 'lucide-react'

const SERVICES = [
  {
    icon: ClipboardCheck,
    title: 'Third-Party Inspection',
    desc: 'Independent stage-wise inspections, manufacturing reviews and certification across the full project lifecycle.',
  },
  {
    icon: Timer,
    title: 'Expediting Services',
    desc: 'Proactive timeline management and vendor-client coordination to keep deliveries on schedule.',
  },
  {
    icon: Gauge,
    title: 'Quality Audits',
    desc: 'Thorough supplier evaluations, system audits and compliance analysis against international standards.',
  },
  {
    icon: ScanLine,
    title: 'Non-Destructive Testing',
    desc: 'Advanced NDT methods — UT, RT, MT, PT and VT — performed by certified Level II/III technicians.',
  },
  {
    icon: Flame,
    title: 'Welding & Coating',
    desc: 'WPQR review, welder qualification and coating verification to ensure structural integrity.',
  },
  {
    icon: Paintbrush,
    title: 'Painting Inspection',
    desc: 'Surface preparation checks, DFT measurement and full coating-system verification.',
  },
  {
    icon: PackageCheck,
    title: 'Pre-Shipment Verification',
    desc: 'Final product checks, packing and documentation review before dispatch from the vendor.',
  },
  {
    icon: Users,
    title: 'Technical Manpower',
    desc: 'Certified inspectors and engineers for temporary or long-term on-site assignments.',
  },
  {
    icon: Network,
    title: 'Vendor Oversight',
    desc: 'Supply-chain coordination and continuous progress monitoring across multiple vendors.',
  },
]

const PROJECTS = [
  { src: '/images/ndt-testing.jpeg', label: 'Non-Destructive Testing' },
  { src: '/images/dimensional-measurement.jpeg', label: 'Precision Measurement' },
  { src: '/images/welding-inspection.jpeg', label: 'Welding Inspection' },
  { src: '/images/painting-inspection.png', label: 'Painting Inspection' },
  { src: '/images/vendor-oversight.png', label: 'Vendor Oversight' },
]

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const card = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-navy-50/40 py-20 lg:py-28">
      <div className="container-px">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="section-eyebrow">What We Do</span>
          <h2 className="mt-5 font-display text-3xl font-extrabold text-navy sm:text-4xl lg:text-5xl">
            Comprehensive Inspection Solutions
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-navy-300">
            A complete suite of independent inspection, testing and expediting
            services — covering every stage from fabrication to final delivery.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <motion.article
              key={title}
              variants={card}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.4, ease: 'easeOut' } }}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-navy-50 bg-white p-7 shadow-card transition-[border-color,box-shadow] duration-300 hover:border-primary/30 hover:shadow-card-hover"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-navy">
                {title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-navy-300">
                {desc}
              </p>
            </motion.article>
          ))}
        </motion.div>

        {/* Real-world project thumbnails */}
        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
        >
          {PROJECTS.map(({ src, label }) => (
            <motion.figure
              key={label}
              variants={card}
              whileHover={{ y: -6, transition: { duration: 0.4, ease: 'easeOut' } }}
              className="group relative cursor-pointer overflow-hidden rounded-xl shadow-card"
            >
              <motion.img
                src={src}
                alt={label}
                className="aspect-[4/3] w-full object-cover"
                whileHover={{ scale: 1.05, transition: { duration: 0.4, ease: 'easeOut' } }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent" />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 p-3 text-xs font-semibold text-white sm:text-sm">
                {label}
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
