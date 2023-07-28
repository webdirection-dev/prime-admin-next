'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useAppSelector } from '@/utils/lib/store'
import { selectMenuInfo } from '@/utils/lib/store/menu-slice'

const Footer = () => {
    const { isThemeLight } = useAppSelector(store => selectMenuInfo(store))

    const classes = {
        borderTop: '1px solid var(--surface-border)',
    }

    return (
        <footer className='flex flex-column-reverse justify-content-between mr-5 pt-3 lg:flex-row' style={classes}>
            <p className='text-center text-500 w-full lg:w-5 lg:text-left'>NEXT MGO © {new Date().getFullYear()}</p>

            <Image
                src={`/img/logo/logo-${!isThemeLight ? 'white' : 'dark'}.svg`}
                width={27}
                height={20}
                alt="logo"
                className='mx-auto mb-2 lg:mb-0'
            />

            <div className='hidden justify-content-end w-full lg:w-5 lg:flex'>
                <p className='mr-1 text-500'>With </p>

                <i className="pi pi-heart mr-1 text-pink-300" ></i>

                <p className='mr-1 text-500'> by</p>
                <Link
                    className='text-blue-400'
                    href={'https://github.com/webdirection-dev'}> NextJS
                    <span className='text-500'> and</span>
                    <span className='text-green-500'> MongoDB</span>
                </Link>
            </div>
        </footer>
    )
}
export default Footer