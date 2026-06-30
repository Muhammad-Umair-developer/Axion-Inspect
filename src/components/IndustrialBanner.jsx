import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

// Staggered container + child variants for the scroll-triggered reveal
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
}

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function IndustrialBanner() {
  return (
    <section
      className="relative w-full overflow-hidden bg-navy bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/industrial-facility.jpeg')" }}
    >
      {/* Dark overlay for text readability — layered gradient for depth */}
      <div className="absolute inset-0 bg-navy/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-navy/60" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="container-px relative z-10 max-w-7xl py-24 lg:py-32"
      >
        <div className="max-w-3xl">
          <motion.span
            variants={fadeIn}
            className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Excellence in Every Inspection
          </motion.span>

          <motion.h2
            variants={fadeIn}
            className="mt-6 font-display text-4xl font-extrabold leading-[1.12] text-white sm:text-5xl lg:text-6xl"
          >
            Demonstrating <span className="text-accent">Excellence</span>
            <br className="hidden sm:block" /> through{' '}
            <span className="text-accent">Innovation</span>
          </motion.h2>

          <motion.p
            variants={fadeIn}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75"
          >
            AXION INSPECT SRL is a comprehensive, end-to-end provider of
            independent inspection services across Europe. We combine decades of
            engineering expertise with rigorous quality standards to deliver
            precision, reliability, and complete regulatory compliance at every
            stage of your project.
          </motion.p>

          <motion.div variants={fadeIn} className="mt-9 flex flex-wrap gap-4">
            <a href="#contact" className="btn-accent">
              Request a Quote <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="btn border border-white/30 bg-transparent text-white hover:border-accent hover:text-accent"
            >
              Explore Our Services
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
