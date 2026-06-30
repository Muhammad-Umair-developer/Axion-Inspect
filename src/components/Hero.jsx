import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Phone } from 'lucide-react'

// Shared slide-up variant for staggered on-load reveals
const slideUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-20"
    >
      {/* Soft decorative blue glows */}
      <div className="pointer-events-none absolute -right-24 -top-10 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 top-1/2 h-72 w-72 rounded-full bg-accent/5 blur-3xl" />

      <div className="container-px grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-10 lg:py-24">
        {/* Left — copy */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span variants={slideUp} className="section-eyebrow">
            <ShieldCheck className="h-3.5 w-3.5" />
            European Third-Party Inspection Leader
          </motion.span>

          <motion.h1
            variants={slideUp}
            className="mt-6 font-display text-4xl font-extrabold leading-[1.1] text-navy sm:text-5xl xl:text-6xl"
          >
            Ensuring <span className="text-primary">Quality</span>
            <br className="hidden sm:block" /> and Compliance
          </motion.h1>

          <motion.p
            variants={slideUp}
            className="mt-6 max-w-xl text-lg leading-relaxed text-navy-300"
          >
            AXION INSPECT SRL provides comprehensive third-party inspection and
            expediting services across Europe. We ensure quality assurance,
            regulatory compliance, and on-time project execution — anywhere in
            Europe.
          </motion.p>

          <motion.div variants={slideUp} className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">
              Request a Quote <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-outline">
              <Phone className="h-4 w-4" /> Contact Us
            </a>
          </motion.div>
        </motion.div>

        {/* Right — graphic */}
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          className="relative"
        >
          <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-3xl bg-primary/10" />
          <motion.div
            className="cursor-pointer overflow-hidden rounded-3xl shadow-card"
            whileHover={{ y: -6, transition: { duration: 0.4, ease: 'easeOut' } }}
          >
            <motion.img
              src="/images/hero-inspection.webp"
              alt="3rd Party Inspection: How to Ensure Quality and Compliance"
              className="w-full"
              whileHover={{ scale: 1.05, transition: { duration: 0.4, ease: 'easeOut' } }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
