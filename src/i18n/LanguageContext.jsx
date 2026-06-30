import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from 'react'
import { dictionaries } from './translations'

const LanguageContext = createContext(null)

const STORAGE_KEY = 'axion-locale'
const DEFAULT_LOCALE = 'en'

export function LanguageProvider({ children }) {
  const [locale, setLocaleState] = useState(() => {
    if (typeof window === 'undefined') return DEFAULT_LOCALE
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved && dictionaries[saved] ? saved : DEFAULT_LOCALE
  })

  const setLocale = useCallback((next) => {
    if (!dictionaries[next]) return
    setLocaleState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
      document.documentElement.lang = next
    } catch {
      /* ignore storage failures */
    }
  }, [])

  // Resolve a dot-path (e.g. "hero.titleHighlight") to any node — string,
  // array or object. Falls back to English, then to the raw path.
  const t = useCallback(
    (path) => {
      const read = (dict) =>
        path.split('.').reduce((node, key) => node?.[key], dict)
      const value = read(dictionaries[locale])
      if (value !== undefined && value !== null) return value
      return read(dictionaries[DEFAULT_LOCALE]) ?? path
    },
    [locale],
  )

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t,
      // Back-compat aliases
      lang: locale,
      setLang: setLocale,
    }),
    [locale, setLocale, t],
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

// Canonical hook
export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx)
    throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}

// Deprecated alias kept for existing imports
export const useLang = useLanguage
