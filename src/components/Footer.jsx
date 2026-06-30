import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'
import { stagger, revealFast, inView } from '../lib/motion'

// lucide-react dropped brand glyphs — inline SVGs for recognizable socials
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

const SOCIALS = [
  { icon: LinkedInIcon, href: '#', label: 'LinkedIn' },
  { icon: XIcon, href: '#', label: 'X' },
  { icon: FacebookIcon, href: '#', label: 'Facebook' },
]

const LINK_KEYS = ['home', 'about', 'services', 'industries', 'contact']

export default function Footer() {
  const { t } = useLang()
  const quickLinks = t('footer.quickLinks')
  const serviceLinks = t('footer.serviceLinks')

  return (
    <footer className="bg-midnight-900 text-white/65">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={inView}
        className="container-px grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4"
      >
        {/* Brand */}
        <motion.div variants={revealFast}>
          <div className="flex items-center gap-3">
            <img
              src="/images/axion-logo-hero.png"
              alt={t('nav.brand')}
              className="h-11 w-11 rounded-xl object-cover ring-1 ring-white/10"
            />
            <div className="font-display text-lg font-bold leading-tight text-white">
              {t('nav.brand')}
              <span className="block text-[10px] font-medium uppercase tracking-[0.22em] text-white/40">
                {t('nav.tagline')}
              </span>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed">{t('footer.blurb')}</p>
          <div className="mt-6 flex gap-3">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white/70 transition-colors hover:bg-accent hover:text-midnight-900"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Quick links */}
        <motion.div variants={revealFast}>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
            {t('footer.quickLinksTitle')}
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            {quickLinks.map((label, i) => (
              <li key={label}>
                <a href={`#${LINK_KEYS[i]}`} className="transition-colors hover:text-accent">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div variants={revealFast}>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
            {t('footer.servicesTitle')}
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            {serviceLinks.map((label) => (
              <li key={label}>
                <a href="#services" className="transition-colors hover:text-accent">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div variants={revealFast}>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
            {t('footer.contactTitle')}
          </h4>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
              <a href={`mailto:${t('contact.details.email')}`} className="hover:text-accent">
                {t('contact.details.email')}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
              <a href="tel:+393495403226" className="hover:text-accent">
                {t('contact.details.phone')}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
              <span>{t('contact.details.address')}</span>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-px flex flex-col items-center justify-between gap-4 py-6 text-sm sm:flex-row">
          <p>
            © {new Date().getFullYear()} {t('nav.brand')}. {t('footer.rights')}
          </p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-accent">
              {t('footer.privacy')}
            </a>
            <a href="#" className="transition-colors hover:text-accent">
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
