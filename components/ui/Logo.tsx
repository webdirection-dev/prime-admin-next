import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
    // const colorScheme = 'white'
    const colorScheme = 'dark'

    return (
        <Link
            href='/'
            className='flex items-center'
            style={{ color: 'var(--surface-900)', width: '300px' }}
        >
            <Image
                src={`/img/logo/logo-${colorScheme}.svg`}
                width={47.22}
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