'use client'

import { useAppSelector } from '@/utils/lib/store'
import { selectMenuInfo } from '@/utils/lib/store/menu-slice'

export default function ContainerMain({ children }: any) {
    const { isShowAside } = useAppSelector(store => selectMenuInfo(store))
    const classes = {
        minHeight: 'calc(100vh - 5rem)',
        transition: 'margin-left .2s',
        marginLeft: isShowAside ? '300px' : '0',
        paddingLeft: isShowAside ? '4rem' : '2rem',
    }

    return (
        <div className='flex flex-column justify-content-between py-5' style={classes} >
            {children}
        </div>
    )
}