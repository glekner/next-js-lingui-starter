import { i18n, type Messages } from "@lingui/core"
import { messages as enMessages } from "@/locales/en/messages"
import { messages as esMessages } from "@/locales/es/messages"
import { messages as frMessages } from "@/locales/fr/messages"

export const locales = {
  en: "English",
  es: "Español",
  fr: "Français",
} as const

export type LocaleCode = keyof typeof locales

export const defaultLocale: LocaleCode = "en"

export async function loadCatalog(locale: LocaleCode): Promise<Messages> {
  switch (locale) {
    case "en":
      return enMessages
    case "es":
      return esMessages
    case "fr":
      return frMessages
    default:
      return enMessages
  }
}

export async function activateLocale(locale: LocaleCode) {
  const messages = await loadCatalog(locale)
  i18n.load(locale, messages)
  i18n.activate(locale)
}
