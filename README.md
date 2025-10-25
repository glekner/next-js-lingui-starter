# Next.js 16 + Lingui i18n Starter

A production-ready Next.js 16 starter template with Lingui i18n configured for server-side rendering.

## Features

- ✅ Next.js 16 App Router
- ✅ Lingui i18n with SSR support
- ✅ TypeScript
- ✅ Turbopack with .po file loader
- ✅ Multiple locales (English, Spanish, French)
- ✅ Locale switcher component
- ✅ Automatic locale detection and routing

## Getting Started

1. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

2. **Extract translation messages:**
   \`\`\`bash
   npm run lingui:extract
   \`\`\`

3. **Compile translations:**
   \`\`\`bash
   npm run lingui:compile
   \`\`\`

4. **Run the development server:**
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

\`\`\`
├── app/
│   ├── [locale]/          # Locale-based routing
│   │   ├── layout.tsx     # Root layout with LinguiProvider
│   │   ├── page.tsx       # Home page with translations
│   │   └── globals.css    # Global styles
│   └── page.tsx           # Root redirect to default locale
├── src/
│   ├── components/
│   │   ├── lingui-provider.tsx  # Client-side i18n provider
│   │   └── locale-switcher.tsx  # Language switcher
│   ├── locales/
│   │   ├── en/messages.po       # English translations
│   │   ├── es/messages.po       # Spanish translations
│   │   └── fr/messages.po       # French translations
│   └── i18n.ts            # i18n configuration
├── lingui.config.js       # Lingui configuration
└── next.config.mjs        # Next.js configuration
\`\`\`

## Usage

### Using Trans Component

\`\`\`tsx
import { Trans } from '@lingui/react/macro'

<Trans>Hello World</Trans>
\`\`\`

### Using Plural

\`\`\`tsx
import { Plural } from '@lingui/react/macro'

<Plural value={count} one="# item" other="# items" />
\`\`\`

### Adding New Translations

1. Add `<Trans>` components in your code
2. Run `npm run lingui:extract` to extract messages
3. Translate messages in `src/locales/*/messages.po` files
4. Run `npm run lingui:compile` to compile translations

## Configuration

The project uses the following Lingui versions as specified:
- @lingui/cli: 5.5.0
- @lingui/loader: 5.5.0
- @lingui/macro: 5.5.0
- @lingui/swc-plugin: 5.6.1

Turbopack is configured to load .po files, and the SWC plugin is enabled for macro transformations.
