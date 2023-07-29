import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function AsideItem({ title, path }: any) {
    const currentPath = usePathname()

    const styles = {
        color: path === currentPath ? 'var(--primary-color)' : 'var(--text-color)',
        transition: 'background-color .2s, box-shadow .2s',
        padding: '0.75rem'
    }

    return (
        <li>
            <Link
                href={path}
                className='flex align-items-center font-bold capitalize outline-none border-round-2xl hover:surface-hover'
                style={styles}
            >
                <i className="pi pi-fw pi-home mr-2"></i>
                <span>{title}</span>
            </Link>
        </li>
    )
}
