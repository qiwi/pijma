import { enUS, ru } from 'date-fns/locale'

export const locales = {
  en: enUS,
  ru,
}

export type TLanguage = keyof typeof locales
