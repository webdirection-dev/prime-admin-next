'use client'

import { useAppSelector } from '@/utils/lib/store'
import { selectTheme } from '@/utils/lib/store/theme-slice'
import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
    const { theme } = useAppSelector(store => selectTheme(store))
    return (
        <Link
            href='/'
            className='logo flex-order-1 lg:flex-order-0 ml-auto lg:ml-0 flex align-items-center'
            style={{ color: 'var(--surface-900)' }}
        >
            <Image
                src={`/img/logo/logo-${theme !== 'light' ? 'white' : 'dark'}.svg`}
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