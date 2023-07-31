// export { default } from 'next-auth/middleware'
// export const config = { matcher: ['/profile', '/protected/:path*'] }

// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

// export function middleware(req: NextRequest) {
//     const { pathname, searchParams } = req.nextUrl

//     console.log(pathname)

//     if (pathname === '/') {
//         return NextResponse.redirect(new URL('/en', req.url))
//     }

//     return NextResponse.next()
//     // return NextResponse.redirect(new URL('/en/team', req.url))
// }

// export const config = {
//     // Matcher ignoring `/_next/` and `/api/`
//     // matcher: '/en/about'
//     matcher: ['/((?!api|_next/static|_next/img|favicon.ico).*)']
// }



import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { i18n } from '@/i18n.config'

import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

function getLocale(request: NextRequest): string | undefined {
    const negotiatorHeaders: Record<string, string> = {}
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

    // @ts-ignore locales are readonly
    const locales: string[] = i18n.locales
    const languages = new Negotiator({ headers: negotiatorHeaders }).languages()

    const locale = matchLocale(languages, locales, i18n.defaultLocale)
    return locale
}

export function middleware(request: NextRequest) {
    // const pathname = request.nextUrl.pathname

    // const isTheme = pathname.endsWith('.svg')

    // const pathnameIsMissingLocale = i18n.locales.every(
    //     locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    // )

    // // Redirect if there is no locale
    // if (!isTheme && pathnameIsMissingLocale) {
    //     const locale = getLocale(request)
    //     return NextResponse.redirect(
    //         new URL(
    //             `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
    //             request.url
    //         )
    //     )
    // }
}

export const config = {
    // Matcher ignoring `/_next/` and `/api/`
    // matcher: ['/((?!api|_next/static|_next/img|favicon.ico).*)']
}