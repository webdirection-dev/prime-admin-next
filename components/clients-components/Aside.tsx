'use client'

import { useAppSelector } from '@/utils/lib/store'
import { useMatchDesktop } from './hooks/use-match-desktop'
import { selectMenuInfo } from '@/utils/lib/store/menu-slice'

export default function Aside() {
    const { isShowMobileAside, isShowAside } = useAppSelector(store => selectMenuInfo(store))
    const { isNotDesktop } = useMatchDesktop()

    const classes = {
        width: '300px',
        transition: 'transform .2s,left .2s',
        backgroundColor: 'var(--surface-overlay)',
        boxShadow: '0 3px 5px rgba(0,0,0,.02),0 0 2px rgba(0,0,0,.05),0 1px 4px rgba(0,0,0,.08)',
    }

    const modified = isNotDesktop ?
        {
            transform: isShowMobileAside ? 'translateX(0)' : 'translateX(-100%)',
            left: '0',
            top: '0',
            height: '100vh',
            borderTopLeftRadius: '0',
            borderBottomLeftRadius: '0',
        } :
        {
            height: 'calc(100vh - 9rem)',
            transform: !isShowAside ? 'translateX(-100%)' : '',
            left: !isShowAside ? '0' : '2rem',
            top: '7rem',
        }

    return (
        <aside className={`fixed border-round-xl overflow-y-auto py-2 px-4 z-5`} style={{ ...classes, ...modified }} >

        </aside>
    )
}
