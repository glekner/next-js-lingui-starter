import { LinguiProvider } from "@/components/lingui-provider";
import { loadCatalog, locales, type LocaleCode } from "@/i18n";
import type { Metadata } from "next";
import type React from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js + Lingui Starter",
  description: "Next.js 16 with Lingui i18n SSR support",
};

export async function generateStaticParams() {
  return Object.keys(locales).map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: LocaleCode }>;
}) {
  const { locale } = await params;

  const messages = await loadCatalog(locale);

  return (
    <html lang={locale}>
      <body>
        <LinguiProvider locale={locale} messages={messages}>
          {children}
        </LinguiProvider>
      </body>
    </html>
  );
}
