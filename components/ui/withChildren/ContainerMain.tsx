'use client'

import { useAppSelector } from '@/utils/lib/store'
import { selectMenuInfo } from '@/utils/lib/store/menu-slice'
import { useMatchDesktop } from '../../clients-components/hooks/use-match-desktop'
import { Mask } from '../../clients-components/Mask'

export default function ContainerMain({ children }: { children: React.ReactNode }) {
    const { isShowAside, isShowMobileAside } = useAppSelector(store => selectMenuInfo(store))
    const { isNotDesktop } = useMatchDesktop()

    const classes = {
        minHeight: 'calc(100vh - 5rem)',
        transition: 'margin-left .2s',

    }

    const modified = !isNotDesktop ?
        {
            marginLeft: isShowAside ? '300px' : '0',
            paddingLeft: isShowAside ? '4rem' : '2rem',
        } :
        {
            marginLeft: '0',
            paddingLeft: '2rem',
        }

    return (
        <div className='relative flex flex-column justify-content-between py-5' style={{ ...classes, ...modified }} >
            {children}
            {isShowMobileAside && isNotDesktop && <Mask />}
        </div>
    )
}