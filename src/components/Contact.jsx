import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react'

const DETAILS = [
  {
    icon: Mail,
    label: 'Email Us',
    value: 'info@axioninspect.com',
    href: 'mailto:info@axioninspect.com',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '+39 010 1234 567',
    href: 'tel:+390101234567',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: 'Via XX Settembre, 16121 Genova, Italy',
    href: 'https://maps.google.com/?q=Genova,Italy',
  },
]

const EMPTY = { firstName: '', lastName: '', email: '', phone: '', message: '' }

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Contact() {
  const [form, setForm] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const update = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (!form.firstName.trim()) next.firstName = 'Required'
    if (!form.lastName.trim()) next.lastName = 'Required'
    if (!form.email.trim()) next.email = 'Required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = 'Enter a valid email'
    if (!form.message.trim()) next.message = 'Required'
    return next
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length === 0) {
      // No backend — simulate a successful submission
      setSent(true)
      setForm(EMPTY)
    }
  }

  const inputClass = (name) =>
    `w-full rounded-lg border bg-white px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-navy-200 focus:border-primary focus:ring-2 focus:ring-primary/20 ${
      errors[name] ? 'border-red-400' : 'border-navy-100'
    }`

  return (
    <section id="contact" className="scroll-mt-24 bg-white py-20 lg:py-28">
      <div className="container-px">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="section-eyebrow">Get In Touch</span>
          <h2 className="mt-5 font-display text-3xl font-extrabold text-navy sm:text-4xl lg:text-5xl">
            Request a Quote
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-navy-300">
            Ready to ensure quality and compliance on your next project? Contact
            AXION INSPECT SRL — anywhere in Europe.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left — contact info */}
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col"
          >
            <h3 className="font-display text-2xl font-bold text-navy">
              Contact Information
            </h3>
            <p className="mt-3 text-navy-300">
              Reach our team directly — we respond to every enquiry within one
              business day.
            </p>

            <ul className="mt-8 space-y-5">
              {DETAILS.map(({ icon: Icon, label, value, href }) => (
                <li key={label}>
                  <motion.a
                    href={href}
                    whileHover={{ y: -4, transition: { duration: 0.4, ease: 'easeOut' } }}
                    className="group flex cursor-pointer items-start gap-4 overflow-hidden rounded-2xl border border-navy-50 p-5 transition-colors hover:border-primary/30 hover:bg-navy-50/40"
                  >
                    <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-navy-300">
                        {label}
                      </span>
                      <span className="mt-1 block font-medium text-navy">
                        {value}
                      </span>
                    </span>
                  </motion.a>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl bg-navy p-6 text-white">
              <div className="font-display text-lg font-bold text-accent">
                Anywhere in Europe
              </div>
              <p className="mt-1 text-sm text-white/70">
                Rapid mobilization of certified inspectors across the continent.
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-3xl border border-navy-50 bg-navy-50/30 p-6 shadow-card sm:p-8"
          >
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                <CheckCircle2 className="h-16 w-16 text-primary" />
                <h3 className="mt-5 font-display text-2xl font-bold text-navy">
                  Thank you!
                </h3>
                <p className="mt-2 max-w-sm text-navy-300">
                  Your request has been received. Our team will get back to you
                  within one business day.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="btn-outline mt-6"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="mb-1.5 block text-sm font-medium text-navy">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      value={form.firstName}
                      onChange={update}
                      placeholder="John"
                      className={inputClass('firstName')}
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="mb-1.5 block text-sm font-medium text-navy">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      value={form.lastName}
                      onChange={update}
                      placeholder="Smith"
                      className={inputClass('lastName')}
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={update}
                      placeholder="john@company.com"
                      className={inputClass('email')}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-navy">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={update}
                      placeholder="+39 010 1234 567"
                      className={inputClass('phone')}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={update}
                    placeholder="Tell us about your project and inspection requirements..."
                    className={`${inputClass('message')} resize-y`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                  )}
                </div>

                <button type="submit" className="btn-primary w-full">
                  Submit <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
