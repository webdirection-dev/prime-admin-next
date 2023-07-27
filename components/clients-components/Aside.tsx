'use client'

import { useAside } from './hooks/use-aside'
import { useMatchDesktop } from './hooks/use-match-desktop'

export default function Aside() {
    const { isNotDesktop } = useMatchDesktop()
    const { isShowAside } = useAside()

    const classes = {
        width: '300px',
        height: 'calc(100vh - 9rem)',
        transition: 'transform .2s,left .2s',
        backgroundColor: 'var(--surface-overlay)',
        boxShadow: '0 3px 5px rgba(0,0,0,.02),0 0 2px rgba(0,0,0,.05),0 1px 4px rgba(0,0,0,.08)',
        transform: !isShowAside ? 'translateX(-100%)' : '',
        left: !isShowAside ? '0' : '2rem',
        top: '7rem',
    }

    return (
        <aside className={`fixed border-round-xl overflow-y-auto py-2 px-4 z-5`} style={classes} >

        </aside>
    )
}
