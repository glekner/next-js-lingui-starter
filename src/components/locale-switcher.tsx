"use client"

import { useRouter, usePathname } from "next/navigation"
import { locales, type LocaleCode } from "@/i18n"

export function LocaleSwitcher({ currentLocale }: { currentLocale: LocaleCode }) {
  const router = useRouter()
  const pathname = usePathname()

  const handleLocaleChange = (newLocale: LocaleCode) => {
    // Remove current locale from pathname
    const segments = pathname.split("/")
    segments[1] = newLocale
    const newPathname = segments.join("/")

    router.push(newPathname)
  }

  return (
    <div className="flex gap-2">
      {Object.entries(locales).map(([code, name]) => (
        <button
          key={code}
          onClick={() => handleLocaleChange(code as LocaleCode)}
          className={`px-3 py-1 rounded ${
            currentLocale === code ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          {name}
        </button>
      ))}
    </div>
  )
}
