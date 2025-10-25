"use client"

import type React from "react"

import { i18n } from "@lingui/core"
import { I18nProvider } from "@lingui/react"
import { useEffect } from "react"
import type { Messages } from "@lingui/core"
import type { LocaleCode } from "@/i18n"

type LinguiProviderProps = {
  children: React.ReactNode
  locale: LocaleCode
  messages: Messages
}

export function LinguiProvider({ children, locale, messages }: LinguiProviderProps) {
  useEffect(() => {
    i18n.load(locale, messages)
    i18n.activate(locale)
  }, [locale, messages])

  return <I18nProvider i18n={i18n}>{children}</I18nProvider>
}
