'use client'

import { useAppSelector } from '@/utils/lib/store'
import { selectMenuInfo } from '@/utils/lib/store/menu-slice'
import { useState } from 'react'

export default function Aside() {
    const { isShowAside } = useAppSelector(store => selectMenuInfo(store))
    const [isShow, setIsShow] = useState(false)
    const classes = {
        width: '300px',
        height: 'calc(100vh - 9rem)',
        transition: 'transform .2s,left .2s',
        backgroundColor: 'var(--surface-overlay)',
        boxShadow: '0 3px 5px rgba(0,0,0,.02),0 0 2px rgba(0,0,0,.05),0 1px 4px rgba(0,0,0,.08)',
        transform: !isShowAside ? 'translateX(-100%)' : '',
        left: !isShowAside ? '0' : '2rem',
    }

    return (
        <aside className={`fixed top-28 rounded-lg overflow-y-auto py-2 px-6 z-50`} style={{ ...classes }} >

        </aside>
    )
}
