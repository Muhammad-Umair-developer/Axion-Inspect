import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

// lucide-react dropped brand glyphs, so use inline SVGs for recognizable socials
const LinkedInIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-7.1c0-1.7-.03-3.9-2.37-3.9-2.37 0-2.73 1.85-2.73 3.77V24h-4V8z" />
  </svg>
)
const XIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)
const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Contact', href: '#contact' },
]

const SERVICE_LINKS = [
  'Third-Party Inspection',
  'Expediting Services',
  'Quality Audits',
  'Non-Destructive Testing',
  'Vendor Oversight',
]

const SOCIALS = [
  { icon: LinkedInIcon, href: '#', label: 'LinkedIn' },
  { icon: XIcon, href: '#', label: 'X' },
  { icon: FacebookIcon, href: '#', label: 'Facebook' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white/70">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="container-px grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4"
      >
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/images/axion-logo-hero.png"
              alt="Axion Inspect SRL"
              className="h-11 w-11 rounded-lg object-cover"
            />
            <div className="font-display text-lg font-bold leading-tight text-white">
              AXION <span className="text-primary">INSPECT</span>
              <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">
                Anywhere in Europe
              </span>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed">
            European third-party inspection leader — ensuring quality, compliance
            and on-time delivery across the continent.
          </p>
          <div className="mt-6 flex gap-3">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-white/70 transition-colors hover:bg-primary hover:text-white"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
            Quick Links
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            {QUICK_LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="transition-colors hover:text-accent">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
            Services
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            {SERVICE_LINKS.map((s) => (
              <li key={s}>
                <a href="#services" className="transition-colors hover:text-accent">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
            Contact
          </h4>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
              <a href="mailto:info@axioninspect.com" className="hover:text-accent">
                srmech.electinspection16@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
              <a href="tel:+390101234567" className="hover:text-accent">
                +39 349 540 3226
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
              <span>Via Luca Combiaso 5, 16142 Genova, Italy</span>
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-px flex flex-col items-center justify-between gap-4 py-6 text-sm sm:flex-row">
          <p>© {new Date().getFullYear()} AXION INSPECT SRL. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-accent">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-accent">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
