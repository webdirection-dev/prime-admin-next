import 'server-only'
import type { Locale } from '@/utils/language/i18n.config'

const dictionaries = {
    en: () => import('@/utils/language/dictionaries/en.json').then(module => module.default),
    de: () => import('@/utils/language/dictionaries/de.json').then(module => module.default)
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()


// export const getDictionary = async (locale: Locale) => {
//     return (locale === 'en' || locale === 'de') ?
//         dictionaries[locale]() :
//         () => import('@/utils/language/dictionaries/en.json').then(module => module.default)
// }