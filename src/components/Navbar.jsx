import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { LANGUAGES } from '../i18n/translations'

const LINK_KEYS = ['home', 'about', 'services', 'industries', 'contact']

function LangSwitcher({ idSuffix = '' }) {
  const { locale, setLocale } = useLanguage()
  return (
    <div className="inline-flex items-center rounded-full border border-midnight-200/80 p-0.5">
      {LANGUAGES.map(({ code, label }) => {
        const active = locale === code
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={active}
            className="relative rounded-full px-3 py-1 text-xs font-bold tracking-wide transition-colors"
          >
            {active && (
              <motion.span
                layoutId={`lang-pill${idSuffix}`}
                className="absolute inset-0 rounded-full bg-midnight-900"
                transition={{ type: 'spring', stiffness: 400, damping: 32 }}
              />
            )}
            <span
              className={`relative z-10 ${active ? 'text-accent' : 'text-midnight-400'}`}
            >
              {label}
            </span>
          </button>
        )
      })}
    </div>
  )
}

export default function Navbar() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleLinkClick = (e, targetId) => {
    setOpen(false)
    setTimeout(() => {
      const el = document.getElementById(targetId)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'glass shadow-glass' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 w-full max-w-content items-center justify-between gap-3 px-6 sm:px-8 lg:px-16">
        {/* Brand lockup — logo + AXION INSPECT SRL */}
        <a
          href="#home"
          className="flex shrink-0 items-center gap-2.5"
          aria-label={t('nav.brand')}
        >
          <img
            src="/images/axion-logo-hero.png"
            alt={t('nav.brand')}
            className="h-10 w-10 shrink-0 rounded-xl object-cover ring-1 ring-midnight-100"
          />
          {/* Full brand + tagline at lg+ (room to breathe) */}
          <span className="hidden flex-col justify-center leading-none lg:flex">
            <span className="font-display text-[15px] font-bold leading-none tracking-tight text-midnight-900">
              {t('nav.brand')}
            </span>
            <span className="mt-1 text-[10px] font-medium uppercase leading-none tracking-[0.22em] text-midnight-300">
              {t('nav.tagline')}
            </span>
          </span>
          {/* Brand name on phones (below md); md..lg shows logo only to avoid crowding */}
          <span className="font-display text-[15px] font-bold leading-none tracking-tight text-midnight-900 md:hidden">
            {t('nav.brand')}
          </span>
        </a>

        {/* Centered links (md+) */}
        <ul className="hidden flex-1 items-center justify-center gap-5 md:flex lg:gap-9">
          {LINK_KEYS.map((key) => (
            <li key={key}>
              <a
                href={`#${key}`}
                className="group relative text-sm font-medium text-midnight-500 transition-colors hover:text-midnight-900"
              >
                {t(`nav.links.${key}`)}
                <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Right cluster (md+) */}
        <div className="hidden shrink-0 items-center gap-2.5 md:flex lg:gap-3">
          <LangSwitcher />
          <motion.a
            href="#contact"
            className="btn-primary !px-4 !py-2.5 lg:!px-5"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {t('nav.cta')}
            <ArrowUpRight className="h-4 w-4" />
          </motion.a>
        </div>

        {/* Mobile toggle (below md) */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-midnight-900 transition-colors hover:bg-midnight-50 md:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? 'close' : 'open'}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.span>
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile drawer — sliding + fading */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 top-20 z-40 bg-midnight-900/40 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -16, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -16, height: 0 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-50 overflow-hidden glass md:hidden"
            >
              <ul className="container-px flex flex-col gap-1 py-5">
                {LINK_KEYS.map((key, i) => (
                  <motion.li
                    key={key}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * i + 0.05, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <a
                      href={`#${key}`}
                      onClick={(e) => handleLinkClick(e, key)}
                      className="block rounded-xl px-4 py-3 text-base font-medium text-midnight-700 transition-colors hover:bg-midnight-50 hover:text-midnight-900"
                    >
                      {t(`nav.links.${key}`)}
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * LINK_KEYS.length + 0.05 }}
                  className="flex items-center justify-between gap-3 px-2 pt-4"
                >
                  <LangSwitcher idSuffix="-m" />
                  <a
                    href="#contact"
                    onClick={(e) => handleLinkClick(e, 'contact')}
                    className="btn-primary flex-1"
                  >
                    {t('nav.cta')}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </motion.li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
