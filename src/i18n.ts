import { setupI18n, type I18n, type Messages } from "@lingui/core";

export const locales = {
  en: "English",
  es: "Español",
  fr: "Français",
} as const;

export type LocaleCode = keyof typeof locales;

export const defaultLocale: LocaleCode = "en";

export function assertLocale(locale: string): asserts locale is LocaleCode {
  if (!Object.keys(locales).includes(locale)) {
    throw new Error(`Invalid locale: ${locale}`);
  }
}

export async function loadCatalog(locale: LocaleCode): Promise<Messages> {
  const { messages } = await import(`./locales/${locale}/messages.po`);

  return messages;
}

export async function getI18nInstance(locale: LocaleCode): Promise<I18n> {
  assertLocale(locale);

  const messages = await loadCatalog(locale);
  const instance = setupI18n({
    locale,
    messages: {
      [locale]: messages,
    },
  });

  return instance;
}
