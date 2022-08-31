import enUS from 'date-fns/locale/en-US/index.js'
import ru from 'date-fns/locale/ru/index.js'

export const locales = {
  en: enUS,
  ru,
}

export type TLanguage = keyof typeof locales
