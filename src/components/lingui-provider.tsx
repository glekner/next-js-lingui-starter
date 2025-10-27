"use client";

import type React from "react";

import type { LocaleCode } from "@/i18n";
import type { Messages } from "@lingui/core";
import { setupI18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { useState } from "react";

type LinguiProviderProps = {
  children: React.ReactNode;
  locale: LocaleCode;
  messages: Messages;
};

export function LinguiProvider({
  children,
  locale,
  messages,
}: LinguiProviderProps) {
  const [i18n] = useState(() => {
    return setupI18n({
      locale,
      messages: {
        [locale]: messages,
      },
    });
  });

  return <I18nProvider i18n={i18n}>{children}</I18nProvider>;
}
