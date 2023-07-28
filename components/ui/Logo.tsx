'use client'

import { useEffect, useState } from 'react'
import { useAppSelector } from '@/utils/lib/store'
import { selectMenuInfo } from '@/utils/lib/store/menu-slice'
import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
    const { isThemeLight } = useAppSelector(store => selectMenuInfo(store))
    const [theme, setTheme] = useState('')

    useEffect(() => {
        const getLinkTheme = () => {
            if (typeof window !== 'undefined') {
                const themeLink = document.getElementById('app-theme') as any
                const theme = themeLink.getAttribute('data-logo')
                setTheme(theme)
            }
        }

        getLinkTheme()

        if (typeof window !== 'undefined') {
            const themeLink = document.getElementById('app-theme') as any
            themeLink.addEventListener('load', getLinkTheme)
        }

        return () => {
            if (typeof window !== 'undefined') {
                const themeLink = document.getElementById('app-theme') as any
                themeLink.addEventListener('load', getLinkTheme)
            }
        }
    })

    return (
        <Link
            href='/'
            className='logo flex-order-1 lg:flex-order-0 ml-auto lg:ml-0 flex align-items-center'
            style={{ color: 'var(--surface-900)' }}
        >
            <Image
                src={`/img/logo/logo-${theme}.svg`}
                // src={`/img/logo/logo-${!isThemeLight ? 'white' : 'dark'}.svg`}
                width={47}
                height={35}
                alt="logo"
            />

            <span
                className='text-2xl ml-2'
                style={{ color: 'var(--surface-900)' }}
            >NEXT MGO</span>
        </Link>
    )
}