import { motion } from 'framer-motion'
import {
  Fuel,
  Zap,
  FlaskConical,
  Wind,
  Building2,
  Factory,
  Ship,
  Plane,
} from 'lucide-react'

const INDUSTRIES = [
  { icon: Fuel, name: 'Oil & Gas', desc: 'Upstream, midstream & downstream assets' },
  { icon: Zap, name: 'Power Generation', desc: 'Conventional & nuclear power plants' },
  { icon: FlaskConical, name: 'Petrochemical', desc: 'Refineries & process facilities' },
  { icon: Wind, name: 'Renewable Energy', desc: 'Wind, solar & hydrogen projects' },
  { icon: Building2, name: 'Infrastructure', desc: 'Bridges, pipelines & structures' },
  { icon: Factory, name: 'Manufacturing', desc: 'Heavy equipment & fabrication' },
  { icon: Ship, name: 'Marine', desc: 'Shipbuilding & offshore structures' },
  { icon: Plane, name: 'Aerospace', desc: 'Precision components & assemblies' },
]

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const tile = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Industries() {
  return (
    <section
      id="industries"
      className="relative scroll-mt-24 overflow-hidden bg-primary py-20 lg:py-28"
    >
      {/* Subtle texture */}
      <div className="pointer-events-none absolute inset-0 bg-hero-grid bg-[size:44px_44px] opacity-20" />
      <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="container-px relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white">
            Industries We Serve
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Diverse Industry Expertise
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/80">
            Trusted across Europe's most demanding sectors — delivering
            independent inspection wherever quality and safety are critical.
          </p>
        </motion.div>

        {/* Tiles */}
        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {INDUSTRIES.map(({ icon: Icon, name, desc }) => (
            <motion.div
              key={name}
              variants={tile}
              whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.4, ease: 'easeOut' } }}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-white/25 bg-white/5 p-6 backdrop-blur-sm transition-[border-color,background-color] duration-300 hover:border-white/60 hover:bg-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-white transition-colors group-hover:bg-accent group-hover:text-navy">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-white">
                {name}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/70">
                {desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
