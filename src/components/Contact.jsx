import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'
import { reveal, fromLeft, fromRight, inView, hoverTransition } from '../lib/motion'

const EMPTY = { firstName: '', lastName: '', email: '', phone: '', message: '' }

export default function Contact() {
  const { t } = useLang()
  const f = t('contact.form')
  const d = t('contact.details')

  const [form, setForm] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const update = (e) => {
    const { name, value } = e.target
    setForm((s) => ({ ...s, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (!form.firstName.trim()) next.firstName = f.required
    if (!form.lastName.trim()) next.lastName = f.required
    if (!form.email.trim()) next.email = f.required
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = f.invalidEmail
    if (!form.message.trim()) next.message = f.required
    return next
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length === 0) {
      setSent(true) // no backend — simulate success
      setForm(EMPTY)
    }
  }

  const inputClass = (name) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-sm text-midnight-900 outline-none transition-colors placeholder:text-midnight-300 focus:border-accent focus:ring-2 focus:ring-accent/20 ${
      errors[name] ? 'border-red-400' : 'border-surface-400'
    }`

  const DETAILS = [
    { icon: Mail, label: d.emailLabel, value: d.email, href: `mailto:${d.email}` },
    { icon: Phone, label: d.phoneLabel, value: d.phone, href: 'tel:+390101234567' },
    {
      icon: MapPin,
      label: d.addressLabel,
      value: d.address,
      href: 'https://maps.google.com/?q=Genova,Italy',
    },
  ]

  return (
    <section id="contact" className="scroll-mt-24 bg-white py-24 lg:py-32">
      <div className="container-px">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow">{t('contact.eyebrow')}</span>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tightest text-midnight-900 sm:text-5xl">
            {t('contact.title')}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-midnight-400">
            {t('contact.body')}
          </p>
        </motion.div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left — contact info */}
          <motion.div
            variants={fromLeft}
            initial="hidden"
            whileInView="show"
            viewport={inView}
          >
            <h3 className="font-display text-2xl font-bold text-midnight-900">
              {t('contact.infoTitle')}
            </h3>
            <p className="mt-3 text-midnight-400">{t('contact.infoBody')}</p>

            <ul className="mt-8 space-y-4">
              {DETAILS.map(({ icon: Icon, label, value, href }) => (
                <li key={label}>
                  <motion.a
                    href={href}
                    whileHover={{ y: -4, transition: hoverTransition }}
                    className="group flex cursor-pointer items-start gap-4 overflow-hidden rounded-2xl border border-surface-300 p-5 transition-colors hover:border-accent/40 hover:bg-surface-100"
                  >
                    <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-midnight-900 text-accent transition-colors group-hover:bg-accent group-hover:text-midnight-900">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-midnight-300">
                        {label}
                      </span>
                      <span className="mt-1 block font-medium text-midnight-800">
                        {value}
                      </span>
                    </span>
                  </motion.a>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl bg-midnight-900 p-6">
              <div className="font-display text-lg font-bold text-accent">
                {t('contact.highlightTitle')}
              </div>
              <p className="mt-1 text-sm text-white/70">
                {t('contact.highlightBody')}
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            variants={fromRight}
            initial="hidden"
            whileInView="show"
            viewport={inView}
            className="rounded-[1.75rem] border border-surface-300 bg-surface-100 p-6 shadow-soft sm:p-8"
          >
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                <CheckCircle2 className="h-16 w-16 text-accent-600" />
                <h3 className="mt-5 font-display text-2xl font-bold text-midnight-900">
                  {f.successTitle}
                </h3>
                <p className="mt-2 max-w-sm text-midnight-400">{f.successBody}</p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="btn-ghost mt-6"
                >
                  {f.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="mb-1.5 block text-sm font-medium text-midnight-800">
                      {f.firstName}
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      value={form.firstName}
                      onChange={update}
                      placeholder={f.firstNamePlaceholder}
                      className={inputClass('firstName')}
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="mb-1.5 block text-sm font-medium text-midnight-800">
                      {f.lastName}
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      value={form.lastName}
                      onChange={update}
                      placeholder={f.lastNamePlaceholder}
                      className={inputClass('lastName')}
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-midnight-800">
                      {f.email}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={update}
                      placeholder={f.emailPlaceholder}
                      className={inputClass('email')}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-midnight-800">
                      {f.phone}
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={update}
                      placeholder={f.phonePlaceholder}
                      className={inputClass('phone')}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-midnight-800">
                    {f.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={update}
                    placeholder={f.messagePlaceholder}
                    className={`${inputClass('message')} resize-y`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  className="btn-primary w-full"
                  whileHover={{ y: -2 }}
                  transition={hoverTransition}
                >
                  {f.submit} <Send className="h-4 w-4" />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
