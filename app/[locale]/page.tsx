import { Trans } from "@lingui/react/macro";
import { setI18n } from "@lingui/react/server";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { getI18nInstance, type LocaleCode } from "@/i18n";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: LocaleCode }>;
}) {
  "use cache";

  const { locale } = await params;
  const i18n = await getI18nInstance(locale);
  setI18n(i18n);

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold">
            <Trans>Hello World</Trans>
          </h1>
          <LocaleSwitcher currentLocale={locale} />
        </div>

        <div className="space-y-4">
          <p className="text-lg">
            <Trans>Welcome to Next.js 16 with Lingui i18n!</Trans>
          </p>

          <p className="text-gray-600">
            <Trans>
              This is a starter template with server-side rendering support for
              internationalization.
            </Trans>
          </p>

          <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">
              <Trans>Features</Trans>
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <Trans>Next.js 16 App Router</Trans>
              </li>
              <li>
                <Trans>Lingui i18n with SSR support</Trans>
              </li>
              <li>
                <Trans>TypeScript configuration</Trans>
              </li>
              <li>
                <Trans>Multiple locale support (EN, ES, FR)</Trans>
              </li>
              <li>
                <Trans>Turbopack with .po file loader</Trans>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 dark:bg-green-950 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              <Trans>Getting Started</Trans>
            </h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                <Trans>Run `npm run lingui:extract` to extract messages</Trans>
              </li>
              <li>
                <Trans>Translate messages in src/locales/*/messages.po</Trans>
              </li>
              <li>
                <Trans>
                  Run `npm run lingui:compile` to compile translations
                </Trans>
              </li>
              <li>
                <Trans>Switch languages using the buttons above</Trans>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </main>
  );
}
